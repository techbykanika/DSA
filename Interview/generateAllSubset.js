var subsets = function(nums) {
    res=[[]]
    let x=nums.lenght-1
    const backTrack = function(tempList,i){
        if(i===nums.length){
            let copyOfTempList= [...tempList]
            res.push(copyOfTempList)
            return;
        }
        tempList.push(nums[i])
        backTrack(tempList,i+1)
        tempList.pop();
        backTrack(tempList,i+1)


    }
    backTrack([],0)
    return res
};
res=subsets([1,2,3])
console.log(res);