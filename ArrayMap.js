let arr = [2, 3, 5, 7]

arr.map(function(element, index){
    console.log(element);
    console.log(index);
    // console.log(array);
    return element;
}, 80);


const newArr = arr.map((element, index) => {
    // console.log(array);
    return element*2;
}, 80);

console.log(newArr);

const newArr2 = arr.map(element => element*2);

console.log(newArr2);
