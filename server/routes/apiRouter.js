const express = require('express');
const router = express.Router();

//controllers
const userController = require('../controllers/userController.js');
const placesController = require('../controllers/placesController');

// signup route handler
router.post('/signup', userController.signup, (req, res, next) => {
  res.status(201).json({ message: 'User created!', user: res.locals.user });
});

// login route handler
router.post('/login', userController.login, (req, res, next) => {
  res
    .status(200)
    .json({ message: 'Logged in successfully!', user: res.locals.user });
});

// populate beenList handler, add middleware for querying mongo for beenList and SQL for location names
router.get('/beenList')

//populate tags for searchList
router.get('/searchTags')

//populate results from user initiated search
router.get('/userSearch')

// to add global error handler in server.js later

module.exports = router;
