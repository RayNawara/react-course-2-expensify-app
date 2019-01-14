const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolved data');
    // reject('Something went wrong');
  }, 2500);
  
});

promise.then((data) => {
  console.log(data);

  return 'some data';
})then((str) => {
  console.log('Does this run?', str);
}).catch ((error) => {
  console.log('error: ', error);
});

// promise.then((data) => {
//   console.log(data);
// }, (error) => {
//   console.log('error: ', error);
// });