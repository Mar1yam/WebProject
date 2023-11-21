var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;

/*
MVC --> Model View Controller 
model --> to connect our logic
view --> pages
controller --> the logic behind our routes
*/

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('partials/Home',{ title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('partials/About', { title: 'About Me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('partials/Project', { title: 'Projects' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('partials/Contact', { title: 'Contact Me' });
});