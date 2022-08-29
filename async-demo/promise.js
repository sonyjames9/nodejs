const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  reject(new Error('message'));
  }, 2000)

});

p
  .then(result => console.log('Result : ', result))   // To get the result
  .catch(err => console.log('Error : ', err.message)) // To get the error message, if in case the promise fails
  ;

const p2 = Promise.resolve({ id: 2 });
p2.then((result) => console.log("Result : ", result));

const p3 = Promise.reject(new Error("Error for rejection"));
p3.catch((err) => console.log("Error : ", err.message));

const p4 = Promise.reject(new Error("Error for rejection"));
p4.catch((err) => console.log("Error : ", err));