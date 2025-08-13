class Graph {
    // to make 2d matrix we should know how many nodes r thr in graph
    constructor(numberNodes) {
        this.numberNodes = numberNodes;
        this.adjMatrix = [];
        for (let i = 0; i < this.numberNodes; i++) {
            this.adjMatrix[i] = new Array(this.numberNodes).fill(0);
        }
    }
    addEdge(node1, node2) {
        this.adjMatrix[node1][node2] = 1;
        this.adjMatrix[node2][node1] = 1;
    }
    getNeighbors(node) {
        return this.adjMatrix[node];
    }
    hasEdge(node1, node2) {
        if (node1 >= 0 && node1 < this.numberNodes && node2 >= 0 && node2 < this.numberNodes) {
            return this.adjMatrix[node1][node2] === 1 && this.adjMatrix[node2][node1] === 1;
        }
    }
    removeEdge(node1, node2) {
        if (node1 >= 0 && node1 < this.numberNodes && node2 >= 0 && node2 < this.numberNodes) {
            this.adjMatrix[node1][node2] = 0;
            this.adjMatrix[node2][node1] = 0;
        }
    }
    traverseBFS(startNode) {
        let queue = [start];
        let visited = {};
        const result = []
        visited[startNode] = true;
        while (queue, length) {
            currentNode = queue.shift();
            result.push(currentNode);
            allneighbor = this.adjMatrix[currentNode]
            for (i = 0; i < this.numberNodes; i++) {

                if (this.adjMatrix[currentNode][i] === 1 && visited[i] === false) {
                    visited[i] = true;
                    queue.push(i);


                }
            }

        }
        return result;

    }
    traverseDFS(){
    
    }
}