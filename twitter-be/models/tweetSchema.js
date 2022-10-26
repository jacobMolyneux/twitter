const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TweetSchema = new Schema({
    created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    text: {type: String, maxlength: 140, minlength: 1, required: true},
    created_at: {type: Date, default: Date.now(), required: true},
    likes: {type: Number, min: 0, default: 0, required: true},
    comments: [
        {
            user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
            text: {type: String, maxlength: 140, minlength: 1, required: true},
            created_at: {type: Date, default: Date.now()}
        }
    ]
})

module.exports = mongoose.model('Tweet', TweetSchema)