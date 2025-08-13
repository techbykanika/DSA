//Find Minimum in Rotated Sorted Array

var findMin = function(nums) {
    var left=0;
    right=nums.length-1
    while(left<right){
        // here left <right condition is important because if left<=right then we will go in infinite loop
        // for example if array is [1,2] then left=0 and right=1
        var mid=Math.floor((left+right)/2)
        // we are moving right when the value of right pointer is less arr[mid] 
        if(nums[mid] > nums[right]) left=mid+1;
        else
        // we dont do right=mid-1 because we are not sure that mid-1 is minimum value
        right=mid;
    }
    // we find value in left pointer because we are moving right when value of right pointer is less than mid
    return nums[left]
    
};
//corner cases for this 
// if array is [1,2] then left=0 and right=1
// if array is [2,1] then left=0 and right=1
// if array is [3,1,2] then left=0 and right=2
// if array is [3,4,5,1,2] then left=0 and right=4

// How to solve this problem 
// 1. find mid
// 2. check if mid is greater than right then move right
// 3. else move left
// 4. return left
// Time Complexity: O(logn)
// Space Complexity: O(1)   // we are not using any extra space
// Leetcode: 153. Find Minimum in Rotated Sorted Array
//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
/* Thought Process:
    * As we have to find minimum we have to move left
    * But array is rotated so we right when mid value is greater than right value
    * for example if mid is 4 and right is 3 then we have to move right because lower value is on right side
    * and on left we have left sorted array and as mid value is greater than right and we have to move toright sorted arra
    * so once with help of mid we find that we are in left sorted array so we move right
    * we have to take care that when we move right we dont do mid-1 because we are not sure that mid-1 is minimum value
    * we dont put condition left<=right because if we put left<=right then we will go in infinite loop 
    * for example if array is [1,2] then left=0 and right=1
    * so we put left<right
    * we find ans in left because we are moving right when value of right pointer is less than mid
    */
   /* in any question where we have to find minimum or maximum value we have to move left or right
    if we have tofind maximum value then we move left when mid value is less than left value
    in this we will find ans in right pointer
    */




    // Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
// we have to find minimum element in the array
// Input: [3,4,5,1,2]
// Output: 1
// Input: [4,5,6,7,0,1,2]
// Output: 0
var findMin2 = function(nums) {
    var left=0;
    right=nums.length-1
    while(left<right){
        // why we did left<right because if we do left<=right then we will go in infinite loop
        // for example if array is [1,2] then left=0 and right=1
        var mid=Math.floor((left+right)/2)
        // we are moving right when the value of right pointer is less arr[mid] 
        if(nums[mid] > nums[right]) left=mid+1;
        else
        right=mid;
    }
    return nums[left]
    
};
//corner cases for this
// if array is [1,2] then left=0 and right=1
// if array is [2,1] then left=0 and right=1
// if array is [3,1,2] then left=0 and right=2
/*
 we know that we have to move left in order to find minimum value
 we will move right when mid value is greater than right value
    for example if mid is 4 and right is 3 then we have to move right because lower value is on right side
    Its like when we know we are at left sorted array then we move in right sorted array
 */
// Time Complexity: O(logn)
/*
Thought Process to crack this problem in interview:
    * As we have to find minimum we have to move left
    * But array is rotated so we right when mid value is greater than right value
 */
