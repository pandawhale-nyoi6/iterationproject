const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController.js');

router.post(
  '/signup',
  userController.signup,
  (req, res) => {
    res.status(201).json({ message: 'User created!' });
  },
  (error, req, res, next) => {
    res.status(500).json({ error: error.message || 'Signup failed!' });
  }
);

router.post(
  '/login',
  userController.login,
  (req, res) => {
    res.status(200).json({ message: 'Logged in successfully!' });
  },
  (error, req, res, next) => {
    res.status(500).json({ error: error.message || 'Login failed!' });
  }
);

module.exports = userRouter;
