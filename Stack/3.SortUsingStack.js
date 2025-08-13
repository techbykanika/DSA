function sortArray(arr){

    let mainStack = new Stack();
    let tempStack = new Stack();

    for(let i=0;i<arr.length;i++){

        // copying the eleemnts from main stack to temp stack
        while (mainStack.isEmpty()==false && (arr[i]>mainStack.peek())){
            let val = mainStack.pop();
            tempStack.push(val);
        }

        mainStack.push(arr[i]);

        // copying the elemetns from temp to main stack
        while(tempStack.isEmpty()==false){
            mainStack.push(tempStack.pop());
        }

    }
    let res = [];
    while(mainStack.isEmpty()==false){
        res.push(mainStack.pop());
    }
    return res;
}
//Time complexity: O(n^2)
// because to insert an element in sorted order
//Space complexity: O(n)