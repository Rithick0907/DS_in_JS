/*
Question in GeeksforGeeks:
Given three linked lists, say a, b and c, find one node from each list 
such that the sum of the values of the nodes is equal to a given number.
For example, if the three linked lists are 12->6->29, 23->5->8 and 90->20->59,
and the given number is 101, the output should be tripel “6 5 90”
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
    push(data){
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
function findTriplet(head1,head2,head3,check){
    let a=head1;
    while(a){
        b=head2;
        c=head3;
        while(b&&c){
            let sum=a.data+b.data+c.data;
            if(sum===check){
                let str=a.data+" "+b.data+" "+c.data;
                return str;
            }
            else if(sum<check)  b=b.next;
            else    c=c.next;
        }
        a=a.next;
    }
}
let List1 = new LinkedList(); 
let List2 = new LinkedList(); 
let List3 = new LinkedList(); 
  
/* Create Linked List 1 20->5->15->100 */
List1.push(20); 
List1.push(5); 
List1.push(15); 
List1.push(100); 
/*create a sorted linked list 2 2->4->9->10 */
List2.push(2);   
List2.push(4); 
List2.push(9); 
List2.push(10); 
/*create another sorted linked list 'c' 8->4->2->1 */
List3.push(8);
List3.push(4); 
List3.push(2); 
List3.push(1); 
console.log(findTriplet(List1.head,List2.head,List3.head,25));
