const { Router } = require('express')
const passport = require('passport')
const AuthService = require('../services/auth.service')
const { validatorHandler } = require('../middlewares/validator.hadler')
const {
  loginAuthenticationSchema,
  registerAuthenticationSchema,
  recoveryAccountSchema,
  changePasswordSchema
} = require('../schema/auth.schema')

const authService = new AuthService()
const path = 'auth'
const router = Router()

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
        const user = req.user

        const { user: userData, token } = await authService.signToken(user)

        res.json({ user: userData, token })
    } catch (error) {
        next(error)
    }
  }
)

router.post('/register',validatorHandler(registerAuthenticationSchema, 'body'),
  async (req, res, next) => {
    const { body } = req
    try {
      const auth = await authService.register(body)
      res.json({
        message: 'registered',
        data: auth,
      })
    } catch (error) {
      next(error)
    }
  }
)

router.post('/recovery',validatorHandler(recoveryAccountSchema, 'body'),
  async (req, res, next) => {
    try {
      const { email } = req.body
      const response = await authService.sendPassword(email)
      res.json(response)
    } catch (error) {
      next(error)
    }
  }
)

router.post( '/change-password',
  validatorHandler(changePasswordSchema, 'body'),
  async (req, res, next) => {
    try {
      const { token, newPassword } = req.body
      const response = await authService.changePassword(token, newPassword)
      res.json(response)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = {
  path,
  router,
}