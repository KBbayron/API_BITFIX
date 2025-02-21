const { Model, DataTypes } = require('sequelize');
const { PRIORITY_TABLE } = require('./priority.model'); 
const { DEVICE_TABLE } = require('./device.model'); 

const REPAIR_TABLE = 'repairs';

const repairsSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  deviceId: {
    type: DataTypes.INTEGER,
    field:'device_id',
    references: {
      model: DEVICE_TABLE ,
      key: 'id'
    }
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  createAt: { 
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'create_ad'
  },
  priorityId: {
    type: DataTypes.INTEGER,
    field:'priority_id',
    references: {
      model: PRIORITY_TABLE,
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