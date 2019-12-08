class DoublyLinkedListNode{
    constructor(data){
        this.data=data;
        this.next=null;
        this.previous=null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    InsertBeg(data){
    let node=new DoublyLinkedListNode(data);
    if(this.head!==null){
    this.head.previous=node;
    node.next=this.head;
    node.previous
    this.head=node;}
    else{
        this.head=node;
        this.tail=node;
    }
    }
    InsertAtPos(data,index){
        let node=new DoublyLinkedListNode(data);
        //We can perform thi same operation if the node is given by omitting below 8 lines of finding the node because the current node is already given
        let it=0;
        let current=this.head;
        let previous=null;
        while(it<index){
            previous=current;
            current=current.next;
            it++;
        }
        previous.next=node;
        node.previous=previous;
        node.next=current;
        current.previous=node;
    }
    InsertEnd(data){
        let node=new DoublyLinkedListNode(data);
        let temp=this.tail;
        node.next=null;
        node.previous=temp;
        temp.next=node;
        this.tail=node;
    }
    DeleteBeg(){
        this.head=this.head.next;
        this.head.previous=null;
    }
    DeleteAtPos(index){
        //We can perform thi same operation if the node is given by omitting below 8 lines of finding the node because the current node s already given
        let pos=0;
        let current=this.head;
        let previous=null;
        while(pos<index){
            previous=current;
            current=current.next;
            pos++;
        }
        previous.next=current.next;
        current.next.previous=previous;
    }
    DeleteEnd(){
        this.tail=this.tail.previous;
        this.tail.next=null;
    }
    Print(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}
let dll=new DoublyLinkedList();
dll.InsertBeg(6);
dll.InsertBeg(5);
dll.InsertEnd(7);
dll.InsertEnd(8);
dll.InsertEnd(9);
dll.InsertEnd(10);
dll.InsertAtPos(6.5,2);
dll.Print();
dll.DeleteAtPos(2);
console.log("2nd List");
dll.Print();
