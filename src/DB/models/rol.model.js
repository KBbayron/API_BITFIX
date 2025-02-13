const { Model, DataTypes } = require('sequelize');

const ROL_TABLE = 'roles';

const rolesSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  createAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field:'create_ad'
  }
};

class Rol extends Model {
  static associate(models) {
    this.hasMany(models.User,{
      foreignKey: 'rol_id', 
      as: 'usuarios'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ROL_TABLE,
      modelName: 'Rol',
      timestamps: false,
    };
  }
}

module.exports = {
  ROL_TABLE,
  rolesSchema,
  Rol,
};