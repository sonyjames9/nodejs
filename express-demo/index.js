const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: 'Course1' },
  { id: 2, name: 'Course2' },
  { id: 3, name: 'Course3' }
];

app.get('/', (req, res) => {
  res.send('Hello Ammu !')
});

app.get('/api/courses', (req, res) => {
  res.send(courses)
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(crse => crse.id === parseInt(req.params.id))
   if (!course) return res.status(404).send('The course of given id is not available');
  res.send(course);
});

app.get('/api/posts/:year/:month/:day', (req, res) => {
  res.send(req.params)
});

app.post('/api/courses', (req, res) => {
  const { error } = validateCourse(req.body); //result.error
  if (error) return res.status(400).send(result.error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
  const course = courses.find((crse) => crse.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("The course of given id is not available");
  
  const { error } = validateCourse(req.body); //result.error
  if (error) return res.status(400).send(result.error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find((crse) => crse.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("The course of given id is not available");
  
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);

});


function validateCourse(course) {
  const schema = {
  name: Joi.string().min(3).required(),
  };

  return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000
app.listen(port,() => console.log(`Listening on port ${port}`))  