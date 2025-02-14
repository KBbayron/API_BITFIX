const boom = require('@hapi/boom');
const { models } = require('../DB/models/perfil.model');

class PerfilService {
  async create(data) {
    return await models.Perfil.create(data);
  }

  async findAll() {
    return await models.Perfil.findAll();
  }

  async findById(id) {
    const perfil = await models.Perfil.findByPk(id);
    if (!perfil) throw boom.notFound('Perfil no encontrado');
    return perfil;
  }

  async update(id, data) {
    const perfil = await this.findById(id);
    return await perfil.update(data);
  }

  async delete(id) {
    const perfil = await this.findById(id);
    await perfil.destroy();
  }
}

module.exports = PerfilService;