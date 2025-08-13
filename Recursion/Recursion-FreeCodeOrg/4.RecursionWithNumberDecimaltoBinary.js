"use strict"
function decimalToBinary(decimalNo){
    if(decimalNo==1){
        return 1
    }
     return (decimalToBinary(Math.floor(decimalNo/2))).toString()+(decimalNo%2).toString();

}
let binaryNumber=decimalToBinary(3);
console.log(binaryNumber);

// free code org 
function findBinary(decimal,result){
    if(decimal==0){
        return result
    }
    result= decimal%2+result
    return findBinary(decimal/2,result);
}