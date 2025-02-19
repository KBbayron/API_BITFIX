const boom = require('@hapi/boom');
const { models } = require('../DB/models/repairs.model');

class RepairsyService {
  async create(data) {
    return await models.Repair.create(data);
  }

  async findAll() {
    return await models.Repair.findAll();
  }

  async findById(id) {
    const repair = await models.Repair.findByPk(id);
    if (!repair) throw boom.notFound('Reparacion no encontrado');
    return repair;
  }

  async update(id, data) {
    const repair = await this.findById(id);
    return await repair.update(data);
  }

  async delete(id) {
    const repair = await this.findById(id);
    await repair.destroy();
  }
}

module.exports = RepairsyService;