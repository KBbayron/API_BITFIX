const { Model, DataTypes } = require('sequelize');
const { User_TABLE } = require('./user.model');

const DEVICE_TABLE = 'devices';
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
    references: {
      model: User_TABLE,
      key: 'id',
      filed: 'user_id',
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