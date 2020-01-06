/*Question in HackerRank:
Find the Height of the Binary Tree
HINT:
The height of a binary tree is the number of edges between the tree's root and its furthest leaf.
Height Similar as Level Only Difference Height Start with 0 but Level Start  with 1.
*/
import java.util.*;
import java.io.*;

class Node {
    Node left;
    Node right;
    int data;
    
    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}

class TreeHeight {
	public static int height(Node root) {
      	if(root==null)  return -1;
        else{
            Queue<Node> q1=new LinkedList<>();
            q1.add(root);
            int height=-1;
            while(q1.size()!=0){
                int size=q1.size();
                height++;
                while(size>0){
                    Node current=q1.remove();
                    if(current.left!=null)  q1.add(current.left);
                    if(current.right!=null)  q1.add(current.right);
                    size--;
                }
            }
            return height;
        }
    }

	public static Node insert(Node root, int data) {
        if(root == null) {
            return new Node(data);
        } else {
            Node cur;
            if(data <= root.data) {
                cur = insert(root.left, data);
                root.left = cur;
            } else {
                cur = insert(root.right, data);
                root.right = cur;
            }
            return root;
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int t = scan.nextInt();
        Node root = null;
        while(t-- > 0) {
            int data = scan.nextInt();
            root = insert(root, data);
        }
        scan.close();
        int height = height(root);
        System.out.println(height);
    }	
}
