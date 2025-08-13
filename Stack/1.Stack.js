// stack can be implemtn using array or linked list
// stack is LIFO
//operation on stack
//push
//pop
//peek
//isEmpty
//isFull

class Stack{
    constructor(){
        this.items = [];
        this.top = -1;
        const MAX = Infinity;
    }
    push(item){
        if(this.top == this.MAX){
            throw new Error("Stack is full");
        }
        this.top++;
        this.items[this.top] = item;
    }
    pop(){
        if(this.isEmpty()){
           throw new Error("Stack is empty");
        }
        return this.items[this.top--];
    }
    isEmpty(){
        if(this.top == -1){
            return true;
        }
    }
    peek(){
        if(this.isEmpty()){
            throw new Error("Stack is empty");
        }
        return this.items[this.top];
    }
}
let stack = new Stack();
stack.push(1);
console.log(stack.peek());
stack.push(2);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
