const arr = [5,0,0,3,4,6,0,0];
const arr1 = [];
const arr2 = [];
arr.forEach(function(data){
    if(data!='0'){
        // console.log(data);
        arr1.push(data);
    }
    else {
        arr2.push(data);
    }

});

const arr3 = [...arr1, ...arr2];
console.log(arr3);

for(let i=0;i<5;i++){
    setTimeout(() => {
        console.log(i)
    })
    }
    