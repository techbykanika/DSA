class Stack {

    constructor(){
        this.items = [];
    }


    push(value){

        this.items.push(value);
        return;
    }

    isEmpty(){
        return this.items.length === 0;
    }

    pop(){

        if(this.items.length == 0){
            throw new Error("no elements in the stack");
        }

        let value = this.items[this.items.length-1];
        this.items.pop();

        return value;

    }


    peek(){

        if(this.items.length == 0){
            throw new Error("no elements in the stack");
        }

        return this.items[this.items.length-1];
    }
}
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
class Node{
    constructor(value, nextAddress){
        this.value = value;
        this.next = nextAddress;
    }
}

class Stack {

    constructor(){
        this.top = null;
    }

    push(value){

        let stackNode = new Node(value, null);

        if(this.top==null){
            this.top = stackNode;
        } else {
            stackNode.next = this.top;
            this.top = stackNode;
        }

    }

    pop(){

        if(this.top == null){
            throw new Error("no elements in the stack");
        }
        let val = this.top.value;
        this.top = this.top.next;
        return val;
    }


    peek(){
        if(this.top == null){
            throw new Error("no elements in the stack");
        }

        let val = this.top.value;
        return val;
    }

}
// all the 