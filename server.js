const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const sequelize = require('./src/DB/sequelize')
const {
  longError,
  ormErrorHandler,
  boomErrorHandler,
  errorHandler,
} = require('./src/middlewares/error.hadler')

class Server {
  apiRouter = express.Router()
  apiPath = '/api'
  apiVersion = 'v1'

  /**
   * @param {number} port
   * @param {{path: string, router: Router, apiVersion?: string}[]} routes
   */
  constructor(port, routes) {
    this.port = port
    this.app = express()

    this.preMiddlewares()
    this.routes(routes)
    this.postMiddlewares()
  }

  preMiddlewares() {
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(morgan('dev'))
  }

  postMiddlewares() {
    this.app.use(longError)
    this.app.use(ormErrorHandler)
    this.app.use(boomErrorHandler)
    this.app.use(errorHandler)
  }

  /**
   * @param {{path: string, router: Router, apiVersion?: string}[]} routes
   */
  routes(routes) {
    for (const { path, router, apiVersion } of routes) {
      const pathVersion = `/${apiVersion ?? this.apiVersion}/${path}`
      this.apiRouter.use(pathVersion, router)
    }
    this.app.use(this.apiPath, this.apiRouter)
  }

  async listen() {
    try {
      await sequelize.authenticate()
      console.info('Connection has been established successfully')
      this.app.listen(this.port, () => {
        console.info(`Server is listening on port ${this.port}`)
      })
    } catch (error) {
      console.error('Unable to connect to the database')
    }
  }
}

module.exports = { Server }