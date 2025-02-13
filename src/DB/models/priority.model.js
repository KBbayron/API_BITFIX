const { Model, DataTypes } = require('sequelize');

const PRIORITY_TABLE = 'priorities';

const prioritiesSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  createAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'create_ad',
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
};

class Priority extends Model {
  static associate(models) {
    // Definir asociaciones aquí si existen
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRIORITY_TABLE,
      modelName: 'Priority',
      timestamps: false,
    };
  }
}

module.exports = {
  PRIORITY_TABLE,
  prioritiesSchema,
  Priority,
};