function rob(nums){
    let dp = new Array(nums.length).fill(-1);
    let dpTabulation = new Array(nums.length).fill(-1);
    // dp
    function rec(index){
        // base case 
        // top down approach so what to do when index is zero
        // if we have reached a state where index is zero it menas we didnt took the oen so we need to take this 
        if(index==0){
            return nums[index];
        }
        // when i am doing index-1 it means that it can reach to zero also so i have to prevent it 
        if(index<0) return 0;
        let pick = nums[index]+rec(index-2);
        let notPick = rec(index-1);
        return Math.max(pick,notPick);

    }
    // dp with memoization
    function dpMemoization(index){
        if(dp[index]!==-1) return dp[index];     
        if(index===0)return nums[index]
        if(index<0) return 0;
        let pick = nums[index]+dpMemoization(index-2);
        let notPick = dpMemoization(index-1);
        dp[index]= Math.max(pick,notPick);

    }
    function tabulation(){
        // its a bottom up approach 
        // we take the same dp array but the base in that 
        // but the for loop i to n
        dpTabulation[0]=nums[0];
        dpTabulation[1]=Math.max(nums[0],nums[1]);

        for(let index=2;index<nums.length;index++){
            pick = nums[index]+dpTabulation[index-2]
            notpick = dpTabulation[index-1]
            dpTabulation[index]=Math.max(pick,notpick)


        }
    }

    // at first here i kept the lenght to the nums.length but its a zero based index
    // let x=rec(nums.length-1);
    // console.log(x);
    dpMemoization(nums.length-1);
   // console.log(dp[nums.length-1])
    // console.log(dp);
    // tabulation();
    // console.log(dpTabulation);





}
rob([2,3,4,5]);
// how to write recurrence
// 1 . Express everything in terms of index
//  2. do all stuf with index
// 3 . count all ways or give min max