// read and set environment variables
require('dotenv').config();

// set up twitter client
const Twitter = require('twitter');
const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

let params = {q: "potato", result_type: "recent", count: 5}
client.get('search/tweets', params, function (error, tweets, response) {
  if (error) throw error;
  console.log(tweets);
  tweets.statuses.forEach(status => console.log(status.created_at + ' ' + status.text));
})
