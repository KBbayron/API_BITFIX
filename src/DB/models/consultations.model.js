const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Consultation = sequelize.define('Consultation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  transmiter: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  recivier: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  create_ad: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW
  },
  mesaje: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'consultations',
  timestamps: false
});

module.exports = Consultation;
