const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Repair = require('./Repair');

const Ticket = sequelize.define('Ticket', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  repair_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Repair,
      key: 'id'
    }
  },
  solved: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'ticket',
  timestamps: false
});

module.exports = Ticket;
