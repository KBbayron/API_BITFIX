const { Model, DataTypes } = require('sequelize');
const { Perfil } = require('./perfil.model');
const { Rol } = require('./rol.model');

const USER_TABLE = 'users';
const usersSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  perfil_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Perfil,
      key: 'id'
    }
  },
  rol_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Rol,
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
  create_ad: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW
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