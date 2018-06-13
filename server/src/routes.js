const AuthenticationController = require('./controlles/AuthenticationController')

const AuthenticationMiddleware = require('./middlewares/AuthenticationControllerMiddlerware')

module.exports = (app) => {
  app.post('/register',
      AuthenticationMiddleware.register,
      AuthenticationController.register
  )
}
