var http = require('http')
var port = process.env.PORT || 1337;
var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: 'AmvSiaqMtXwiMQjxzsIzXltdu',
    consumer_secret: '5T7czKylKgutQlTjot7o5XvAJnxaNlACnlEbt2Joi7NapsmU2g',
    access_token_key: '247943134-GJQICroCVObqgbncvv4JtzmOyJ3S4KkJVUJCZHOZ',
    access_token_secret: 'YlgAdvU1ZcYeKGiTpX8hZg7oYvEKvDHU11CqO3NeGgWch'
});
var json = [];

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*' });
    client.get('search/tweets', {q: 'lolcat'}, function(error, tweets){
        for (var i =0; i< tweets.statuses.length ; i++)
        {
            json.push({name: tweets.statuses[i].user.name, text: tweets.statuses[i].text});
        }
        response.end(JSON.stringify(json));
    });
}).listen(port);
