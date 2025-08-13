function node(value) {
    this.value = value;
    // one node is connected to another 26 nodes
    // THESE CHILDERES AR EOF TYPE NODE
    // 26 children for each letter of the alphabet
    this.children = new Array(26).fill(null);
    this.IsMovieCompleted=false;

    // this.children = new Array(26).fill(null);
    // this.next = null;
}
// create a tree 
// let root = new node('a');
// add a child to the root node
// i have string and i will add it to the tree
function addStringToTree(root, str) {
    let currentNode = root;
    for (let char of str) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        let childNode = new Node(char);
        currentNode.children[index]=childNode;
        currentNode=childNode
    }
    currentNode.IsMovieCompleted=true;
}
let startNode= node("start");
// this start node all children value will be from a to z
for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode('a'.charCodeAt(0) + i);
    startNode.children[i] = new node(char);
}
// travesal of tree it will come with a string
function MovieExist(root,str)
{
    // find the string in the tree if it is present or not
    let currentNode = root;
    for (let char of str) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if (currentNode.children[index] === null) {
            return false; // Character not found, string does not exist
        }
        currentNode = currentNode.children[index];
    }
    return currentNode;

    //from this current node i have to fins all the combination of the string will exist and is movie completed or no
}
let ans=[]
function FindMovie(currentNode, str) {
   // base case 
   function CheckLeafNode(currentNode){
      currentNode.children.forEach((element) => {
        if(element!=null)
        {
            return false
        }
        
      });
      return true;
   }

   let isNodeLeaf=CheckLeafNode(currentNode);
   if(isNodeLeaf) return ans
   for(let i=0;i<26;i++){
    if(currentNode.IsMovieCompleted==true){
        ans.push(prefix)

    }
    FindMovie(currentNode.children[i],str+CurrentNode.children[i].value)
   }
}

addStringToTree(startNode,"TareZamenPar");
let MovieEx=MovieExist(startNode,"Tare");
if(MovieExist!=false){
    FindMovie(MovieEx,"Tar");
}
console.log(ans);



