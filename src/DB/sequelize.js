const { Sequelize } = require('sequelize')
const { DB_URL, IS_PROD } = require('../config/config')
const models = require('./models')

const sequelizeOptions = {
  dialect: 'mysql',
  logging: false,
}

if (IS_PROD) {
  sequelizeOptions.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  }
}

const sequelize = new Sequelize(DB_URL, sequelizeOptions)

for (const { model, schema } of models) {
  model.init(schema, model.config(sequelize))
}
for (const { model } of models) {
  model.associate(sequelize.models)
}

module.exports = sequelize;
