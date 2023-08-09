const db = require('../../models/placesModel')
require('dotenv').config();

const placesController = {};


placesController.queryGoogle = async (req, res, next) => {
    // try {
        console.log('entering the google query')
        const { input, location } = req.query

        const encodeInput = encodeURIComponent(input)
        const encodeLocation = encodeURIComponent(location)

        if (!location) {
            fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${input}&radius=10000&key=${process.env.PLACESAPI}`)
                .then((response) => response.json())
                .then((output) => {
                    res.locals.places = output.results
                    return next();
                })
                .catch((err) => console.log(err))
        } else {
            fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?location=${encodeLocation}&query=${input}&radius=500&key=${process.env.PLACESAPI}`)
            .then((response) => response.json())
            .then((output) => {
                res.locals.places = output.results
                return next();
            })
            .catch((error) => {
                err = {
                    log: 'There was an error in the placesController.queryGoogle middleware' + error,
                    status: 500,
                    message: { err: 'There was an unknown server error'}   
                }
                return next(err)
            })
        }
}

module.exports = placesController;