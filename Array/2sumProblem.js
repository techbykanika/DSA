var twoSum = function(nums, target) {

    let dict=new Map();
    for(let i=0;i<nums.length;i++){
        let required= target - nums[i]
        if(dict.has(required)){
           return [i,dict.get(required)];
        }
          dict.set(nums[i],i);
        
    }
    
        
    };

    //https://leetcode.com/problems/two-sum/