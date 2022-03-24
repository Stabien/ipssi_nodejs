const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server, {
    cors: {
        origin: '*'
    }
})
const routes = require('./router')
const {messages} = require("./controllers/messagesController");

const PORT = 4000

// Set up bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Setting headers to allow CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next()
})
io.on('connection', (socket) => {
    socket.on('chat message', msg => {
        io.emit('chat message', msg)
    })
})


server.listen(3000, function () {
    console.log('socket.io is on localhost:3000 !')
})
routes(app)
app.listen(PORT, () => {
    console.log('Application running !' + PORT)
})
