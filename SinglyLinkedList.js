"use strict";
class SinglyLinkedListNode{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class SinglyLinkedList{
    constructor()
    {
        this.head=null;
    }
    //Insert the Element in begining of the List
    InsertBeg(data)
    {
        let node=new SinglyLinkedListNode(data);
        //To Check that LinkedList is Empty
        if(this.head===null){
            this.head=node;
        }
        else{
            node.next=this.head;
            this.head=node;
        }
    }
    //Insert the Element in specific index of the List
    InsertAtIndex(data,position){
        let node=new SinglyLinkedListNode(data);
        let previous;
        let it=0;
        let current=this.head;
        while(it<position){
            previous=current;
            current=current.next;
            it++;
        }
        previous.next=node;
        node.next=current;
    }
    InsertEnd(data){
        let node=new SinglyLinkedListNode(data);
        let current=this.head;
        while(current.next!==null){
            current=current.next;
        }
        current.next=node;
    }
    RemoveFromIndex(position){
        let previous,index=0,size=0;
        let current=this.head;
        //Here we find size to check that the index specified is within the LinkedList range
        while(current){
            current=current.next;
            size++;
        }
        if(index<size)
        {
        current=this.head;
        while(index<position){
            previous=current;
            current=current.next;
            index++;
        }
        previous.next=current.next;
    }
    }
    RemoveElement(data){
        let current=this.head;
        let previous;
        let found=false;
        /*We check that the data is head or not.
          Incase of head we don't have previous node
        */
        if(data===this.head.data){
            this.head=this.head.next;
        }
        else{
        while(current){
            if(current.data===data)
            {
                found=true;
                previous.next=current.next;
                break;
            }
            previous=current;
            current=current.next;
        }
        if(!found)        console.log("Data doesn't exist in LinkedList");
    }
    }
    Print()
    {
        let current=this.head;
        //Here I use current insteadof current.next because if we use current.next we cannot reach that node data so we check that node exist or not
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}
let llist=new SinglyLinkedList();
llist.InsertBeg(100);
llist.InsertAtIndex(150,1);
llist.InsertEnd(300);
llist.Print();
llist.RemoveFromIndex(1);
llist.RemoveElement(150);
console.log("After Removal:");
llist.Print();