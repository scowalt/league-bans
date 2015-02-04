// LIBRARIES
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

// HANDLEBARS CONFIG
var handlebars = exphbs.create({
	helpers: {
		formatDecimal: function(e){ return e.toFixed(2); }
	}
});

// EXPRESS CONFIG
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// EXPRESS ROUTES
app.use(require(__dirname + '/routes'));
app.use(express.static('static'));

// START SERVER
var server = app.listen(process.env.PORT || 80, function(){
	console.log('Listening');
});
