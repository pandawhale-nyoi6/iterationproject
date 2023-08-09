const { User } = require('../../models/userModel');
const { Location } = require('../../models/userModel');
const bcrypt = require('bcryptjs');
const db = require('../../models/placesModel');

const actionController = () => {
    //when user press rate-> add an addition to the have been database
    rateAddBeen: async (req,res,next) => {
        try{
            //deconstruct request body into rating and location
            let {email,rating,location} = req.body;
            //create the newRating in the haveBeen
            let newLoc = await Location.create({locationID: location, score: rating} )
            await User.beenList.findandUpdate({email:email},newLoc);
            next();

        }catch(err){
            err = {
                log: 'There was an error in the actionController.rateAddBeen middleware' + err,
                status: 500,
                message: { err: 'There was an unknown server error'}
            }
            return next(err);
        }
    }

    //from search screen when user presses save
    saveToList: async (req,res,next) => {
        try{
            //deconstruct the request body
            let {email, location} = req.body;
            //make a newSave Location object
            let newSave = await Location.create({locationID, location});
            await User.saveToList.create({email: email}, newSave);
           
            next();
        }catch(err){
            err = {
                log: 'There was an error in the actionController.saveToList middleware' + err,
                status: 500,
                message: { err: 'There was an unknown server error'}
            }
            return next(err);
        }
    }

    
;
}

module.export = actionController;
