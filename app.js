// LIBRARIES
var express = require('express');
var app = express();

// EXPRESS ROUTES
app.get('/', function (req, res){
	res.send('Hello world!');
});

// START SERVER
var server = app.listen(80, function(){
	console.log('Listening');
});
