/*
 Maximum subarray size sum less than S
 In this problem we have to find the maximum subarray size whose sum is less than S
    For example
     a[]= {1,20,3,7} s=25 
    {1,20,3,7} s=25
    all subarray of size 1
    {1} sum = 1
    {20} sum = 20
    {3} sum = 3
    {7} sum = 7
    all subarray of size 2
    {1,20} sum = 21
    {20,3} sum = 23
    {3,7} sum = 10
    all subarray of size 3
    {1,20,3} sum = 24
    {20,3,7} sum = 30
    all subarray of size 4
    {1,20,3,7} sum = 31
    so maximum subarray size whose sum is less than S is 3
Output: 3
- Aggressive Cows
In this problem we have to find the maximum distance between two cows such that all cows are at least that much distance apart
    For example
        a[]= {1,2,4,8,9} c=3
        {1,2,4,8,9} c=3
        all subarray of size 1
        {1}
        {2}
        {4}
*/

function isValid(arr, k, target){


    let sum = 0;
    let i =0;
    // if k=3
    // we are adding first 3 elements of array
    // this will give us sum of first 3 elements and later we will remove first element and add 4th element
    // this is sliding window concept
    // if k i=3 
    // than arr[0]+arr[1]+arr[2]=sum
    // worst case complexity of below loop is O(n) - because we are iterating over array only once
    // worse case when k=n
    for(;i<k;i++){
        sum = sum + arr[i];
    }
    //after this loop i=4

    if(sum<target){
        return true;
    }
    // r=4
    // we adding one lement and removing one element
    let r = i;
    // left strating mai line no 14 it was zero
    // so we ha
    let l = 0;
    // in this we are sliding window we add one element from end and remove one element from start
    // complexity of below loop is O(n) - because we are iterating over array only once
    // in worst case r will be 1 and it will go till n so complexity is O(n)
    while(r<arr.length){
        // in first iteration i remove arr[0] and add arr[4]
        sum = sum + arr[r] - arr[l];
        if(sum<target){
            return true;
        }
        r++;
        l++;
    }

    return false;

}

function maxLenSubarray(arr, target) {

    /*

    lower bound and upper bound
    find mid and validate for mid using sliding window
    if mid satisfies search right else search left
    */

    let l = 0;
    let r = arr.length;
    let res = 0;

    while(l<=r){

        let mid = Math.floor((l+r)/2);
        // is mid is valid true than we increase the size of subarray
        // why we increase the size of subarray because we want to find the maximum size of subarray
        // complexity of isValid is O(n) - explained in line no 14
        if(isValid(arr, mid, target)){
            // search right
            res = mid;
            l = mid+1;
        } else {
            // search left
            r = mid-1;
        }
    }

}
/* complexity of above code is O(nlogn) - because we are iterating over array only once and we are applying binary search
 binary search complexity is O(logn)
 so total complexity is O(nlogn)
 space complexity is O(1) - because we are not using any extra space*/
//why we applied binary seach but array is not sorted
// we are not applying binary search on array we are applying binary search on range
// we are applying binary search on range of 1 to n where n is length of array
// we find mid of the range
//we find all the subarray of size mid and check if sum of any subarray is less than target
// if sum of any subarray is less than target than we search right
// else we search left
/*
  For example
    a[]= {1,20,3,7} s=25
    Iteration 1:
    l=0
    r=4
    mid = 2
    isValid(arr, mid, target) = isValid(arr, 2, 25)
       we create all subarray of size 2
            subarray 1 = {1,20} sum = 21
            this is less than target so we return true
    after returing true res = mid = 2
    l = mid+1 = 3
    while loop condition is true because l<=r is true l=3 and r=4
    Iteration 2:
    l=3
    r=4
    mid = 3
    isValid(arr, mid, target) = isValid(arr, 3, 25)
         we create all subarray of size 3
            subarray 1 = {1,20,3} sum = 24
            this is less than target so we return true
    after returing true res = mid = 3
    l = mid+1 = 4
    while loop condition is true because l<=r is true l=4 and r=4
    Iteration 3:
    l=4
    r=4
    mid = 4
    isValid(arr, mid, target) = isValid(arr, 4, 25)
            we create all subarray of size 4
            subarray 1 = {1,20,3,7} sum = 31
            this is greater than target so we return false
    after returing false res = mid = 3
    l = mid+1 = 4
    while loop condition is false because l<=r is false l=4 and r=4
    so we return res = 3
 */