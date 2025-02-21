const boom = require('@hapi/boom');
const { models } = require('../DB/sequelize');

class TicketService {
  async create(data) {
    return await models.Ticket.create(data);
  }

  async findAll() {
    return await models.Ticket.findAll();
  }

  async findById(id) {
    const ticket = await models.Ticket.findByPk(id);
    if (!ticket) throw boom.notFound('Ticket no encontrado');
    return ticket;
  }

  async update(id, data) {
    const ticket = await this.findById(id);
    return await ticket.update(data);
  }

  async delete(id) {
    const ticket = await this.findById(id);
    await ticket.destroy();
  }
}

module.exports = TicketService;