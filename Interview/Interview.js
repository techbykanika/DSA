// Find next bigger number with same set of digits
// Given a number n, find the smallest number that has same set of digits as n and is greater than n. If n is the greatest possible number with its set of digits, then print “not possible”.
// Examples:
// For simplicity of implementation, we have considered input number as a string.
// Input:  n = "218765"
// Output: "251678" =
// Input:  n = "1234"
// Output: "1243"
// Input: n = "4321"
// Output: "Not Possible"
// Input: n = "534976"
// Output: "536479"

// brute force approach
// i place can bef == filled by n i have n choice and i next i have n-1 choice 
//51,6,5,7,8
//1234
//12
//534976
//534769


function Identify(numberString){

   for(let i=numberString.length;i>=0;i--){

    for(let j=i-1;j>=0;j--){
        if(numberString[i]>numberString[j])
        {
            let temp=numberString[i];
            numberString[i]=numberString[j];
            numberString[j]=temp;
        }
    }
   }

}
numberString=[1,2,3,4]
Identify(numberString);
console.log(numberString);
