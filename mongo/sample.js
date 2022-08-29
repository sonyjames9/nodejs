const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB : ", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);
async function createCourse() {
  const course = new Course({
    name: "NodeJS",
    author: "Sony",
    tags: ["node", "backend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  // const courses = await Course.find();
  const courses = await Course
    .find({ author: "Sony", isPublished: true })
    .limit(10)
    .sort({name:1}) //ascending order
    // .sort({name:-1}) //descending order
    .select({name:1, tags:1})
   
    ;
  console.log(courses);
}

getCourses();
