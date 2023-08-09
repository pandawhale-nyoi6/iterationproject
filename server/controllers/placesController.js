const db = require('../../models/placesModel')
require('dotenv').config();

const placesController = {};


placesController.queryGoogle = async (req, res, next) => {
    try {
        const { input, locationbias } = req.query
        console.log(input, locationbias)

        const apiResult = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.PLACESAPI}&input=${input}&inputtype=textquery&locationbias=${locationbias}&fields=formatted_address%2Cname%2Ctype%2Curl%2Cvicinity%2Cwheelchair_accessible_entrance`)

        console.log(apiResult);

        res.locals.places = apiResult;
        return next();
    }
    catch(err){
        err = {
            log: 'There was an error in the placesController.queryGoogle middleware: ' + err,
            status: 500,
            message: { err: 'There was an unknown server error'}
        }
        return next(err)
    }
}

//populate search results
placesController.getResults = async (req, res, next) => {
    try{
        const { categories, neighborhoods } = req.body

        function format(array) {
            const joined = array.map(value => `'${value}'`).join(', ');
            const formatted = '(' + joined + ')';
            return formatted;
        }

        const formattedCategories = format(categories)
        const formattedNeighborhoods = format(neighborhoods)

        const selectResults = `SELECT place_name, category, address, neighborhood FROM places WHERE category IN ${formattedCategories} AND neighborhood IN ${formattedNeighborhoods}`

        const results = await db.query(selectResults);
        res.locals.searchResults = results.rows;
        return next();
    }
    catch(err) {
        err = {
            log: 'There was an error in the placesController.getResults middleware' + err,
            status: 500,
            message: { err: 'There was an unknown server error'}
        }
        return next(err)
    }

}


module.exports = placesController;