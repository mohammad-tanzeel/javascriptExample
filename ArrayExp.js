let arr = [1,2,4];
console.log(arr);

arr2 = arr.map((data) => data * 2 );
arr2.forEach(function(item, index){
    console.log(item);
});
  
person = {
    name:"zakir",
    dep:"Design",
    salary:"100000",
    getData: function(a){
        return a+3;
    },
    childObj:{
            chname:'z1',
            chschool:"Hamdar"

    }
}

console.log(person);

let getfn = person.getData('zakir');
console.log(getfn);