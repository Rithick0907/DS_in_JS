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
    InsertBeg(data){
        let node=new Node(data);
        if(this.head===null){
            this.head=node;
        }
        else{
            node.next=this.head;
            this.head=node;
        }
    }
    InsertAtPos(data,pos){
        let node=new Node(data);
        if(pos===0){
            node.next=this.head;
            this.head=node;
        }
        else{
            let index=0;
            let prev=null;
            let current=this.head;
            while(index<pos){
                prev=current;
                current=current.next;
                index++;
            }
            prev.next=node;
            node.next=current;
        }
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
    DeleteBeg(){
        this.head=this.head.next;
    }
    DeleteAtPos(pos){
        let index=0;
        let current=this.head;
        let prev=null;
        while(index<pos){
            prev=current;
            current=current.next;
            index++;
        }
        prev.next=current.next;
    }
    DeleteElem(elem){
        let current=this.head;
        let prev=null;
        while(current){
            if(current.data===elem){
                prev.next=current.next;
                current=current.next;
            }
            else{
            prev=current;
            current=current.next;
        }
        }
    }
    DeleteEnd(){
        let current=this.head;
        let prev=null;
        while(current.next!==null){
            prev=current;
            current=current.next;
        }
        prev.next=null;
    }
    Print(){
        let current=this.head;
        let len=0;
        while(current){
            console.log(current.data);
            current=current.next;
            len++;
        }
        console.log("Length:"+len);
    }
    Reverse(){
        let prev=null;
        let current=this.head;
        while(current){
            let next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        this.head=prev;
    }
    DeleteList(){
        this.head=null;
    }

}
let LList=new LinkedList();
LList.InsertBeg(5);
LList.InsertBeg(4);
LList.InsertAtPos(5.5,2);
LList.InsertEnd(6);
LList.InsertEnd(7);
LList.InsertEnd(5.5);
LList.InsertEnd(5.5);
LList.InsertEnd(5.5);
LList.Print();
console.log("After Deleting 5.5");
LList.DeleteElem(5.5);
LList.Print();
LList.Reverse();
console.log("After Reverse:")
LList.Print();
console.log("After deleting Linked List");
LList.DeleteList();
LList.Print();