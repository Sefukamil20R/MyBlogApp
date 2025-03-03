const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT =  3000;
const blogRoutes = require('./routes/blogRoutes');
require('dotenv').config(); // Load environment variables

// express app
const app = express();
const dbURI = process.env.MONGO_URI; 
// connect to mongodb & listen for requests

mongoose.connect(dbURI)
.then
(
    result => app.listen(PORT)
    // after we connect to the database, we start listening for requests on port 3000 beacuse user might request stg from the database so it shuild have to connect first
)
.catch
(
    err => console.log(err)
    // if there is an error, we log it to the console
)
// register view engine and Express only looks for 'view engine' we cannot use other string like template engine it has to be view engine 
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// custome middleware to store requested url to be accessible via the view
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
  });
 
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });
  
  // blog routes
  app.use('/blogs', blogRoutes);
  
  // 404 page
  app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });