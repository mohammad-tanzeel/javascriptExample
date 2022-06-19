 function prom(complete){
  //let prom = new Promise(function(resolve, reject){
  return prom = new Promise(function(resolve, reject){
    if(complete){
      resolve("He is a success."); 
    //   alert("He is a success.");
     } 
      else{
        reject("Here is faliure.");
      }  
alert("Here is faliure.");
  });
}

console.log('hi1')
setTimeout(() => {
    prom(true).then(onfulfilment).catch(onRejection);
    
}, 1000);
let onfulfilment = (result) => {
      console.log(result);
      }
let onRejection = (error) => {
      console.log(result);
      }
      console.log('hi2')
      
//console.log(prom(true));
//prom(true).then(onfulfilment);
//prom(false).catch(onRejection);