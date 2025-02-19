const boom = require('@hapi/boom');
const { models } = require('../DB/models/rol.model');

class RolService {
  async create(data) {
    return await models.Rol.create(data);
  }

  async findAll() {
    return await models.Rol.findAll();
  }

  async findById(id) {
    const rol = await models.Rol.findByPk(id);
    if (!rol) throw boom.notFound('Reparacion no encontrado');
    return rol;
  }

  async update(id, data) {
    const rol = await this.findById(id);
    return await rol.update(data);
  }

  async delete(id) {
    const rol = await this.findById(id);
    await rol.destroy();
  }
}

module.exports = RolService;