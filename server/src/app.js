const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

// App intialization
const app = express()

// App configuration
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Endpoints
app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})

// Server listening
app.listen(process.env.PORT || 8081)
