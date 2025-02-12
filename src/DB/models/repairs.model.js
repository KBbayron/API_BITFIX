const { Model, DataTypes } = require('sequelize');
const { Priority } = require('./priority.model'); 
const { Device } = require('./device.model'); 

const REPAIR_TABLE = 'repairs';

const repairsSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  device_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Device,
      key: 'id'
    }
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  create_ad: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW
  },
  priority_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Priority,
      key: 'id'
    }
  }
};

class Repair extends Model {
  static associate(models) {
    // Definir asociaciones aquí si existen
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: REPAIR_TABLE,
      modelName: 'Repair',
      timestamps: false,
  }};
}

module.exports = {
  REPAIR_TABLE,
  repairsSchema,
  Repair,
};