var express = require('express');

var app = express.createServer(express.logger());

var buff = new Buffer(30);

var infile = "index.html"

buff.readFileSync(infile);

app.get('/', function(request, response) {
  response.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
