//Create and Insert Node in Binary Tree
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
    void inorder(Node root){
        if(root==null)  return;
        inorder(root.left);
        System.out.print(root.data+" ");
        inorder(root.right);
    }
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
    public static void main(String[] args){
        BinaryTree bt1=new BinaryTree();
        bt1.InsertNode(5);
        bt1.InsertNode(6);
        bt1.InsertNode(7);
        bt1.InsertNode(8);
        bt1.InsertNode(9);
        bt1.inorder(bt1.root);
    }
}
