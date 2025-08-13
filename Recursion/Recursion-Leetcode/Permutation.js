var permute = function(nums) {
    let allPerm =[];
    let eachPerm=[];
    let visited= new Map()
    findEachPurmute(eachPerm,visited);
    return allPerm
    function findEachPurmute(eachPrem,visited){
        // base case : when eachPrem length is equal to nums length it means we have found one permutation
        if(eachPrem.length===nums.length){
            allPerm.push([...eachPrem])
            console.log(eachPrem);
            return
        }
        // to find each permutation we need to iterate through the nums array and check if the element is already visited or not
        // inside for loop we have recursive call to findEachPurmute function 
        for(let i=0;i<nums.length;i++){
            if(visited.has(i)==false){
                visited.set(i,nums[i]);
                eachPrem.push(nums[i]);
                findEachPurmute(eachPrem,visited)
                eachPrem.pop(nums[i]);
                visited.delete(i);
            }

   
        }

    }
    
};

// leetcode 46 Permutations 
// https://leetcode.com/problems/permutations/description/


// Thought Process to solve this problem:
// 1. We need to find all the permutations of the given array
// 2. We can use recursion to solve this problem
// Revision - see why loop is used in recursion
// see the base condition
// draw the recursion tree
// rember to pop the element from the eachPerm array and delete the element from the visited map
// we move to left first and then right