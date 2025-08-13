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
    //  prerequisites.forEach(([course, prereq]) => {
    //     adjList[prereq].push(course);
    //     inDegree[course]++;
    // });
    // as we are g


    
};