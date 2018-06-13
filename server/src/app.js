const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const {sequelize} = require('./models')
const config = require('./config/config')

// App intialization
const app = express()

// App configuration
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Endpoints
require('./routes')(app)

sequelize.sync().then(() => {
  // Server listening
  app.listen(config.port)
})
