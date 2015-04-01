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
var Courses = require('./models/courses');

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
	console.log('Stuff is happening right now.');
	next(); // make sure we go to the next routes and don't stop here
});

// test route (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'Sweet. We have an API! Go team!' });
});


// API Routes
router.route('/skills')

	//******************************************************
	//GET ALL
	//get all skills (accessed at GET http://localhost:8080/api/skills)
	//******************************************************
	.get(function(req, res) {
		Skills.find(function(err, skills) {
			if (err)
				res.send(err);

			res.json(skills);
		});
	})

			// create a skill (accessed at POST http://localhost:8080/api/skills)
			.post(function(req, res) {

					var skill = new Skills();      // create a new instance of the Skill model
					skill.name = req.body.name;  // set the skills name (comes from the request)
					skill.id = req.body.id;  // set the skills name (comes from the request)
					skill.description = req.body.description;  // set the skills name (comes from the request)
					skill.flags = req.body.flags;  // set the skills name (comes from the request)

					// save the skill and check for errors
					skill.save(function(err) {
							if (err)
									res.send(err);

							res.json({ message: 'Skill created!' });
					});

			});



			// on routes that end in /skills/:skill_id
// ----------------------------------------------------
router.route('/skills/:skill_id')

		// get the skill with that id (accessed at GET http://localhost:8080/api/skills/:skill_id)
		.get(function(req, res) {
				Skills.findById(req.params.skill_id, function(err, skill) {
						if (err)
								res.send(err);
						res.json(skill);
				});
		})


		// update the skill with this id (accessed at PUT http://localhost:8080/api/skills/:skill_id)
		.put(function(req, res) {

				// use our skill model to find the skill we want
				Skills.findById(req.params.skill_id, function(err, skill) {

						if (err)
								res.send(err);

						skill.name = req.body.name;  // update the skills info

						// save the skill
						skill.save(function(err) {
								if (err)
										res.send(err);

								res.json({ message: 'Skill updated!' });
						});

				});
		})


		// delete the skill with this id (accessed at DELETE http://localhost:8080/api/skills/:skill_id)
		.delete(function(req, res) {
				Skills.remove({
						_id: req.params.skill_id
				}, function(err, skill) {
						if (err)
								res.send(err);

						res.json({ message: 'Successfully deleted' });
				});
		});









// API Routes
router.route('/categories')

	//******************************************************
	//GET ALL
	//get all categories (accessed at GET http://localhost:8080/api/categories)
	//******************************************************
	.get(function(req, res) {
		Category.find(function(err, categories) {
			if (err)
				res.send(err);

			res.json(categories);
		});
	})

			// create a category (accessed at POST http://localhost:8080/api/categorys)
			.post(function(req, res) {

					var category = new Category();      // create a new instance of the Category model
					category.id = req.body.id;  // set the category's name (comes from the request)
					category.name = req.body.name;  // set the category's name (comes from the request)
					category.description = req.body.description;  // set the category's name (comes from the request)

					// save the category and check for errors
					category.save(function(err) {
							if (err)
									res.send(err);

							res.json({ message: 'Category created!' });
					});

			});



			// on routes that end in /categorys/:category_id
// ----------------------------------------------------
router.route('/categorys/:category_id')

		// get the category with that id (accessed at GET http://localhost:8080/api/categorys/:category_id)
		.get(function(req, res) {
			Category.findById(req.params.category_id, function(err, category) {
						if (err)
								res.send(err);
						res.json(category);
				});
		})


		// update the category with this id (accessed at PUT http://localhost:8080/api/categorys/:category_id)
		.put(function(req, res) {

				// use our category model to find the category we want
				Category.findById(req.params.category_id, function(err, category) {

						if (err)
								res.send(err);

								category.name = req.body.name;  // update the categorys info

						// save the category
						category.save(function(err) {
								if (err)
										res.send(err);

								res.json({ message: 'Category updated!' });
						});

				});
		})


		// delete the category with this id (accessed at DELETE http://localhost:8080/api/categorys/:category_id)
		.delete(function(req, res) {
			Category.remove({
						_id: req.params.category_id
				}, function(err, category) {
						if (err)
								res.send(err);

						res.json({ message: 'Successfully deleted' });
				});
		});











// API Routes
router.route('/jobs')

	//******************************************************
	//GET ALL
	//get all jobs (accessed at GET http://localhost:8080/api/jobs)
	//******************************************************
	.get(function(req, res) {
		Jobs.find(function(err, jobs) {
			if (err)
				res.send(err);

			res.json(jobs);
		});
	})

			// create a job (accessed at POST http://localhost:8080/api/jobs)
			.post(function(req, res) {

					var job = new Jobs();      // create a new instance of the Job model
					job.id = req.body.id;  // set the jobs name (comes from the request)
					job.name = req.body.name;  // set the jobs name (comes from the request)
					job.requiredSkills = req.body.requiredSkills;  // set the jobs name (comes from the request)
					job.categories = req.body.categories;  // set the jobs name (comes from the request)
					job.createdDate = req.body.createdDate;  // set the jobs name (comes from the request)
					job.updated = req.body.updated;  // set the jobs name (comes from the request)

					// save the job and check for errors
					job.save(function(err) {
							if (err)
									res.send(err);

							res.json({ message: 'Job created!' });
					});

			});



			// on routes that end in /jobs/:job_id
// ----------------------------------------------------
router.route('/jobs/:job_id')

		// get the job with that id (accessed at GET http://localhost:8080/api/jobs/:job_id)
		.get(function(req, res) {
				Jobs.findById(req.params.job_id, function(err, job) {
						if (err)
								res.send(err);
						res.json(job);
				});
		})


		// update the job with this id (accessed at PUT http://localhost:8080/api/jobs/:job_id)
		.put(function(req, res) {

				// use our job model to find the job we want
				Jobs.findById(req.params.job_id, function(err, job) {

						if (err)
								res.send(err);

						job.name = req.body.name;  // update the jobs info

						// save the job
						job.save(function(err) {
								if (err)
										res.send(err);

								res.json({ message: 'Job updated!' });
						});

				});
		})


		// delete the job with this id (accessed at DELETE http://localhost:8080/api/jobs/:job_id)
		.delete(function(req, res) {
				Jobs.remove({
						_id: req.params.job_id
				}, function(err, job) {
						if (err)
								res.send(err);

						res.json({ message: 'Successfully deleted' });
				});
		});





// API Routes
router.route('/courses')

	//******************************************************
	//GET ALL
	//get all courses (accessed at GET http://localhost:8080/api/courses)
	//******************************************************
	.get(function(req, res) {
		Courses.find(function(err, courses) {
			if (err)
				res.send(err);

			res.json(courses);
		});
	})

			// create a course (accessed at POST http://localhost:8080/api/courses)
			.post(function(req, res) {

					var course = new Courses();      // create a new instance of the Course model
					course.name = req.body.name;  // set the courses name (comes from the request)
					course.number = req.body.number;  // set the courses name (comes from the request)
					course.credits = req.body.credits;  // set the courses name (comes from the request)
					course.lecture = req.body.lecture;  // set the courses name (comes from the request)
					course.lab = req.body.lab;  // set the courses name (comes from the request)
					course.catalog_offered = req.body.catalog_offered;  // set the courses name (comes from the request)
					course.past_offered = [];  // set the courses name (comes from the request)
					course.description = req.body.description;  // set the courses name (comes from the request)

					// save the course and check for errors
					course.save(function(err) {
							if (err)
									res.send(err);

							res.json({ message: 'Course created!' });
					});

			});



			// on routes that end in /courses/:course_id
// ----------------------------------------------------
router.route('/courses/:course_id')

		// get the course with that id (accessed at GET http://localhost:8080/api/courses/:course_id)
		.get(function(req, res) {
				Courses.findById(req.params.course_id, function(err, course) {
						if (err)
								res.send(err);
						res.json(course);
				});
		})


		// update the course with this id (accessed at PUT http://localhost:8080/api/courses/:course_id)
		.put(function(req, res) {

				// use our course model to find the course we want
				Courses.findById(req.params.course_id, function(err, course) {

						if (err)
								res.send(err);

						course.name = req.body.name;  // update the courses info

						// save the course
						course.save(function(err) {
								if (err)
										res.send(err);

								res.json({ message: 'Course updated!' });
						});

				});
		})


		// delete the course with this id (accessed at DELETE http://localhost:8080/api/courses/:course_id)
		.delete(function(req, res) {
				Courses.remove({
						_id: req.params.course_id
				}, function(err, course) {
						if (err)
								res.send(err);

						res.json({ message: 'Successfully deleted' });
				});
		});



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
