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
  create_ad: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW
  }
};

class Priority extends Model {
  static associate(models) {
    // Definir asociaciones aquí si existen
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PERFIL_TABLE,
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