Promise.resolve(1).then(function resolve(){
    console.log("resoleved")
})

setTimeout(function timeout() {
    console.log('Timed out!');
  }, 0);
  