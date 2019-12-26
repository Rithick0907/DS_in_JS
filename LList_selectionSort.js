function selectionSort(head){
    let current=head;
    while(current){
        let min=current;
        let temp=current.next;
        while(temp)
        {
        if(min.data>temp.data)  min=temp;
        temp=temp.next;
        }
        let temp1=current.data;
        current.data=min.data;
        min.data=temp1;
        current=current.next;
    }
    return head;
}
let List=new LinkedList();
List.InsertEnd(7);
List.InsertEnd(5);
List.InsertEnd(9);
List.InsertEnd(4);
List.InsertEnd(6);
List.InsertEnd(10);
List.InsertEnd(6);
console.log(selectionSort(List.head));
