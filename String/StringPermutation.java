package com.test123;
import java.util.*;
public class StringPermutation {
    static Set<String> s=new HashSet<>();     //Without Repetition.For with repetition we dont use hashset simply print result.
    static void permutation(String str,String ans){
        if(str.length()==0){
            s.add(ans);
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
    }
    public static void main(String[] args) {
        String name="RA";
        permutation(name,"");
        print();
    }
}
