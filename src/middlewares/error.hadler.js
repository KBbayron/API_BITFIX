const { ValidationError } = require('sequelize')

function longError(error, req, res, next) {
  console.error(error)
  next(error)
}

function ormErrorHandler(error, req, res, next) {
  if (error instanceof ValidationError) {
    return res.status(409).json({
      statusCode: 409,
      message: error.name,
      errors: error.errors,
    })
  }
  next(error)
}

function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error
    return res.status(output.statusCode).json(output.payload)
  }
  next(error)
}

function errorHandler(error, req, res, next) {
  res.status(500).json({
    statusCode: 500,
    message: error.message,
    stack: error.stack,
  })
}

module.exports = {
  longError,
  ormErrorHandler,
  boomErrorHandler,
  errorHandler,
}