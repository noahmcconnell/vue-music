let router = require('express').Router()
let Playlists = require('../models/playlist')
let mongoose = require('mongoose')
let ObjectId = mongoose.Types.ObjectId

router.get('/', (req, res, next) => {
    Playlists.find({})
        .then(playlist => {
            return res.status(200).send(playlist)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Playlists.create(req.body)
        .then(playlist => {
            return res.status(200).send(playlist)
        })
        .catch(next)
})
router.delete('/:id', (req, res, next) => {
    Playlists.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).send({
            message: 'Playlist Removed'
        }))
        .catch(next)
})
router.put('/:id', (req, res, next) => {
    Playlists.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.status(200).send({
            message: "Playlist Updated"
        }))
        .catch(next)
})


module.exports = router