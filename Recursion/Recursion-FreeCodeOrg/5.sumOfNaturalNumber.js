const sumOFNaturalNumber = function sumOFNaturalNumber(n){
    // what is the smallest value we have to pass
    if(n<=1){
        return 1
    }
    return n+sumOFNaturalNumber(n-1);
}
var sum = sumOFNaturalNumber(100);
console.log(sum);