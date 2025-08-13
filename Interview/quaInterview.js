// intervals = {[1,4], [3, 9], [10,12],[2,5]} => [1,9][10,12]
 //1,4,5,9,10,12
// 1,4 3,9
// [1]
// 1,4 4,9
// 1=4
//4=>1
//{[1,4], [5, 9], [10,12],[4,5]}=> 
// 1 4 5 9 10 12
//1----2---4-----5-------9--10--------12
// 1,4,3,9,10,12,2,5

//
//1,2,4,5,3,9,10,12
//i1,i2,i1,i4,i2,i2,i3,i3
// [1,4] [3,9] [10,1]


//{[1,4],[2,5], [3, 9], [10,12],}
function MergeInterval(matrix){

    // cosdering its sorted one
     let check= matrix[0];
     let ans=[];

    for(let i=1;i<matrix.length;i++){
       
        // 5>3
        //1,9
        console.log(...check)
        console.log(matrix[i][1])
        if( check[1]>matrix[i][0] || check[1]<){
        
            check=[check[0],matrix[i][1]]
           
            

        }
        else{
            ans.push(check);
            check=matrix[i];
        }
       
        
    }
    ans.push(check)
    return ans;

}
//[[1,4],[2,3], [3, 9], [10,12]]
let ans=MergeInterval([[1,4],[2,5], [3, 9], [10,12]])
console.log(...ans);


// i have to crete a promise in js 
let promise = new Promise((resolve, reject) => {
    let success = true; // Simulate success or failure
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
}