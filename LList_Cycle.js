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
    createLoop(n){
        //n=index where the loop starts
        let node=this.head;
        let n1=1;
        while(n1<n){
            //traverse the node until the specified index
            node=node.next;
            n1++;
        }
        let end=this.head;
        //traverse to the end so that we connect it to that index
        while(end.next!==null){
            end=end.next;
        }
        end.next=node;
    }
    detectLoop(){
        //Using two pointers(slow & fast) based on Floyd's Cycle Finding Algorithm
        let slow=this.head;
        let fast=this.head;
        while(slow!==null&&fast!==null&&fast.next!==null){
            if(slow===fast){
                return true;
            }
            slow=slow.next;
            fast=fast.next.next;
        }
    }
    LoopLength(){
        /*After finding the presence of loop the slow & fast pointer points to same node.so we move slow pointer along with count until the
        slow pointer again meets the fast pointer*/
        if(this.detectLoop()){
            let slow=this.head;
            let fast=this.head;
            while(slow!==null&&fast!==null&&fast.next!==null){
                slow=slow.next;
                fast=fast.next.next;
                if(slow===fast){
                    let count=1;
                    slow=slow.next;
                    while(slow!==fast){
                        count++;
                        slow=slow.next;
                    }
                    return count;
                }
            }
        }
    }
    RemoveLoop(){
        //Here we find the previous node of the slow pointer and reassign it to null i.e.,making it as a last node
        if(this.detectLoop)
        {
        let slow=this.head;
        let fast=this.head;
        while(slow!==null&&fast!==null&&fast.next!==null){
            let previous=slow;
            slow=slow.next;
            fast=fast.next.next;
            if(slow===fast){
                previous.next.next=null;
            }
        }
    }
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
}
let llist=new LinkedList();
llist.InsertEnd(1);
llist.InsertEnd(2);
llist.InsertEnd(3);
llist.InsertEnd(4);
llist.InsertEnd(5);
llist.InsertEnd(6);
llist.createLoop(2);
console.log(llist.LoopLength());
llist.RemoveLoop();
llist.Print();