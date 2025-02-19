const boom = require('@hapi/boom');
const { models } = require('../DB/models/consultations.model');

class ConsultationService {
  async create(data) {
    return await models.Consultation.create(data);
  }

  async findAll() {
    return await models.Consultation.findAll();
  }

  async findById(id) {
    const consultation = await models.Consultation.findByPk(id);
    if (!consultation) throw boom.notFound('Mensaje no encontrado');
    return consultation;
  }

  async update(id, data) {
    const consultation = await this.findById(id);
    return await consultation.update(data);
  }

  async delete(id) {
    const consultation = await this.findById(id);
    await consultation.destroy();
  }
}

module.exports = ConsultationService;