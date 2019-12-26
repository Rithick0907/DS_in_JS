/*Question in GeeksForGeeks:
Given a linked list and two integers M and N. 
Traverse the linked list such that you retain M nodes then delete next N nodes, 
continue the same till end of the linked list.
*/
function skipMdeleteN(head,m,n){
    let current=head;
    while(current){
        for(let i=1;i<m;i++){
            if(current===null)  return;
            current=current.next;
        }
        if(current===null)  return;
        let temp=current;
        for(let i=0;i<n;i++){
            if(temp===null) break;
            temp=temp.next;
        }
        if(temp!==null){
        current.next=temp.next;
        current=temp.next;}
        else{
            current.next=temp;
            current=temp;
        }
    }
}
let List=new LinkedList();
List.InsertEnd(10);
List.InsertEnd(20);
List.InsertEnd(30);
List.InsertEnd(40);
List.InsertEnd(50);
List.InsertEnd(60);
skipMdeleteN(List.head,2,2);
console.log(List.head);
