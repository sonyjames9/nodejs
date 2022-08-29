const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 1");
    resolve(1);
    // reject(new Error('Async operation 1 failed'));
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2");
    resolve(2);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 3");
    // resolve(2);
    reject(new Error("Async operation 3 failed"));
  }, 2000);
});

Promise.all([p1, p2, p3]) //return when all promises are completed
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
  .catch((err) => console.error(err.message));

// console.log("-------------------------");

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 1");
    resolve(1);
    // reject(new Error('Async operation 1 failed'));
  }, 2000);
});

const p5 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2");
    resolve(2);
  }, 2000);
});

const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 3");
    // resolve(2);
    reject(new Error("Async operation 3 failed"));
  }, 2000);
});

Promise.race([p4, p5, p6]) //return on the first promise when completed
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
  .catch((err) => console.error(err.message));
