var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

// Server static content for the app from the public directory in app directory
app.use(express.static('public'));

// Parse application body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/burger_controllers.js');

app.use(routes);

// Start our server so that it can begin listening to client request
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log('Server listening on: http://localhost:' + PORT);
});
