//arranging coins
// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.
// Given n, find the total number of full staircase rows that can be formed.
//approach 1
// we can use brute force approach
// we can create all the staircase and check if it is possible to create that staircase
// if it is possible to create that staircase than we return that staircase
// else we return the previous staircase
// we can create all the staircase using for loop
// for(let i=1;i<=n;i++){
//     // create staircase of size i
//     // check if it is possible to create that staircase
//     // if it is possible to create that staircase than we return that staircase
//     // else we return the previous staircase
// }

// we can use binary search approach
var arrangeCoins = function(n) {
    let l=0;
    let r=n;
    while(l<=r){
        mid=Math.floor((l+r)/2);
        coinUsed=(mid)*(mid+1)/2;
        if(coinUsed<n){
            l=mid+1;
        }
        else{
            r=mid-1;
        }

    }
  
    return r
    
};
// at one mid value coin used will be less than n and at next mid value coin used will be greater than n
//so at this point l will be greater than r
// so we return r
// why we return r
// because r is the last value of mid where coin used is less than n
// TODO ask imran mene dry run kr ke sikh liya but soch ni pari hu kya hora hai 

// somehwere in some iteration i will move towards right because my coin used is less than n
// just after that at next mid value coin used will be greater than n
//so at this point i will again move towards left
// so at this point l will be greater than r
// so we return r
//for example n=100


// TODO 
//Ask imran sir about the thought process of this question
//WHY WE ARE returning r