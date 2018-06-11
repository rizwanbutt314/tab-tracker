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
app.post('/register', (req, res) => {
  res.send({
    message: `Hi ${req.body.email}, You are registered now!`
  })
})

// Server listening
app.listen(process.env.PORT || 8081)
