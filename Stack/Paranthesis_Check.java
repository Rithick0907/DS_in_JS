/*
Question in geeksforgeeks:
Given an expression string exp. Examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
For example, the program should print 'balanced' for exp = “[()]{}{[()()]()}” and 'not balanced' for exp = “[(])”
*/
import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
    static boolean isMatching(char a,char b){
        if(a=='{' && b=='}')    return true;
        else if(a=='['&&b==']')    return true;
        else if(a=='('&&b==')')    return true;
        else    return false;
    }
    static String paranthesisCheck(String str){
		Stack<Character> s=new Stack<>();
		char[] ch=str.toCharArray();
		for(char i:ch){
		if(i=='{'||i=='['||i=='(')  s.push(i);
		if(i=='}'||i==')'||i==']') {
		    if(s.empty()) return "not balanced";
		    else if(!isMatching(s.pop(),i)){
		        return "not balanced";
		    }
		}
		}
		if(s.empty()) return "balanced";
		else    return "not balanced";
    }
	public static void main (String[] args) {
		Scanner sc=new Scanner(System.in);
		int T=sc.nextInt();
		String[] str=new String[T];
		for(int i=0;i<T;i++){
		    str[i]=sc.next();
		}
		for(int i=0;i<T;i++){
		    System.out.println(paranthesisCheck(str[i]));
		}
	}
}
