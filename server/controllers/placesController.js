const db = require('../../models/placesModel')

const placesController = {};

//populate search results
placesController.getResults = async (req, res, next) => {
    try{
        const { categories, neighborhoods } = req.body

        function format (array) {
            const joined = array.map(value => `'${value}'`).join(', ');
            const formatted = '(' + joined + ')';
            return formatted;
        }

        const formattedCategories = format(categories)
        const formattedNeighborhoods = format(neighborhoods)

        const selectResults = `SELECT place_name, category, address, neighborhood FROM places WHERE category IN ${formattedCategories} AND neighborhood IN ${formattedNeighborhoods}`

        const results = await db.query(selectResults);
        res.locals.searchResults = results.rows;
        console.log(res.locals.searchResults)
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