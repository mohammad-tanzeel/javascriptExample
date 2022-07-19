let str = "Tanzeel";
// convert String to Array
let strArray  = str.split("");
// Reverse Array
let reversArray = strArray.reverse();
// Convert Reverse Array to String
let reverseString = reversArray.join("");
console.log(reverseString);

let newReverseString = "";
console.log(str.length);
for(let i = str.length-1;i>=0;i--){
    newReverseString += str[i];
    // console.log(newReverseString+" "+str[i]);
}
console.log(newReverseString);

