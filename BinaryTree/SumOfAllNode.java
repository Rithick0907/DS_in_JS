import java.util.Queue;
import java.util.LinkedList;
class Node{
    int data;
    Node left,right;
    Node(int data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class BinaryTree{
    Node root=null;
    void InsertNode(int data){
        //Node Insertion Level Order Wise
        Node curr=new Node(data);
        if(this.root==null){
            this.root=curr;
        }
        else{
            Queue<Node> q1=new LinkedList<>();
            q1.add(this.root);
            while(q1.size()!=0){
                Node temp=q1.remove();
                if(temp.left!=null) q1.add(temp.left);
                else{
                    temp.left=curr;
                    break;
                }
                if(temp.right!=null)    q1.add(temp.right);
                else{
                    temp.right=curr;
                    break;
                }
            }
        }
    }
    void sum(Node root){
        Queue<Node> q1=new LinkedList<>();
        q1.add(root);
        int sum=0;
        while(q1.size()!=0){
            Node temp=q1.remove();
            sum+=temp.data;
            if(temp.left!=null) q1.add(temp.left);
            if(temp.right!=null) q1.add(temp.right);
        }
        System.out.print(sum);
    }
    public static void main(String[] args){
        BinaryTree bt1=new BinaryTree();
        bt1.InsertNode(5);
        bt1.InsertNode(6);
        bt1.InsertNode(7);
        bt1.InsertNode(8);
        bt1.InsertNode(9);
        bt1.sum(bt1.root);
    }
}
