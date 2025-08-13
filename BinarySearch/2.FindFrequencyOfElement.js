// Find Frequeuncy of the elememnt in the array
/*
I approach 
Use a Map to store the frequency of each element
II approach using binary search
Find the first occurence of the element
Find the last occurence of the element
return last-first+1
*/ 

function findFirstOcurrence(arr,target,left,right){
    let ans=0
    while(left <=right){
        let mid = Math.floor((left+right)/2);
        if(mid==0 && arr[mid]==target){
            return mid;
        }
        if(arr[mid]==target && arr[mid-1]<target)
        {
            return mid;
        }
        if(arr[mid]<target){
            //move right
            left=mid+1;
        }
        else {
            //move left
            right=mid-1;
        }
        // below code does not handle the case when target is not present in the array
        // in order to handle that case we need to add one more condition
        // if(target>arr[mid]){
        //     // move right
        //     left=mid+1

        // }
        // else if( target<arr[mid] || target==arr[mid]){
        //     ans=mid
        //     right=mid-1
        // }

    }
    return -1;

}
function findLastOcurrence(arr,target,left,right){
    let ans=0;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]==target && mid==arr.length-1){
            return mid;
        }
        if(arr[mid]==target && arr[mid]<arr[mid+1]){
            return mid;
        }

        if(arr[mid]<=target){
            //move right
            left=mid+1;
        }
        else{
            //move left
            right=mid-1;
        }
    }
    return -1;
 
    
}
function findFrequencyOfElement(arr,elememnt)
{
    let left=0;
    let right=arr.length-1;
    let leftOcurrence = findFirstOcurrence(arr,elememnt,left,right)
    let rightOcurrence = findLastOcurrence(arr,elememnt,left,right)
    return leftOcurrence - rightOcurrence+1

}
console.log(findFrequencyOfElement([2,2],2));

// mjhe testcases pass karvana ke liye conditin debugkrkake dkhni pdi
// TODO: find the corner cases and debug the solution
// Leet code man dal rkha hai - find the first and last occurence of the element in return poistion of tem
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// TODO:revise
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/discuss/14707/9-11-lines-O(log-n)
