const startup_debugger = require('debug')('app:startup');
const db_debugger = require('debug')('app:db');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');
const home = require('./routes/home/home');
const courses = require('./routes/courses/courses');
const express = require('express');
const app = express();

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);
// process.env.NODE_ENV = 'development';


// Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Application Name: ' + config.get('mail.host'));
// console.log('Application Name: ' + config.get('mail.password'))
 
app.set('view engine', 'pug');
app.set('views', './views'); //default

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //key=value&key=value
app.use(express.static('public'));
app.use(helmet());


app.use('/', home); //endpoint ending with '/' with route to home.js
app.use('/api/courses', courses); //endpoint ending with '/api/courses' with route to courses.js. 

if (app.get("env") === 'development') {
  app.use(morgan("tiny"));
  console.log("Morgan is enabled")
  startup_debugger('Debug')
}

db_debugger('db debugger')
app.use(logger);


// app.get("/", (req, res) => {
//   res.send("Hello Ammu !");
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));  