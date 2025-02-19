const boom = require('@hapi/boom');
const { models } = require('../DB/models/device.model');

class DeviceService {
  async create(data) {
    return await models.Device.create(data);
  }

  async findAll() {
    return await models.Device.findAll();
  }

  async findById(id) {
    const device = await models.Device.findByPk(id);
    if (!device) throw boom.notFound('Dispositivo no encontrado');
    return device;
  }

  async update(id, data) {
    const device = await this.findById(id);
    return await device.update(data);
  }

  async delete(id) {
    const device = await this.findById(id);
    await device.destroy();
  }
}

module.exports = DeviceService;