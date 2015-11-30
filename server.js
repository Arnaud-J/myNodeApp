var http = require('http')
var port = process.env.PORT || 1337;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*' });
    response.end('Hello World\n');
}).listen(port);
