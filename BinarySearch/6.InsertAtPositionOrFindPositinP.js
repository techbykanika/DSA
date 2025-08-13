// 6. Search Insert Position
// Easy
// We have to find the position where we can insert the target value in the array and if target value is already present in the array then we have to return the index of that target value existing in the array 
var searchInsert = function(nums, target) {
    let left=0;
    let right=nums.length-1
    let pos=nums.length
    // pos is the position where we can insert the target value in the array
    //pos = nums.length means we can insert the target value at the end of the array
    // pos = 0 means we can insert the target value at the beginning of the array
    // when we are inserting the value at the end of the array than we will always be going in else part
    // when we are inserting the value at the beginning of the array than we will always be going in if part
    // when we are inserting the value in the middle of the array than we will be going in both if and else part
    while(left<=right){
        let mid= Math.floor((left+right)/2);
        if(nums[mid]>=target){
            // we move left
            // dont store and move return left or right
            pos=mid
            right=mid-1
        }
        else {
 
            left=mid+1
        }
    }
    return pos;
};
// Here we use concept of lower bound
// Lower bound is the index such that all the elements to the left of that index are less than or equal to the target value
// and all the elements to the right of that index are greater than the target value
// For example: nums=[1,3,5,6] target=2
// lower bound is 1
//upper bound is 2
//upper bound is the index such that all the elements to the left of that index are less than the target value
// edge cases 
// 1. if target value is less than the first element of the array then we have to return 0
// 2. if target value is greater than the last element of the array then we have to return the length of the array
// For example: nums=[1,3,5,6] target=7


/*
TODO:
Review this problem
Revise the concept of lower bound and upper bound
Look for the edge cases 
See why did pos=nums.length
Look for time complexity and space complexity
*/

