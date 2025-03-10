const passport = require('passport')
const LocalStrategy = require('./local.strategy')
const jwtStrategy = require('./jwt.strategy')

function useAuthStrategies() {
  passport.use(LocalStrategy)
  passport.use(jwtStrategy)
}

module.exports = { useAuthStrategies }