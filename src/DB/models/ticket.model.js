const { Model, DataTypes } = require('sequelize');
const { Repair } = require('./repairs.model'); 

const TICKET_TABLE = 'ticket';
const ticketsSchema = {
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
};

class Ticket extends Model {
  static associate(models) {
    // Definir asociaciones aquí si existen
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TICKET_TABLE,
      modelName: 'Rol',
      timestamps: false,
    };
  }
}

module.exports = {
  TICKET_TABLE,
  ticketsSchema,
  Ticket,
};