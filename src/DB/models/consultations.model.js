const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require('./user.model'); 

const CONSULTATIONS_TABLE = 'consultationS';
const constationsSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  transmiter: {
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    }
  },
  recivier: {
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    }
  },
  createAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field:'create_ad'
  },
  messaje: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
};

class Consultation extends Model {
  static associate(models) {
    // Definir asociaciones aquí si existen
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CONSULTATIONS_TABLE,
      modelName: 'Consultation',
      timestamps: false,
    };
  }
}

module.exports = {
  CONSULTATIONS_TABLE,
  constationsSchema,
  Consultation,
};