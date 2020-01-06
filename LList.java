class Node{
    int data;
    Node next;
    Node(int data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    Node head;
    int a=5;
    LinkedList(){
        this.head=null;
    }
    void InsertBeg(int data){
        Node node=new Node(data);
        node.next=this.head;
        this.head=node;
    }
    void push(int data){
        Node node=new Node(data);
        if(this.head==null){
            this.head=node;
        }
        else{
            Node current=this.head;
            while(current.next!=null){
                current=current.next;
            }
            current.next=node;
        }
    }
    void InsertAtPos(int data,int index){
        Node node=new Node(data);
        Node current=this.head;
        int k=0;
        while(current.next!=null&&k<index){
            current=current.next;
            k++;
        }
        node.next=current.next;
        current.next=node;
    }
    void DeleteAtPos(int pos){
        if(pos==0)  DeleteBeg();
        else{
            int index=0;
            Node current=this.head;
            Node prev=null;
            while(current.next!=null&&index<pos){
                prev=current;
                current=current.next;
                index++;
            }
            prev.next=current.next;
        }
    }
    void DeleteBeg(){
        this.head=this.head.next;
    }
    void pop(){
        if(this.head==null) return;
        else{
            Node prev=null;

            Node current=this.head;
            while(current.next!=null){
                prev=current;
                current=current.next;
            }
            prev.next=null;
        }
    }
    void print(){
        Node current=this.head;
        while(current!=null){
            System.out.print(current.data+" ");
            current=current.next;
        }
    }
    void reverse()
    {
        Node current=this.head;
        Node prev=null;
        while(current!=null){
            Node next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        this.head=prev;
    }
    public static void main(String[] args){
        LinkedList list=new LinkedList();
        list.push(5);
        list.push(6);
        list.push(7);
        list.InsertBeg(4);
        list.InsertAtPos(8,2);
        list.reverse();
        list.print();
        /*list.InsertBeg(1);
        list.InsertAtPos(2,1);*/

    }
}
