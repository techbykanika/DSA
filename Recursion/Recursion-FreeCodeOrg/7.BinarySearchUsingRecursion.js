function binarySearch(arr,left,right,target){
    if(left>right){
        return -1;
    }
    let mid =Math.floor((left+right)/2);
    if(left>right){
        return -1;}
    if(arr[mid]==target)
    return arr[mid];
    if(target>arr[mid]){
        return binarySearch(arr,mid+1,right,target);
    }
    
    else{
        // if i do not return the value here then it will return undefined
        return binarySearch(arr,left,mid-1,target);
    }
       
}
var x;
let y;
binarySearch([1,2,7,17,19,23,45,67,89,100],0,9,67);
// run this program at debug mode and see how mid is undefined and x is
// space complexity: O(logn) - because at worst case we will have logn calls in the stack
// time complexity: O(logn) - because at worst case we will have logn calls in the stack
// time complexity for n elemnts how many times the code will run
