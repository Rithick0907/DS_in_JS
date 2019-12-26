//Sort a LinkedList using mergeSort algorithm
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
function mergeLists(head1, head2) {
    if(head1===null)    return head2;
    if(head2===null)    return head1;
    let current1=head1;
    let current2=head2;
    let dummy=new LinkedList();
    while(current1&&current2){
        if(current1.data<=current2.data){
            dummy.InsertEnd(current1.data);
            current1=current1.next;
        }
        else{
            dummy.InsertEnd(current2.data);
            current2=current2.next;
        }
    }
    if(current1===null){
        while(current2){
            dummy.InsertEnd(current2.data);
            current2=current2.next;
        }
    }
    if(current2===null){
        while(current1){
            dummy.InsertEnd(current1.data);
            current1=current1.next;
        }
    }
    return dummy.head;
}
function mergeSort(head){
    if(head===null || head.next===null) return head;
     let middle=getMiddle(head);
     let middlenext=middle.next;
     middle.next=null;
     let left=mergeSort(head);
     let right=mergeSort(middlenext);
     sortedList=mergeLists(left,right);
     return sortedList;
}
function getMiddle(head){
    let slow=head;
    let fast=head;
    while(fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
}
let List=new LinkedList();
List.InsertEnd(7);
List.InsertEnd(5);
List.InsertEnd(9);
List.InsertEnd(4);
List.InsertEnd(6);
console.log(mergeSort(List.head));
