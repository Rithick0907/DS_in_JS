/*package whatever //do not write package name here */
//Question:Given a string S. The task is to print all permutations of a given string.in lexicographically increasing order.
import java.util.*;
import java.lang.*;
import java.io.*;

class StringPermutation {
    static Scanner sc=new Scanner(System.in);
    static TreeSet<String> s=new TreeSet<>();
    public static void permutation(String str,String ans){
        if(str.length()==0){
            s.add(ans);
            return;
        }
        for(int i=0;i<str.length();i++){
            char ch=str.charAt(i);
            String ros=str.substring(0,i)+str.substring(i+1);
            permutation(ros,ans+ch);
        }
    }
    public static void print(){
        Iterator it=s.iterator();
        while(it.hasNext()){
            System.out.print(it.next()+" ");
        }
        System.out.println();
    }
	public static void main (String[] args) {
		int T=sc.nextInt();
		for(int i=0;i<T;i++){
		    String str=sc.next();
		    permutation(str,"");
		    print();
		    s.clear();
		}
	}
}
