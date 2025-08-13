/*
Binary Search 
Given a sorted array of integers, find the index of a target value using a binary search algorithm.
A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half.
For example, let's find the index of 13 in array arr.
Start with these parameters:
arr: [1, 3, 16, 22, 31, 33, 34]
targetVal: 31
*/
function BinarySearch(arr,targetVal){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]===targetVal){
            return mid;
        }
        else if(arr[mid]<targetVal){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
    }
}
// complexity of above code is O(logn) - because we are iterating over array only once and we are applying binary search
// at each iteration we are reducing the size of array by half
// when length of array is 8 then we are reducing the size of array by half 3 times
// when length of array is 16 then we are reducing the size of array by half 4 times
    // if length =16
    // 16/2 = 8
    // 8/2 = 4
    // 4/2 = 2
    // 2/2 = 1
    // we see mathematically 16/2/2/2/2 = 1
    //so log16 = 4 base is 2

// space complexity is O(1) - because we are not using any extra space
