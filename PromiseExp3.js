let f1 = function (resolve, reject) {
    // reject('Promise resolve'); 
    setTimeout(resolve, 2000);
 }

let countValue = new Promise(f1)
.then(
    function(){
        console.log("Hi Zakir success");
    }
).catch(function(){
    console.log("Hi Zakir Error");
}
);
 
 // executes when promise is resolved successfully
//  countValue.then(
//      function successValue(result) {
//          console.log("Hi Zakir "+result);
//      },
//   )
 
//  // executes if there is an error
//  .catch(
//      function errorValue(result) {
//          console.log(result);
//      }
//  );
 