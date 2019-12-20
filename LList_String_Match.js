/*
Question in GeeksForGeeks:
Given two strings, represented as linked lists (every character is a node in a linked list). 
Write a function compare() that works similar to strcmp(), i.e., it returns 0 if both strings are same,
1 if first linked list is lexicographically greater, and -1 if the second string is lexicographically greater.
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
            while(current.next!==null){
                current=current.next;
            }
            current.next=node;
        }
    }
    Print(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}
//Checking two string Lexicographically
function check(head1,head2){
    let c=true;
    while(head1&&head2){
        if(head1.data!==head2.data){
            c=false;
        }
        head1=head1.next;
        head2=head2.next;
    }
    if(head1===null&&head2===null&&c===true){
        return 0;
    }
    else if(head1===null&&head2===null&&c===false){
        return -1;
    }
    if(head1===null){
        let len=0;
        while(head2){
            len++;
            head2=head2.next;
        }
        return len;
    }
    else if(head2===null){
        let len=0;
        while(head1){
            len++;
            head1=head1.next;
        }
        return len;
    }
}
//Driver Code
let list=new LinkedList();
list.InsertEnd('g');
list.InsertEnd('e');
list.InsertEnd('e');
let list1=new LinkedList();
list1.InsertEnd('g');
list1.InsertEnd('e');
list1.InsertEnd('e');
list1.InsertEnd('k');
list1.InsertEnd('s');
console.log(check(list.head,list1.head));
