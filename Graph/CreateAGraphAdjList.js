class UnweightUndirectedGraph{
    constructor(vertices){
        this.vertices=vertices;
        this.AdjList=new Map();

    }
    addVertex(node){
        this.AdjList.set(node,new Set());
    }
    addEdge(node1,node2){
      this.AdjList.get(node1).add(node2);  
      this.AdjList.get(node2).add(node1);  
    }
    getNeighboors(node){
        return this.AdjList.get(node);
    }
    hadEdge(node1,node2){
        return this.AdjList.get(node1).has(node2)

    }
    traverseDFS(){
        

    }
    traverseBFS(start){
        const queue=[start];
        const result=[];
        const visited={};
        visited[start]=true;
        while(queue.length){
            currentNode=queue.shift();
            result.push(currentNode);
            this.adjList.get(currentNode);

        }
        
    }
}
let g= new UnweightUndirectedGraph()
for(i=0;i<=5;i++){
    g.addVertex(i);
}
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(0,3);
g.addEdge(2,4);
g.addEdge(4,5);
g.addEdge(2,5);
console.log(g);


// class UnweightDirectedGarph{
//     //adjList;
//     constructor(){
//         this.adjList= new Map();
//     }
//     addNode(node){
//         this.adjList.set(node,newMap());
//     }
//     addEdge(node1,node2,weight){
//         this.adjList.get(node1).set(node2,weight);
//         this.adjList.get(node2).set(node1,weight);
//     }
//     hasEdge(node1,node2){
//         return this.adjList.get(node1).has(node2);
//     }
//     traverseDFS(){

//     }
//     traverseBFS(){

//     }
// }

