## Let's create a Server

since nodejs is non-blocking. What are the things that blocks?

* Reads/Writes on the Database
* Calls to other web services


## Listen Server!

The server should "listen" on a specific port for a connection.

```
var http = require('http');

server = http.createServer();

server.listen(1337);
console.log("Server is listening on 1337");

```
Now we have a running server


## Detect a connection event

Nodejs is built around events. 

Let's listen to the connection event on the server

```
var http = require('http');

server = http.createServer();

server.on('connection',function(req,res){
    res.end("hello world");
});

server.listen(1337, '127.0.0.1');

```


