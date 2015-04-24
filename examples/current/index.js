var http = require('http');
var reqConnection = require('./requestConnection');

var server = http.createServer();

server.on('request',function(req,res){

  connection = reqConnection(req);

  res.writeHead(200,{"content-type":"application/json"});

  res.end("hi");

});

server.listen(1337, '127.0.0.1');
console.log("server is running on 1337");

