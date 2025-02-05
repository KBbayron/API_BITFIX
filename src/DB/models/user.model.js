const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Perfil = require('./Perfil');
const Rol = require('./Rol');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  perfil_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Perfil,
      key: 'id'
    }
  },
  rol_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Rol,
      key: 'id'
    }
  },
  user: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  create_ad: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'user',
  timestamps: false
});

module.exports = User;
