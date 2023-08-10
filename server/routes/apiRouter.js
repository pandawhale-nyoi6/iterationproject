const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


//controllers
const userController = require('../controllers/userController.js');
const placesController = require('../controllers/placesController');
const actionController = require('../controllers/actionController.js')

// removed signup and login routes below as we're using oAuth now
// // signup route handler
// router.post('/signup', userController.signup, (req, res, next) => {
//   res.status(201).json({ message: 'User created!', user: res.locals.user });
// });

// // login route handler
// router.post('/login', userController.login, (req, res, next) => {
//   res
//     .status(200)
//     .json({ message: 'Logged in successfully!', user: res.locals.user });
// });
//router.post('/rateLoc', actionController.addToBeen, (req,res,next) )

router.post('/oauthSignup', userController.oauthSignup, (req, res, next) => {
  res.status(201).json({ message: 'User created or retrieved!', user: res.locals.user });
});
router.post('/saveLoc', actionController.saveTo, (req,res,next) => {
  res.status(200).json({message: 'Document created', savedList: res.locals.user})
})

// populate beenList handler, add middleware for querying mongo for beenList and SQL for location names
// router.post('/beenList', userController.beenList, (req, res) => {
//   res.status(200).json({beenList: res.locals.beenList})
// });

// router.post('/savedList', userController.savedList, (req, res) => {
//   res.status(200).json({savedList: res.locals.savedList})
// })

// //populate results from user initiated search
router.get('/placeSearch', placesController.queryGoogle, (req, res) => {
  res.status(200).send(res.locals.places)
})


//populate tags for searchList
// router.get('/searchTags')


// to add global error handler in server.js later

module.exports = router;