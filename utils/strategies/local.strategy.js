const { Strategy } = require('passport-local')
const AuthService = require('../../src/services/auth.service')

const service = new AuthService()
const LocalStrategy = new Strategy(
  {
    usernameField: 'username',
    passwordField: 'password',
  },
  async (username, password, done) => {
    try {
      const usuario = await service.getUser(username, password)
      done(null, usuario)
    } catch (err) {
      done(err, false)
    }
  }
)

module.exports = LocalStrategy