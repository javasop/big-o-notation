var http = require('http');
var express = require('express');


var app = express();

app.get('/',function(req,res){

    res.send("hello world")

})
app.post('/hello',function(req,res){

    res.send("hello there");

})


//var cFormatter = require("./connectionFormatter")
//
//server = http.createServer();
//
//var count = 0;
//
//server.on('request',function(req,res){
//
//    var responseData;
//    req.on('data',function(data){
//        responseData  = data.toString();
//        res.end("Hello "+responseData);
//    })
//
//    res.writeHead(304);
//    res.end("Hello ");
//
//
//    //if(req.url != "/favicon.ico")
//    //    count++;
//
//
//})
//server.on('connection',function(){
//
//    console.log("connection")
//
//})
//server.on('close',function(){
//
//
//})

app.listen(1337);
console.log("server is running on 1337")

