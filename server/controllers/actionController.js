const User = require('../../models/userModel');
const bcrypt = require('bcryptjs');
const db = require('../../models/placesModel');

const actionController = () => {
    rateAddBeen: async (req,res,next) => {
        try{
            let {rating,location} = req.body;
            const newRating = await locationSchema.create({});
        }catch(err){

        }
    }
;
}

module.export = actionController;
