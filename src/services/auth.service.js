const bcrypt = require('bcrypt')
const boom = require('@hapi/boom')
const { models } = require('../db/sequelize')
const nodemailer = require('nodemailer')
const config = require('../config/config')
const jwt = require('jsonwebtoken')
const {
  JWT_SECRET,
  BCRYPT_SALTS,
  WEB_URL,
  MAILER_EMAIL,
  MAILER_PASSWORD,
} = require('../config/config')

class AuthService {
  signToken(user) {
    // Verificar que el usuario no sea nulo o indefinido
    if (!user || !user.dataValues) {
      throw boom.badImplementation('El usuario no fue encontrado o no tiene datos');
    }
  
    const payload = {
      sub: user.id,        // ID del usuario
      role: user.roleId,   // ID del rol del usuario (si se pasa como null, podría causar problemas)
    };
  
    if (!config.JWT_SECRET) {
      throw boom.badImplementation('La clave secreta no está definida');
    }
  
    const token = jwt.sign(payload, config.JWT_SECRET, {
      expiresIn: '48h',  // Ajusta el tiempo de expiración si es necesario
    });
  
    // Elimina la contraseña antes de enviar la respuesta
    const { password, ...userWithoutPassword } = user.dataValues;
  
    // Devuelve el usuario y el token
    return { user: userWithoutPassword, token };
  }

  async getUser(username, password) {
    console.log('Ingresado:', password);
  
    // Buscar el usuario
    const user = await models.User.findOne({ where: { user: username } });
    if (!user) {
      throw boom.notFound('Usuario no encontrado');
    }
  
    console.log('En BD:', user.password);  // El hash de la contraseña en la base de datos
  
    // Compara las contraseñas
    const isMatch = await bcrypt.compare(password.trim(), user.password);  // Compara el hash de la contraseña
    console.log('Password Match:', isMatch);
  
    if (!isMatch) {
      throw boom.unauthorized('Contraseña incorrecta');
    }
  
    return user;
  }

  async register(data) {
    const { usuario, perfil } = data;
  
    // Validar la estructura de los datos de entrada
    if (!usuario.username || !usuario.password) {
      throw boom.badRequest('El username y password son obligatorios');
    }
  
    if (!perfil.email || !perfil.name) {
      throw boom.badRequest('El correo electrónico y el nombre son obligatorios');
    }
  
    // Verificar si el username ya existe
    const foundUser = await models.User.findOne({ where: { user: usuario.username } });
    if (foundUser) {
      throw boom.conflict('El username de usuario ya existe');
    }
  
    // Verificar si el correo electrónico ya está en uso
    let profile = await models.Perfil.findOne({ where: { email: perfil.email } });
    if (profile) {
      throw boom.conflict('El correo electrónico ya está en uso con otro usuario');
    } else {
      profile = await models.Perfil.create(perfil); // Crear perfil si no existe
    }
  
    // Crear el hash de la contraseña
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(usuario.password, salt);
    usuario.password = hashedPassword;
  
    // Crear el usuario
    const user = await models.User.create({
      user: usuario.username,
      password: usuario.password,  // Se guarda la contraseña hasheada
      perfilId: profile.id,        // Asociar el perfil creado al usuario
    });
  
    if (!user) {
      throw boom.badImplementation('Error al crear el usuario');
    }
  
    // Generar token de autenticación
    const { token } = this.signToken(user);
  
    return { auth: { usuario: user, perfil: profile, token } };
  }
  
  
  async sendPassword(email) {
    const user = await this.findUserByUsernameOrEmail(email)
    if (!user) {
      throw boom.notFound('El correo electrónico no existe')
    }
    const payload = { sub: user.id }
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '30min' })
    const link = `${WEB_URL}/recovery?token=${token}`
    await user.update({ recoveryToken: token })

    const mail = {
      from: `${MAILER_EMAIL}`,
      to: `${email}`,
      subject: 'Email de recuperación de contraseña',
      html: `
      <p>Tiene 30 minutos para recuperar su contraseña</p>
      <b>Ingresa a este link => ${link} </b>
      `,
    }

    const response = await this.sendEmail(mail)
    return response
  }

  async sendEmail(infoMail) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: MAILER_EMAIL,
        pass: MAILER_PASSWORD,
      },
    })
    await transporter.sendMail(infoMail)

    return { message: 'Mail enviado!' }
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, JWT_SECRET)
      const user = await models.User.findOne({ where: { id: payload.sub } })
      if (token !== user.recoveryToken) {
        throw boom.unauthorized('No se puede cambiar la contraseña')
      }

      const hashedPassword = await bcrypt.hash(newPassword, BCRYPT_SALTS)
      await user.update({ recoveryToken: null, password: hashedPassword })
      return { message: 'Contraseña cambiada' }
    } catch (error) {
      throw boom.unauthorized(
        'El tiempo expiró, solicite un nuevo mail de recuperación de contraseña'
      )
    }
  }

  async findUserByUsernameOrEmail(username) {
    let user = await models.User.findOne({ where: { user: username } })
    if (!user) {
      const profile = await models.Perfil.findOne({ where: { email: username } })
      if (profile) {
        user = await models.Usuario.findOne({ where: { perfilId: profile.id } })
      }
    }
    if (!user) {
      throw boom.notFound('usuario/email o contraseña incorrectas')
    }
    return user
  }
}

module.exports = AuthService