// app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
// Imports routes for the reports
const reports = require('./routes/reports.route');
const users = require('./routes/user.route');
const user =require('./models/users.model');
const config = require('./config/passport');
const passport = require('./config/passport');
// initialize our express app
const app = express();
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://simmybajaj:qwerty1234@ds119304.mlab.com:19304/reports';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
// for body parser
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// for public folder
app.use(express.static('public'));
//set view engine
app.set('view engine', 'ejs');
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
//setup url
app.use('/reports', reports);
app.use('/users', users);
// index page 
app.get('/report', function(req, res) {
    res.render('pages/index');
});
// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});
app.get('/login', function(req, res) {
    res.render('pages/login');
});
app.get('/filter', function(req, res) {
    res.render('pages/filter');
});
//port no to express to test server write node app.js in terminal
let port = 8086;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});