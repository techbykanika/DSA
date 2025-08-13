/*A heap is a complete binary tree, meaning all levels are fully filled, except possibly the last one, 
which is filled from left to right.*/

/*
In a Min-Heap, each parent node has a smaller value than its children.
The smallest value is always at the top (root) of the heap.
*/ 
class MinHeap{
    constructor(){
        this.heap=[];
    }
//     Index 0 has children at index 1 and index 2.
// Index 1 has children at index 3 and index 4.
// Index 2 has children at index 5 and index 6.
// Index i has children at index 2*i + 1 (left) and index 2*i + 2 (right)
//The parent of an element at index i can be found at Math.floor((i - 1) / 2).


    getParentIndex(index){
        return Math.floor((index-1)/2);
    }
    getLeftChildIndex(index){
        return 2*index+1;
    }
    getRightChildIndex(index){
        return 2*index+2;
    }
    // insert elemet in the heap
   /* To insert a new element in a heap, it is added at the end of the array (which keeps the binary tree complete).
    After inserting, we perform heapify by moving the element upwards to maintain the heap property.
    this is AKA bubble up*/
   insert(element){
    this.heap.push(element);
    this.heapifyUp();
   }
   heapifyUp(){
    let index=this.heap.length-1;

    while(index>0 && this.heap[index]<this.heap[this.getParentIndex(index)]){
        let parentIndex=this.getParentIndex(index)
        this.swap(index,parentIndex);
        index= parentIndex
    }
   }
   swap(index1,index2){
    let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
   }
   extractMin(){
    if(this.heap.length===0){
        return null
    };
    if(this.heap.length===1){
        return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0]=this.heap.pop();
    this.heapifyDown(0);
    return min;
   }
   heapifyDown(index){
    let smallest=index;//// Start by assuming the smallest value is at the current index.
    const left= this.getLeftChildIndex(index);// Get the index of the left child.
    const right=this.getRightChildIndex(index);// Get the index of the right child.
    // Check if the left child exists (i.e., it's within the bounds of the heap)
    // and if the value of the left child is smaller than the value at the current smallest index.
    if(left<this.heap.length && this.heap[left]<this.heap[smallest])
    {
      smallest=left;
    }
    // Check if the right child exists (i.e., it's within the bounds of the heap)
    // and if the value of the right child is smaller than the value at the current smallest index.
    if(right<this.heap.length && this.heap[right]<this.heap[smallest])
        {
          smallest=right;
        }
        // If 'smallest' is no longer the original index, it means one of the children
    // had a smaller value. So, we need to swap the current index with the smallest child.
    if(smallest!==index){
        this.swap(index,smallest);
        this.heapifyDown(smallest);
    }
   }
}

    

const heap= new MinHeap();
console.log("Inserting element into the heap");
heap.insert(10);
console.log("Heap after insertions: ", heap.heap);
heap.insert(20);
console.log("Heap after insertions: ", heap.heap);
heap.insert(5);
console.log("Heap after insertions: ", heap.heap);
heap.insert(15);
console.log("Heap after insertions: ", heap.heap);
heap.insert(30);
console.log("Heap after insertions: ", heap.heap);
heap.insert(2);
// Display the heap after insertions
console.log("Heap after insertions: ", heap.heap); // Should maintain the Min-Heap property

// Test extracting the minimum element
console.log("Extracting the minimum element: ", heap.extractMin()); // Should return 2
console.log("Heap after extracting min: ", heap.heap);

console.log("Extracting the minimum element: ", heap.extractMin()); // Should return 5
console.log("Heap after extracting min: ", heap.heap);

console.log("Extracting the minimum element: ", heap.extractMin()); // Should return 10
console.log("Heap after extracting min: ", heap.heap);

console.log("Extracting the minimum element: ", heap.extractMin()); // Should return 15
console.log("Heap after extracting min: ", heap.heap);

console.log("Extracting the minimum element: ", heap.extractMin()); // Should return 20
console.log("Heap after extracting min: ", heap.heap);

console.log("Extracting the minimum element: ", heap.extractMin()); // Should return 30
console.log("Heap after extracting min: ", heap.heap);

// Try extracting from an empty heap
console.log("Extracting from an empty heap: ", heap.extractMin()); // Should return null