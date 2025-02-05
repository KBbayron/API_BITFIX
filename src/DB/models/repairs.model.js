const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Device = require('./Device');
const Priority = require('./Priority');

const Repair = sequelize.define('Repair', {
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
}, {
  tableName: 'repairs',
  timestamps: false
});

module.exports = Repair;
