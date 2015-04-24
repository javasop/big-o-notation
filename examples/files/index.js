var http = require('http');

server = http.createServer();
server2 = http.createServer();


server.on('request',function(req,res){

  //fs.appendFile('log.txt', "\n"+req.method, function (err) {
  //  if (err) throw err;
  //});

  res.end("hi")

})
server2.on('request',function(req,res){

  res.end("hello");

})



server.listen(1337, '127.0.0.1');
server2.listen(1338, '127.0.0.1');
console.log("server is running on 1337")

