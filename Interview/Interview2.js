
// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state of the board is determined by applying the above rules simultaneously to every cell in the current state of the m x n grid board. In this process, births and deaths occur simultaneously.

// Given the current state of the board, update the board to reflect its next state.


//Example
//[[0,1,0],
//[0,0,1],
//[1,1,1],
//[0,0,0]]
// ans
// [[0,0,0]
 // [1,0,1],
    // []] 
// i create a empty matrix of the size of the input
// i traveser the matrix and on each cell i apply these rules m*n



function main() {
    // var a = parseInt(readLine());
    // var b = parseInt(readLine());;

    // var res = addNumbers(a, b);
    // console.log("The sum is " + res);
    let arr =[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
    let ans=NextState(arr);
    console.log(ans)
    
    for(let i=0;i<ans.length;i++)
    {
        for(let j=0;j<ans.length;j++)
        {
            console.log(ans[i][j]);
        }
        
    }
    
    
    
}
function NextState(arr)
{
    let rows=arr.length;
    let col=arr[0].length;
    let nextStateMatrix= Array.from({length:rows},()=> new Array(col).fill(0));
    let direction =[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[-1,-1],[1,-1]]
    for(let i=0;i<rows;i++)
    {
        
        for(let j=0;j<col;j++)
        {
            if(arr[i][j]==0)
            {
                let totalOne=0;
                let totalZero=0;
                for ([dir1,dir2] of direction)
                {
                    if(dir1!=-1 && dir2!=-1 && dir1<rows && dir2<col)
                    {
                        if(arr[dir1]==1)
                        {
                            totalOne=totalOne+1;
                        }
                        
                    } 
                    
                }
                 if(totalOne==3)
                    {
                        nextStateMatrix[i][j]=1;
                        
                    }
                
            }
            else{
                let totalOne=0;
                let totalZero=0;
                
                for ([dir1,dir2] of direction)
                {
                    if(dir1!=-1 && dir2!=-1 && dir1<rows && dir2<col)
                    {
                         if(arr[dir1]==1)
                        {
                            totalOne=totalOne+1;
                        }
                        
                        
                    }
                    
                    
                }
                if(totalOne>=2 && totalOne<=3)
                {
                     nextStateMatrix[i][j]=1;
                    
                }
                
            }
            
        }
    }
    return nextStateMatrix;
    
}

main();
