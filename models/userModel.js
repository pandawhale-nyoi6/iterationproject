const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    score: {type: Number},
    tags: [{type: String}]
});

const userSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    beenList: [locationSchema],
    savedList: [{type: String}],
    friendList: [{type: String}],
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);