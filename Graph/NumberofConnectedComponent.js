class Graph {
    // remeber how to create class and constructor syntax
    // V is the no of nodes in the graph => no of vertivces in the graph
    constructor(V){
        this.v=V;
        this.adj = new Array(this.v).fill(0).map(()=>[]);

    }
    // addig edegs in the graph 
    addEdge(u,w){
        this.adj[u].push(w);
        this.adj[w].push(u);


    }
    numberOfConnectedComponent(){
        // remember how to do this 
        let visited = new Array(this.v).fill(false);
        let count =0;
        // we have various diconnected component so we run the loop so that we can count all the disconnted components
        // if therir is only one componet than below for loop will work just one time 
        // if there are 2 disconneced component than beow for loop will work 2 times 
        for(let i=0;i<this.v;i++){
            if(visited[i]==false){
                this.DFSUtil(i,visited);
                count=count+1;
            }
        }
        return count;

    }
    DFSUtil(node,visited){
        visited[node]=true;
        // for a 'node' we to all other possibe connected 'node'
        // remmenber how for each works
        this.adj[node].forEach(element =>{
            if(visited[element]==false){
                this.DFSUtil(element,visited);
            }
        })
    }
}
let g = new Graph(6);
g.addEdge(1, 0)
g.addEdge(2, 3)
console.log(g.numberOfConnectedComponent());
















// class Graph {
//     constructor(V){
//         this.v=V;
//         this.adj= new Array(this.v).fill(0).map(()=>[]);
//     }

//     NumberOfConnectedComponents(){
//         let visited = new Array(this.v).fill(false);
//         let count =0;
//         for(let i=0;i<this.v;i++){
//             if(visited[i]==false){
//                 this.DFSUtil(i,visited);
//                 count= count+1;
//             }
//         }
//         return count;
//     }
//     DFSUtil(v,visited){
//         visited[v]=true;
//         this.adj[v].forEach(element => {
//             if(visited[element]==false){
//                 this.DFSUtil(element,visited);
//             }
            
//         });

//     }
//     addEdge(v,w){
//         this.adj[v].push(w);
//         this.adj[w].push(v);
//     }
// }
// let g= new Graph(5);
// g.addEdge(1, 0)
// g.addEdge(2, 3)
// // g.addEdge(3, 4)
// console.log(g.NumberOfConnectedComponents());