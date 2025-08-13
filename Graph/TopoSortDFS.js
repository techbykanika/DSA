class Solution {
    //Function to return list containing vertices in Topological order.
    // how for of and for each works 
    // how arrow function works and how to use this and how not to use this ,
    //spleing of variables and 
    topoSort(V, adj) {
        // code here
        let visited = new Array(V).fill(0);
        let stack = [];
        const helperDFS = (i) => {

            visited[i] = 1;
            for (const eachChild of adj[i]) {
                if (visited[eachChild] == 0) {
                    // visited[i]=1; why this is not required because i am not going level wise
                    /*wring recusrsive call it did it was casing infinte loop
                    alwasy thi nk if mac=x call stack error is coming wether loop is base condition of 
                    recursion is met or not
                    helperDFS(i);*/
                    helperDFS(eachChild);


                }

            }
           stack.push(i);


        };
        // Traverse all vertices. If a vertex hasn't been visited, start a DFS from it.
        // there can be more than one vertices where icming is zero , so these are vertices whihc need to completed first and than rest of thr task can be performed
        for (let i = 0; i < V; i++) {
            if (visited[i] == 0) {
                // why 
                helperDFS(i);

            }
        }
        const topoOrder = [];
        // Pop all vertices from the stack to get them in topological order
        // why we are doing this how are elemetts stacked in this
        while (stack.length > 0) {
            topoOrder.push(stack.pop());

        }
        return topoOrder;



    }
}
// why we are are