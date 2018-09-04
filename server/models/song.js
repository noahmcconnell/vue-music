let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    albumArt: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    audioPreview: {
        type: String,
        required: true
    },
    tempId: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Song', schema)