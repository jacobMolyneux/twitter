const mongoose = require('mongoose')
const Tweet = require('../models/tweetSchema')

exports.get_tweets = (req, res, next) => {
    const tweets = Tweet.find("Tweet")
    res.json(tweets)
}
exports.create_tweet = (req, res, next) => {
    const tweet = new Tweet(
        {
            created_at: Date.now(),
            text: req.body.text,
            created_by: req.body.author,
            like: 0,
            comments: [null]
        }
    )
    tweet.save((err) => {
        if(err) {
            return next(err)
        }
        res.json('tweet created')
    })
    
}

exports.like_tweet = (req, res, next) => {
    
    res.json('like tweet endpoint')
}

exports.comment_on_tweet = (req, res, next) => {
    res.json('comment on tweet endpoint')
}

exports.delete_tweet = (req, res, next) => {
    res.json('delete Tweet endpoint')
}
