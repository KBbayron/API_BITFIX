const Joi = require('joi')

const username = Joi.string().min(3)
const apellido = Joi.string().min(3)
const password = Joi.string().min(8)
const phone = Joi.number()
const string = Joi.string()
const email = Joi.string().email()
const rolId = Joi.number().integer()
const empresa = Joi.string().max(25)

const createUserSchema = Joi.object({
  username: username.required(),
  password: password.required(),
  rolId: rolId.required()
})

const createProfileSchema = Joi.object({
  name: string.required(),
  phone: phone,
  email: email.required(),
  empresa,
  lastname: apellido
})

const loginAuthenticationSchema = Joi.object({
  username: username.required(),
  password: password.required()
})

const registerAuthenticationSchema = Joi.object({
  usuario: createUserSchema.required(),
  perfil: createProfileSchema.required()
})

const recoveryAccountSchema = Joi.object({
  email: email.required()
})

const changePasswordSchema = Joi.object({
  token: string.required(),
  newPassword: password.required()
})

module.exports = {
  loginAuthenticationSchema,
  registerAuthenticationSchema,
  recoveryAccountSchema,
  changePasswordSchema
}