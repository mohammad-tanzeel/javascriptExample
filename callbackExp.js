function myCallback(sumVal){
    console.log("Hi sum value="+sumVal);
}


function myfun(a,b, callback){
   let sum = a+b;
    callback(sum);
}

myfun(1,2, myCallback) ;