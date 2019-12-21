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
    //we create an empty list which holds the sorted data nodes in it.
   let sortedList=new LinkedList();
   let current=head;
   while(current){
       //we store next because after inserting the node in sortedList the current.next values changes
       let next=current.next;
       //we assign sortedList.head to access data and next property of node
       let sorted=sortedList.head;
       //Here we check for empty (or) only one node in sorted List
       if(sorted===null||sorted.data>=current.data){
           current.next=sorted;
           sortedList.head=current;
       }
       //if the node has value in middle (or) end of sorted list
       else{
           let prev=null;
           //Traverse until we reach the correct position
           while(sorted.data<current.data&&sorted!==null)
           {
               prev=sorted;
               sorted=sorted.next;
           }
           //we place the node in its right position
           prev.next=current;
           current.next=sorted;
       }
       //we move the current pointer one step ahead
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
