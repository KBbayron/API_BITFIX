const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Device = sequelize.define('Device', {
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
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  tableName: 'device',
  timestamps: false
});

module.exports = Device;
