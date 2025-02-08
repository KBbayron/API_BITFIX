const { Model, DataTypes } = require('sequelize');

const PERFIL_TABLE = 'profiles';

const perfilSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(8),
    unique: true,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
};

class Perfil extends Model {
  static associate(models) {
    // Definir asociaciones aquí si existen
  }

  static config(sequelize) {
    if (!sequelize) {
      throw new Error("Sequelize instance is required");
    }
    
    return {
      sequelize,
      tableName: PERFIL_TABLE,
      modelName: 'Perfil',
      timestamps: false,
    };
  }
}

module.exports = {
  PERFIL_TABLE,
  perfilSchema,
  Perfil,
};
