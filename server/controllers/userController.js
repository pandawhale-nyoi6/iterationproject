const User = require('../../models/userModel');
const bcrypt = require('bcryptjs');
const db = require('../../models/placesModel');

const UserController = {
  // added below oauthSignup method
  oauthSignup: async (req, res, next) => {
    try {
      const { email, displayName } = req.body;

      if (!email || !displayName) {
        const err = new Error('Email or Display Name missing');
        return next(err);
      }

      // check if the user already exists
      let user = await User.findOne({ email: email });

      if (!user) {
        user = await User.create({
          email: email,
          displayName: displayName,
        });
      }

      res.locals.user = user;
      return next();
    } catch (error) {
      const err = new Error(
        'Error in UserController.oauthSignup: ' + error.message
      );
      return next(err);
    }
  },

  // below methods need to be updated given the userSchema changes
  // //getting saved list from mongo
  // savedList: async (req, res, next) => {
  //   try {
  //     const { username } = req.body;
  //     const user = await User.findOne({ username: username });

  //     if (!user) {
  //       const err = new Error('Error in UserController.savedList: User not found');
  //       return next(err);
  //     }

  //     //get savedList from user, should be an array of IDs
  //     const { savedList } = user;

  //     const namedSavedList = await savedList.map(placeObj => {const name = db.query(`SELECT name FROM Users where userID = ${placeObj.locationID}`);
  //     return {
  //       name: name,
  //       score: placeObj.score,
  //       tags: placeObj.tags
  //     }

  //   });

  //     res.locals.savedList = namedSavedList;

  //     return next();
  //   } catch (error) {
  //     const err = new Error('Error in UserController.login: ' + error.message);
  //     return next(err);
  //   }
  // },

  // beenList: async (req, res, next) => {
  //   try {
  //     const { username } = req.body;
  //     const user = await User.findOne({ username: username });

  //     if (!user) {
  //       const err = new Error('Error in UserController.savedList: User not found');
  //       return next(err);
  //     }

  //     //get beenList from user, should be an array of IDs
  //     const { beenList } = user;

  //     const namedList = await savedList.map(placeID => db.query(`SELECT name FROM Users where userID = ${placeID}`));

  //     res.locals.beenList = namedList;

  //     return next();
  //   } catch (error) {
  //     const err = new Error('Error in UserController.login: ' + error.message);
  //     return next(err);
  //   }
  // }
};

module.exports = UserController;
