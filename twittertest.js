var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'AmvSiaqMtXwiMQjxzsIzXltdu',
    consumer_secret: '5T7czKylKgutQlTjot7o5XvAJnxaNlACnlEbt2Joi7NapsmU2g',
    access_token_key: '247943134-GJQICroCVObqgbncvv4JtzmOyJ3S4KkJVUJCZHOZ',
    access_token_secret: 'YlgAdvU1ZcYeKGiTpX8hZg7oYvEKvDHU11CqO3NeGgWch'
});

client.get('search/tweets', {q: 'lolcat'}, function(error, tweets){
    response.end(JSON.stringify(tweets));
});
