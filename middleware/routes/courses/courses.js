const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, name: "Course1" },
  { id: 2, name: "Course2" },
  { id: 3, name: "Course3" },
];

// Since in index.js the endoint '/api/courses' is already defined, we do not require to declare it here in each function.
router.get("/", (req, res) => {
  res.render("index", {
    title: "My express app",
    message: 'Hello Ammu 123!"});',
  });
});

router.get("/:id", (req, res) => {
  const course = courses.find((crse) => crse.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course of given id is not available");
  res.send(course);
});

router.post("/", (req, res) => {
  const { error } = validateCourse(req.body); //result.error
  if (error) return res.status(400).send(result.error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  const course = courses.find((crse) => crse.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course of given id is not available");

  const { error } = validateCourse(req.body); //result.error
  if (error) return res.status(400).send(result.error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const course = courses.find((crse) => crse.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course of given id is not available");

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

module.exports = router;