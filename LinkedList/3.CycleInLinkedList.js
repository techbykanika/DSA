// detect the cycle in linked list
var hasCycle = function(head) {
    slow=head;
    fast=head;
    while(fast  && fast.next){

        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast)
        return true
        
    }
    return false
};
// fast pointer moves 2 steps at a time
// if linked has no cycle fast pointer will reach null
// if we check wether linked has cycle or not with slow pointer than fast=fast.next.next will give error
// slow and slow.pointer will work only for the cases where linked list has cycle otherwise it will give error
// TODO clearify above point from imran sir