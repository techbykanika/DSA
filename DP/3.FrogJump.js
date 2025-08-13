//  time limit exceded in this because no memoization is used
class Solution {
    //Function to find the minimum energy required.
    minimumEnergy(height, n)
    {
        let dp = new Array(n).fill(-1);
        function minEnergy(i){
            if(i==0){
                return 0;
            }
            if(dp[i]!=-1)
                return dp[i]
            let right=Number.MAX_SAFE_INTEGER 
             let left = minEnergy(i-1)+Math.abs(height[i]-height[i-1]);
            if(i>1)
            {
                // one step
           
            //two step
             right = minEnergy(i-2)+Math.abs(height[i]-height[i-2]);
                
            }
            dp[i]=Math.min(left,right)
            return Math.min(left,right)
           
            
        }
        return minEnergy(n-1);
        //your code here
    }
}
