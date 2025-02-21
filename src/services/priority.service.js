const boom = require('@hapi/boom');
const { models } = require('../DB/sequelize');

class PriorityService {
  async create(data) {
    return await models.Priority.create(data);
  }

  async findAll() {
    return await models.Priority.findAll();
  }

  async findById(id) {
    const priority = await models.Priority.findByPk(id);
    if (!priority) throw boom.notFound('Prioridad no encontrado');
    return priority;
  }

  async update(id, data) {
    const priority = await this.findById(id);
    return await priority.update(data);
  }

  async delete(id) {
    const priority = await this.findById(id);
    await priority.destroy();
  }
}

module.exports = PriorityService;