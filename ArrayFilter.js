let arr = ['zakir', 'tanzeel', 'abc'];
const result = arr.filter(element => element=='abc');
console.log(result);
const result2 = arr.filter(element => element.length>=5);
console.log(result2);

const f1 = function(item){
    if(item.length>=5){
        return true;
    }
}
const result3 = arr.filter(f1);
console.log(result2);
