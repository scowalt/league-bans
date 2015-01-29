// LIBRARIES
var express = require('express');
var app = express();

// EXPRESS ROUTES
app.use(require(__dirname + '/routes'));

// START SERVER
var server = app.listen(process.env.PORT || 80, function(){
	console.log('Listening');
});
