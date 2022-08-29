const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB : ", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  library: [String],
  tags: [String],
  price: Number,
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);
// const Course2 = mongoose.model("Course2", courseSchema);
async function createCourse() {
  const course = new Course(
    {
      name: "NodeJS",
      author: "Sony James",
      library: ["pune", "delhi"],
      tags: ["node", "backend"],
      price: 100,
      isPublished: true,
    },
    {
      name: "DS",
      author: "Sony James",
      library: ["pune", "delhi"],
      tags: ["java", "backend"],
      price: 150,
      isPublished: true,
    }
  );

  const result = await course.update();
  console.log(result);
  // const course2 = new Course2();
  // const result2 = await course2.update();
  // console.log(result2);
}

async function getCourses() {
  const pageNo = 2;
  const pageSize = 10;
  // api/courses?pageNumber=2&pageSize=10

  // eq equal
  // ne not equal
  // gt greater than
  // gte greater than equal
  // lt less than
  // lte less than equal
  // in
  // nin not in

  // Logical operators
  // or
  // and

  const courses = await Course
    // .find({ price: { $gt: 70 } }).limit(10);
    // .find({ author: "Sony" })
    // .or([{author: "Sony"},{isPublished: true}])
    // .and([{ author: "Sony", isPublished: true }])

    // .find({ author: /^Son/i }) //starts with Son and case insensitive
    .find({ author: /.*Son.*/i }) //has string Son and case insensitive
    // .find({ author: /Jam$/i }) //ends with Jam
    .skip((pageNo - 1)*pageSize) //Implement Pagination 
    // .limit(10)
    .limit(pageSize)
    .sort({ name: 1 }) //ascending order
    // // .sort({name: 1, tags : 1});
    .count();
  console.log(courses);
}

getCourses();
