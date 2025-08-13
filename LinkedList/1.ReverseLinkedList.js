class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
// create a linked list
var head=new Node(1);
head.next=new Node(2);
head.next.next=new Node(3);
head.next.next.next=new Node(4);
// do it using for loop for array of given size
// do it using while loop for linked list
for(var curr=head;curr!=null;curr=curr.next){
    console.log(curr.value);
}