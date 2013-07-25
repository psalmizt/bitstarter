var express = require('express');
var fs = require('fs');

//, http = require('http');
//var app = express();
//var server = http.createServer(app)
//var buff = new Buffer(256);

app = express.createServer(express.logger());
app.get('/', function(request, response)
{
var buff = fs.readFileSync('index.html','ascii');
  response.send(buff);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
