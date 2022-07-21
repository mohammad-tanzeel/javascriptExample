let arr = ['x','y','z','p', 'q'];
let arlen = arr.length;
// console.log(arlen);
let lastElement = arr[arlen-2];
// console.log(lastElement);
arr.forEach((item) => {
    // console.log(item)
})
// arr.forEach(element => console.log(element));
arr.forEach((item, index) => {
    console.log(index+" "+item)
})

arr1 = arr.map(eleme => eleme+'1');
console.log(arr1);

