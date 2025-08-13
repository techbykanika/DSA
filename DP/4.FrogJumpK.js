class Solution {
    // Function to minimize the cost of reducing the heights.
    minimizeCost(k, arr) {
        
        let len=arr.length;
        let dp= new Array(len).fill(-1);
        // base case from recursssion here 
        dp[0]=0;
        for(let i=0;i<len;i++){
            
            let mmSteps=Number.MAX_SAFE_INTEGER;
            
            for(let j=1;j<=k;j++){
                if(i-j>=0){
                    const jump=dp[i-j]+Math.abs(arr[i]-arr[i-j]);
                     mmSteps= Math.min(mmSteps,jump)
                      dp[i]=mmSteps; 
                    
                }
              
                
            }
              
          
        }
        return dp[len-1];
        // your code here
    }
}
// how to put for loop codition 
// see why we assigned value of dp array insode the loop 
// wroite the recussion , memonizariona and dervice tabulation from memoization 
// Number.MAX_SAFE_INTEGER; see this sytac see fill sysntax and how to use map with this 
// solve previous quesion to it in all the ways
