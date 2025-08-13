/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numsSet= new Set();
    let longest=1;
    for(i=0;i<nums.length;i++){
         numsSet.add(nums[i])
    }
    for(let i of numsSet.values()){
        if(numsSet.has(i-1)){
            continue
        }
        else{
            let count=0;
            let x=i;
            while(numsSet.has(x)){
                x=x+1
                count=count+1
            }
              longest=Math.max(longest,count)
        }
      


    }
    return longest
    
};
// Time complexity for this is O(n) because we iteration over set only twice 
// How twice - first time we are iteration of all the elemnet of the set 
// if we have found the element i where i-1 
// then we are not iterating over that element

// 2 approcah 
// 1. sort the array
// 2. find the longest subarray
// 3. return the length of longest subarray
