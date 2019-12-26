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
//Insertion Sort Function
function Insertion(head){
   let sortedList=new LinkedList();
   let current=head;
   while(current){
       let next=current.next;
       let sorted=sortedList.head;
       //Here we check for empty (or) only one node in sorted List
       if(sorted===null||sorted.data>=current.data){
           current.next=sorted;
           sortedList.head=current;
       }
       //if the node has value in middle (or) end of sorted list
       else{
           let prev=null;
           while(sorted.data<current.data&&sorted!==null)
           {
               prev=sorted;
               sorted=sorted.next;
           }
           prev.next=current;
           current.next=sorted;
       }
       current=next;
   }
   return sortedList;
}
let List=new LinkedList();
List.InsertEnd(5);
List.InsertEnd(4);
List.InsertEnd(3);
List.InsertEnd(2);
List.InsertEnd(1);
console.log(Insertion(List.head));
/*
Algorithm:
1.we create an empty list which holds the sorted data nodes in it.
2.we store next because after inserting the node in sortedList the current.next values changes.
3.we assign sortedList.head to access data and next property of node.
4.we place the node in current position in sorted list
5.Then we move the current pointer one step ahead until we reach the end of the List
*/
