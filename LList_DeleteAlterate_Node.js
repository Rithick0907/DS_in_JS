/*
Question in GeeksforGeeks:
Given a Singly Linked List, starting from the second node delete all alternate nodes of it.
For example, if the given linked list is 1->2->3->4->5 then your function should convert it to
1->3->5 and if the given linked list is 1->2->3->4 then convert it to 1->3 
*/
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
    }
    InsertEnd(data){
        let node=new Node(data);
        if(this.head===null){
            this.head=node;
        }
        else{
            let current=this.head;
            while(current.next!==null)
            {
                current=current.next;
            }
            current.next=node;
        }
    }
}
//Function To Delete Alternate Node
function alternateDelete(head){
    let current=head;
    while(current&&current.next){
        let temp=current.next.next;
        current.next=current.next.next;
        current=temp;
    }
    return head;
}

let LList=new LinkedList();
LList.InsertEnd(1);
LList.InsertEnd(2);
LList.InsertEnd(3);
LList.InsertEnd(4);
LList.InsertEnd(5);
LList.InsertEnd(6);
LList.InsertEnd(7);
console.log(alternateDelete(LList.head));
