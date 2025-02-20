const { Model, DataTypes } = require('sequelize');
const { PERFIL_TABLE } = require('./perfil.model');
const { ROL_TABLE } = require('./rol.model');

const USER_TABLE = 'user';
const usersSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  perfilId: {
    type: DataTypes.INTEGER,
    field: 'perfil_id',
    references: {
      model: PERFIL_TABLE,
      key: 'id'
    }
  },
  rolId: {
    type: DataTypes.INTEGER,
    field: 'rol_id',
    references: {
      model: ROL_TABLE,
      key: 'id'
    }
  },
  user: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  createAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field:'create_ad'
  }
};

class User extends Model {
  static associate(models) {
    this.belongsTo(models.Perfil, {
      foreignKey: 'perfil_id',
      as: 'perfil' 
    });
    
    this.belongsTo(models.Rol, {
      foreignKey: 'rol_id',
      as: 'rol' 
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}

module.exports = {
  USER_TABLE,
  usersSchema,
  User,
};