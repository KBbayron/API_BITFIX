const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const DEVICE_TABLE = 'device';
const devicesSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  branch: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  model: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    references: {
      model: USER_TABLE,
      key: 'id'
    }
  }
};

class Device extends Model {
  static associate(models) {
    // Definir asociaciones aquí si existen
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: DEVICE_TABLE,
      modelName: 'Device',
      timestamps: false,
    };
  }
}

module.exports = {
  DEVICE_TABLE,
  devicesSchema,
  Device,
};