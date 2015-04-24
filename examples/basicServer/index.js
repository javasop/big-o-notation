var http = require('http');

server = http.createServer();


server.on('request',function(req,res){

  req.on('data',function(data){

    console.log(data)

  })

  res.end("hi")

})

server.listen(1337, '127.0.0.1');
console.log("server is running on 1337")

