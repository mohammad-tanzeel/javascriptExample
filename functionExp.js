function testFn(x,y,z,z1){
    if(x==2){
        return x+y+z+z1;
    } else {
        return y+z+z1;
    }

}

let funresult = testFn(3,3,4,5);
console.log(funresult);