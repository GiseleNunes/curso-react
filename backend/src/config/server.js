const port = 3003

const bodyParser = require('body-parser')  // Realiza a conversão(parse) do que for recebido
const express = require('express')   // servidor web ue roda em cima do node
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server
