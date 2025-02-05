const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Rol = sequelize.define('Rol', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  create_ad: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'rol',
  timestamps: false
});

module.exports = Rol;
