// ou are given an array people where people[i] is the weight of the ith person,
// and an infinite number of boats where each boat can carry a maximum weight of limit. 
//Each boat carries at most two people at the same time, 
//provided the sum of the weight of those people is at most limit.
// Return the minimum number of boats to carry every given person
// Divide and Conquer
function numRescueBoats(people,limit){
    people.sort((a,b)=>a-b);
    let boatCount=0;
    let left=0;
    let right=limit.length-1;
    while(left<=right){
        if(people[left]+people[right]<=limit) left=left+1;
        right=right-1
        boatCount=boatCount+1
    }
    return boatCount;
}