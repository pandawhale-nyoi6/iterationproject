const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

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

// to add global error handler in server.js later

module.exports = router;
