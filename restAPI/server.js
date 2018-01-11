var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./api/models/userModel'), //created user model loading here
    Event = require('./api/models/eventModel'), //created event model loading here
    bodyParser = require('body-parser'),
    expressWs = require('express-ws')(app);


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BringItdb', {useMongoClient: true});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


var routes = require('./api/routes/bringItRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Bringit RESTful API server started on: ' + port);