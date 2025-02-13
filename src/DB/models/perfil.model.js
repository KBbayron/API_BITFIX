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
  lastName: {
    type: DataTypes.STRING(15),
    allowNull: false,
    field:'last_name'
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
    this.hasMany(models.User, {
      foreignKey: 'perfil_id', 
      as: 'usuarios'
    });
  }
  static config(sequelize) {
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
