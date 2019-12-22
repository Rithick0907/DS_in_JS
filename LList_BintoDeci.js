/*
Question in GeeksForGeeks:
Decimal Equivalent of Binary Linked List
Given a singly linked list of 0s and 1s find its decimal equivalent.
Decimal Value of an empty linked list is considered as 0.
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
            while(current.next!==null){
                current=current.next;
            }
            current.next=node;
        }
    }
}
function binTodeci(head){
    let current=head;
    let res=0;
    while(current){
    //we retrace the binary equivalent in decimal value
        res=(res<<1)+current.data;
        current=current.next;
    }
    return res;
}
let List=new LinkedList();
List.InsertEnd(0);
List.InsertEnd(0);
List.InsertEnd(0);
List.InsertEnd(1);
List.InsertEnd(1);
List.InsertEnd(0);
List.InsertEnd(0);
List.InsertEnd(1);
List.InsertEnd(0);
console.log(binTodeci(List.head));
