const express = require('express')
const places = express.Router()

// import data from models folder
const Places = require('../models/data')


// get all places
places.get('/', (req, res) => {
    res.render('index', {places: Places})
})

module.exports = places