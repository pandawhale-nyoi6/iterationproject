// confirmed w/ arjun the name for userModel file name and property for username and password
const User = require('../models/userModel');
property;
const bcrypt = require('bcryptjs');

exports.signup = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // hash the password w/ a workfactor of 10
    const hashedPassword = await bcrypt.hash(password, 10);
    // create a new user and save it to mongoDB
    const newUser = new User({
      username: username,
      password: hashedPassword,
    });
    await newUser.save();
    next();
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username });
    if (!user) throw new Error('User not found');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error('Wrong password');

    // save user data to the request object or perform any other needed actions, then move to the next middleware
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
