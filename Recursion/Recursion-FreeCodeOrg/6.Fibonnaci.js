// fibonnaci sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// if n=8 then 21 is the output 0,1,1,2,3,5,8,13,21
// if n=9 then 34 is the output 0,1,1,2,3,5,8,13,21,34
// if n=10 then 55 is the output 0,1,1,2,3,5,8,13,21,34,55
//if n=5 then 3 is the output 0,1,1,2,3

function fibonnaci(n){
    if(n<=1)
    return n
    // fn = fn-1 + fn-2
    return fibonnaci(n-1)+fibonnaci(n-2);
    // this is tail recursion
    // if we do not use tail recursion then we will have to store the values in the stack
    //in tail recursion the values are stored by the compiler

}
console.log(fibonnaci(8))
// time complexity: O(2^n)
// because for every n we are calling the function twice
// TODO: Ask sir about the time complexity
