/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const totalRow = grid.length; // Corrected typo
    const totalCol = grid[0].length;
    const queue = [];
    let freshOranges = 0;
    let minutesElapsed = 0;

    // Initialize the queue with all the rotten oranges and count fresh oranges
    for (let eachRow = 0; eachRow < totalRow; eachRow++) {
        for (let eachCol = 0; eachCol < totalCol; eachCol++) {
            if (grid[eachRow][eachCol] === 2) {
                queue.push([eachRow, eachCol, 0]);
            } else if (grid[eachRow][eachCol] === 1) {
                freshOranges += 1;
            }
        }
    }

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (queue.length > 0) {
        const [currentRow, currentCol, currentTimeElapsed] = queue.shift();
        minutesElapsed = currentTimeElapsed;

        for (const [dr, dc] of directions) {
            const nr = currentRow + dr;
            const nc = currentCol + dc;

            if (nr >= 0 && nr < totalRow && nc >= 0 && nc < totalCol && grid[nr][nc] === 1) {
                freshOranges -= 1;
                grid[nr][nc] = 2;
                queue.push([nr, nc, currentTimeElapsed + 1]);
            }
        }
    }

    if (freshOranges > 0) {
        return -1;
    } else {
        return minutesElapsed;
    }
};

// Example usage
const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];
console.log(orangesRotting(grid));  // Output: 4

/*
While writing this code, I made typos in the length and spelling of variables. Additionally, there were errors in finding the length of the matrix rows and columns.
always consied n*m matrix where n!=m for clacultaing rows and colums for correct ans

Explanation:
Patterns and Mental Model
Graph Traversal:

The grid can be seen as a graph where each cell is a node and edges exist between adjacent nodes.
BFS is used to traverse this graph level by level.
Multi-source BFS:

The queue is initialized with multiple sources (initially rotten oranges).
This ensures the rot spreads simultaneously from all rotten oranges.
Layered Expansion:

Each layer of the BFS represents oranges that will rot at the same minute.
By processing layer by layer, we naturally track the minutes elapsed.
Edge Cases:

No fresh oranges initially (0): Return 0.
Fresh oranges isolated by empty cells: Return -1.

Time Complexity:
- The time complexity of this solution is O(m * n), where m is the number of rows and n is the number of columns in the grid.
- Each cell is processed at most once, and each edge (connection between adjacent cells) is also processed at most once.

Overall, this approach efficiently simulates the spread of rot in the grid using BFS.
*/

// Revise 
// See why to apply BFS 
// in queue variable why timeElapsed was passed
// why direction variable is made 
// how BFS suits here level wise
// corner cases 
// how to find length of matrix
// how to travese matrix
// length in js ( how to call this and why this is not called as function)
// time complexity
//when to use visited in BFS and why it was not used here 

