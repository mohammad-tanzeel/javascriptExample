const anotherPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is the eventual value the promise will return');
    }, 3000);
  });
  
  // CONTINUATION
  anotherPromise
  .then(value => { console.log(value) }) 
  

//   const myPromise = new Promise((resolve, reject) => {
 new Promise((resolve, reject) => {
    let a = false;
    console.log(a);
    setTimeout(() => {
        if(a){
            return resolve('a is found');
        } else {
            return reject('a not found');
        }
        // return (a)? resolve('a is found!'): reject('sorry, no a');
    })
  })
  .then(value => console.log(value))
  .catch(err => console.log("error found = "+err));


//   myPromise
//   .then(value => console.log(value))
//   .catch(err => console.log("error found = "+err));
