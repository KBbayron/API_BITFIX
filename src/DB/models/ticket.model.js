const { Model, DataTypes } = require('sequelize');
const { REPAIR_TABLE } = require('./repairs.model'); 

const TICKET_TABLE = 'ticket';
const ticketsSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  repairId: {
    type: DataTypes.INTEGER,
    references: {
      model: REPAIR_TABLE ,
      key: 'id',
      filed: 'repair_id'
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
      modelName: 'Ticket',
      timestamps: false,
    };
  }
}

module.exports = {
  TICKET_TABLE,
  ticketsSchema,
  Ticket,
};