/*
Question in GeeksForGeeks:
Segregate even and odd nodes in a Linked List
Given a Linked List of integers, write a function to modify the linked list such that all even numbers
appear before all the odd numbers in the modified linked list. Also, keep the order of even and odd numbers same.
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
function evenOdd(head){
    let current=head;
    let previous=null;
    let oddList=new LinkedList();
    while(current){
        if(current.data%2!==0&&previous===null){
            oddList.InsertEnd(current.data);
            current=current.next;
            head=current;
        }
        else if(current.data%2!==0&&previous!==null){
            oddList.InsertEnd(current.data);
            previous.next=previous.next.next;
            current=current.next;
        }
        else{
            previous=current;
            current=current.next;
        }
    }
    current=head;
    while(current.next){
        current=current.next;
    }
    current.next=oddList.head;
    return head;
}
let List=new LinkedList();
List.InsertEnd(1);
List.InsertEnd(7);
List.InsertEnd(2);
List.InsertEnd(3);
List.InsertEnd(4);
List.InsertEnd(5);
console.log(evenOdd(List.head));
}
