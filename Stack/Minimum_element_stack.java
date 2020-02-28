/*Question:
You are given N elements and your task is to Implement a Stack in which you can get minimum element in O(1) time.

Input:
The first line of the input contains an integer 'T' denoting the number of test cases. 
Then T test cases follow. First line of each test case contains an integer Q denoting the number of queries.
A Query Q may be of 3 Types:
    1. 1 x (a query of this type means  pushing 'x' into the stack)
    2. 2 (a query of this type means to pop element from stack and print the poped element)
    3. 3 (a query of this type means to print the minimum element from the stack)
The second line of each test case contains Q queries seperated by space.

Output:
The output for each test case will  be space separated integers having -1 
if the stack is empty else the element poped out  or min element from the stack
*/
//Driver Code in Website
/*
Algorithm:
1.We maintain two stack.one is for maintain all the value we have in stack & another to maintain smallest value of the 1st stack
2.In push operation if supporting stack is empty or it top element is greater then the upcoming element then push it into the support stack.
3.In pop operation if support stack peek == main stack popped element the pop from support stack
4.return support stack peek for getmin().
*/
class GfG
{
    int minEle;
    Stack<Integer> s;
    Stack<Integer> support;
    GfG(){
        s=new Stack();
        support=new Stack();
    }
    int getMin()
    {
     if(s.empty())  minEle=-1;
     else if(!support.empty())  minEle=support.peek();
     return minEle;
    }
    int pop()
    {
	    if(s.empty())   return -1;
	    else
	    {
	        int temp=s.pop();
	        if(!support.empty()&&temp==support.peek())    temp=support.pop();
	        return temp;
	    }
    }
    void push(int x)
    {
	    s.push(x);
	    if(support.empty())     support.push(x);
	    else{
		 //For maximum element in stack we use x>=stack.peek()
	        if(x<=support.peek())    support.push(x);
	    }
    }	
}
