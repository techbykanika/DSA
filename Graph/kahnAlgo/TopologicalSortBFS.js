class Solution {
    //Function to return list containing vertices in Topological order.
    topoSort(V, adj) {
        // code here
        let inDegree = new Array(V).fill(0);
        let queue = [];
        let topoSort = [];
        // creta a indegrre with help if adj
        for (let i = 0; i < V; i++) {
            for (const eachEdge of adj[i]) {
                inDegree[i] = inDegree[i] + 1;
            }
        }
        for (let i = 0; i < V; i++) {
            if (inDegree[i] == 0) {
                queue.push(i);
            }
        }
        while (queue.length > 0) {
            let current = q.shift();
            topoSort.push(current)
            for (const neighbor of adj[current]) {
                inDegree[neighbor] = inDegree[neighbor] - 1;
                if (inDegree[neighbor] == 0) {
                    queue.push(neighbor)
                }
            }


        }


        // while loop till quue is empty

    }
}