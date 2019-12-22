/*
Question in GeeksForGeeks:
Pairwise swap elements of a given linked list by changing links
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
function pairwiseSwap(head){
    if(head===null||head.next===null)   return head;
    let previous=head;
    let current=head.next;
    head=head.next;
    while(current){
        let temp=current.next;
        current.next=previous;
        if(temp===null||temp.next===null){
            previous.next=temp;
            break;
        }
        previous.next=temp.next;
        previous=temp;
        current=previous.next;
    }
    return head;
}
let List=new LinkedList();
List.InsertEnd(1);
List.InsertEnd(2);
List.InsertEnd(3);
List.InsertEnd(4);
List.InsertEnd(5);
List.InsertEnd(6);
console.log(pairwiseSwap(List.head));
