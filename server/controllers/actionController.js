const { User } = require('../../models/userModel');
const { Location } = require('../../models/userModel');

//const bcrypt = require('bcryptjs');
const express = require("express");
const db = require('../../models/placesModel');
const { Client } = require('pg');

const actionController = () => {

    //from search screen when user presses save
    saveToList: async (req,res,next) => {
        try{
            //deconstruct the request body
            let {email, location, address} = req.body;
            //make a newSave Location object
            //update object according to email -> if it doesn't exist, create new document with said email
            const result = await User.updateOne({email: email}, 
                {$push: {location: location, address: address, rating: '0'}}, 
                {upsert: true});
            res.locals.user = result;
            return next();
        }catch(err){
            err = {
                log: 'There was an error in the actionController.saveToList middleware' + err,
                status: 500,
                message: { err: 'There was an unknown server error'}
            }
            return next(err);
        }
    }
    //when user press rate-> add an addition to the have been database
    rateAddBeen: async (req,res,next) => {
        try{
            //deconstruct request body into rating and location
            let {email,rating,location} = req.body;
            //create the newRating in the haveBeen
            let newLoc = { location: location, rating: rating };
            res.locals.User.hasBeen = await User.beenList.push(newLoc);
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


    
;
}

module.export = actionController;
