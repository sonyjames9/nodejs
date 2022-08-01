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