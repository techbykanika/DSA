/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // create a adjancency list
    // we have prerequiste with the help of that we can do it 
    // how i will get to know how many vertices with help of num courses
    // why fill(0) how map woks , how new array works what is the intial state
    // Get comfortable with BFS ,DFS doing both of them with adjacency list and grapj
    // how to construct adjancney graph and how adjacney list 
    // how to deal with js map , array , matrix , array access imdices and looping of them
    //const adjList= new Array(numcourses).fill(0).map(()=>[])
    const adjList=new Array(numCourses);
    for(let i=0;i<numCourses;i++){
        adjList[i]=[];
    }
    const inDegree = new Array(numCourses).fill(0);
    /*fill the adjancency list to create the graph whihc has values in it 
      if prerequisuit is like [3,4] it means to compete 3 you should have done /
    4 it means edge is like 4------>3*/
    // see how to destrcuture and how cam i use foreach in Js instead of for of
    for (const [eachCourse,prereq] of prerequisites){
        adjList[prereq].push(eachCourse)
        inDegree[eachCourse]++


    }
    /*  prerequisites.forEach(([course, prereq]) => {
        adjList[prereq].push(course);
        inDegree[course]++;
     });*/
    /* as we are going to do this with topological sort using BFS khans algo 
    we will be using queue , in this we put only those elements whoes in degree is zero
    */
    // in const array we can remove and add element?? 
    // Initialize a queue with all nodes having zero in-degrees
    const queue=[];
    for(let i=0;i<numCourses;i++){
        if(inDegree[i]===0){
           queue.push(0);
        }
    }
    let processedNodes=0;
    while(queue.length>0){
        const node=queue.shift();
        processedNodes++;
        adjList[node].forEach(neighbor=>{
            inDegree[neighbor]--;
            if(inDegree[neighbor]===0){
                queue.push(neighbor);
            }
        })

    }
     return processedNodes===numCourses;



    
};


// Mental Model
// Graph Representation: Represent courses as nodes and prerequisites as directed edges between nodes.
// Cycle Detection: If there is a cycle in the graph, it means there's a circular dependency, and it's impossible to complete all courses. If there's no cycle, you can complete the courses.
// Topological Sort: If you can create a topological ordering of the courses, it means there's no cycle, and you can finish all the courses.