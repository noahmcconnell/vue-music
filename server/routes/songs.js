let router = require('express').Router()
let Songs = require('../models/song')

router.get('/', (req, res, next) => {
    Songs.find({})
        .then(songs => {
            return res.status(200).send(songs)
        })
        .catch(next)
})
router.post('/', (req, res, next) => {
    Songs.create(req.body)
        .then(song => {
            return res.status(200).send(song)
        })
        .catch(next)
})
router.delete('/:id', (req, res, next) => {
    Songs.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).send({
            message: 'song deleted'
        }))
        .catch(next)
})

module.exports = router