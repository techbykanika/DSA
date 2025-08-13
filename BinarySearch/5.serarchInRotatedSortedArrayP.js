/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left=0;
    let right=nums.length-1
    let mid
    while(left<=right){
        mid= Math.floor((left+right)/2);
        if(target==nums[mid])
        return mid
        //if we are in left sorted array
        // if i did like this nums[mid]>=nums[left] it will not work for [3,1] target=1
        // always check for the edge cases 
        // edge cases in binary search question will be array of size 1 or 2
        if (nums[mid]>=nums[left]  ){
            // we will move towards right of the array when target is greater than mid or target is less than left 
            // if target is less than left it means left+1 or left+2 se b chota he hoga tou left side mai nahi mileage 
            // array rotated hai right side move karo
            if(target > nums[mid] || target < nums[left]){
                left=mid+1

            }
            else {
                right=mid-1
            }
           
        }
        // if nums[mid] <= nums[right] we are in right portion
        else {
            // we will move towards left side when target is less than nums[mid]
            //target is greater than nums[right]
            if(target<nums[mid] || target>nums[right]){
                right=mid-1

            }
            else{
                left=mid+1
            }
           
        }

    }
    return -1
    
}
/*
time complexity: O(logn)
space complexity: O(1)
things to remember:
1. always check for the edge cases - array of size 1 or 2
Approcah to solve this question:
Think in direction of binary search
Think once we have found mid in what all conditions we will move towards left and right
Think what all conditions we will check in if else
Think what all conditions we will check in while loop
Think for how much time loop will run see this by looking at edge cases
Think what will be the return value 
*/
// Leetcode: 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/