// server.js
// call the packages we need
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// connect to database
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/Competency-Browser');

//include the models
var Category = require('./models/categories');
var Skills = require('./models/skills');
var Jobs = require('./models/jobs');

// configure app to use bodyParser()
// to get data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//serve static angular pages from the app folder
app.use(express.static(__dirname + '/app'));

var port = process.env.PORT || 8080; 		// set our port

// ROUTES FOR OUR API
//******************************************************
var router = express.Router();

// middleware to use for all requests
// Use this for validation and error logging
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next(); // make sure we go to the next routes and don't stop here
});

// test route (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'Sweet. We have an API!' });
});

// API Routes
router.route('/models')

	//******************************************************
	//GET ALL
	//get all models (accessed at GET http://localhost:8080/api/models)
	//******************************************************
	.get(function(req, res) {
		Jobs.find(function(err, jobs) {
			if (err)
				res.send(err);

			res.json(jobs);
		});
	});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
