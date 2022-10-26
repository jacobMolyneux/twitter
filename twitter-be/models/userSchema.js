const mongoose = require('mongoose');
const tweetSchema = require('./tweetSchema');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, minlength: 3, maxlength: 32},
    password: {type: String, reuired: true, minlength: [5, 'Too Short! Password must be at least 5 5haracters long.'], maxlength: [16, 'Too Long! Password cannot be longer than 16 characters.']},
    tweets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }]
})

module.exports = mongoose.model('User', UserSchema)