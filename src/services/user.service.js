const boom = require('@hapi/boom');
const { models } = require('../DB/models/user.model');

class UserService {
  async create(data) {
    return await models.User.create(data);
  }

  async findAll() {
    return await models.User.findAll();
  }

  async findById(id) {
    const user = await models.User.findByPk(id);
    if (!user) throw boom.notFound('Usuario no encontrado');
    return user;
  }

  async update(id, data) {
    const user = await this.findById(id);
    return await user.update(data);
  }

  async delete(id) {
    const user = await this.findById(id);
    await user.destroy();
  }
}

module.exports = UserService;