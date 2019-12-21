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
       if(sorted===null||sorted.data>=current.data){
           current.next=sorted;
           sortedList.head=current;
       }
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
