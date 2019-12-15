/*

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
//Segregate Odd and Even Node
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
            current=current.next;
            previous.next=previous.next.next;
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
//Alnative occurence of even & odd data
function alternateOddEven(head){
    let SegregatedList=evenOdd(head);
    let current=SegregatedList;
    let previous=null;
    while(current.data%2===0){
        previous=current;
        current=current.next;
    }
    let evenList=current;
    previous.next=null;
    current=SegregatedList;
    let finalList=new LinkedList();
    while(current&&evenList){
        finalList.InsertEnd(evenList.data);
        finalList.InsertEnd(current.data);
        current=current.next;
        evenList=evenList.next;
    }
    if(current){
        while(current){
            finalList.InsertEnd(current.data);
            current=current.next;
        }
    }
    else if(evenList){
        while(evenList){
            finalList.InsertEnd(evenList);
            evenList=evenList.next;
        }
    }
    return finalList;
}
let LList=new LinkedList();
LList.InsertEnd(10);
LList.InsertEnd(2);
LList.InsertEnd(1);
LList.InsertEnd(3);
LList.InsertEnd(6);
LList.InsertEnd(7);
LList.InsertEnd(8);
console.log(alternateOddEven(LList.head));
}
