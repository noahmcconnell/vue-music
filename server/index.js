
let express = require('express')
let bp = require('body-parser')
let cors = require('cors')
let port = 3000
let server = express()
const mongoose = require('mongoose')
const connectionString = 'mongodb://noahmcconnell:Baseball2@ds018558.mlab.com:18558/vue-tunes'
let connection = mongoose.connection

mongoose.connect(connectionString)

connection.on('error', err => {
    console.log('error from DB', err)
})

connection.once('open', () => {
    console.log('OPENED DB')
})

server.use(cors())
server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))

let songRoutes = require('./routes/songs')
let playlistRoutes = require('./routes/playlists')

server.use('/songs', songRoutes)
server.use('/playlists', playlistRoutes)

server.use('*', (req, res, next) => {
    res.status(404).send('NOPE')
})
server.listen(port, () => {
    console.log('server listen', port)
})