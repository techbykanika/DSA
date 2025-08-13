//String Reversal
// Input: the simple engineer
// Ouptut: reenigne elpmis eht
function stringReversal(str){
    // base case- when i cam no longer cintinue in my algo
    // empty string reversed is a e
    if(str.length==0){
        return str
    }
    // what is the smallest amount of work i can do in each iteration 
    //betwenn each invocation what is the samallest unit that i can modify or manipulaye to 
    // progress little bit further or closer to the goal 
    // WHAT IS THE smallest unit i can deal with string ?
    // single char 
    // execution takes place from right to left
    // at each call we are shrunking down the string 
    // we reach to the base case 
    return stringReversal(str.substring(1)) + str.charAt(0);
};
let reverseString=stringReversal("Kanika");
console.log(reverseString);