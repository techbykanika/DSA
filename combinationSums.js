var combinationSum = function(candidates, target) {
    res=[]

    
    const backTrack = function(target,i,tempList){
        tempList.push(candidates[i])
        if(i==candidates.length-1 && target==0 ){
            res.push(...tempList)
        }
        if(i==candidates.length-1 && target!==0){
            return
        }
        backTrack(target-candidates[i],i+1,tempList)
        tempList.pop()
        backTrack(target,i+1,tempList)
    }
    backTrack(target,0,[]);
    return res
};

combinationSum([2,3,6,7],7)