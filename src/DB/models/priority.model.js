const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Priority = sequelize.define('Priority', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  create_ad: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'priorities',
  timestamps: false
});

module.exports = Priority;
