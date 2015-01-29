// LIBRARIES
var express = require('express');
var app = express();
var handlebars = require('express-handlebars');

// HANDLEBARS CONFIG
handlebarsConfig = {};

// EXPRESS CONFIG
app.engine('handlebars', handlebars(handlebarsConfig));
app.set('view engine', 'handlebars');

// EXPRESS ROUTES
app.use(require(__dirname + '/routes'));

// START SERVER
var server = app.listen(process.env.PORT || 80, function(){
	console.log('Listening');
});
