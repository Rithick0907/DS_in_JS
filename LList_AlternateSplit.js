/*
Question in GeeksForGeeks:
Write a function AlternatingSplit() that takes one list and divides up its nodes to make two smaller lists ‘a’ and ‘b’. 
The sublists should be made from alternating elements in the original list. 
So if the original list is 0->1->0->1->0->1 then one sublist should be 0->0->0 and the other should be 1->1->1.
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
//Function begins:
function alternateSplit(head){
    let current=head;
    let newList=new LinkedList();
    while(current&&current.next){
        let temp=current.next.next;
        newList.InsertEnd(current.next.data);
        current.next=current.next.next;
        current=temp;
    }
    console.log(head,newList);
}
let LList=new LinkedList();
LList.InsertEnd(0);
LList.InsertEnd(1);
LList.InsertEnd(2);
LList.InsertEnd(3);
LList.InsertEnd(4);
LList.InsertEnd(5);
console.log(alternateSplit(LList.head));
