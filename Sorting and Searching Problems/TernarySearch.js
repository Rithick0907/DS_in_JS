function ternarySearch(a,low,high,key){
    if(low<=high)
    {
    //Math.floor() is important otherwise the Result is -1
    let mid1=Math.floor(low+(high-low)/3);
    let mid2=Math.floor(high-(high-low)/3);
    if(key===a[mid1])        
        return mid1;
    else if(key===a[mid2])
        return mid2;   
    else if(key<a[mid1])     
       return ternarySearch(a,low,mid1-1,key);
    else if(key>a[mid2])     
       return ternarySearch(a,mid2+1,high,key);
    else   
        return ternarySearch(a,mid1+1,mid2-1,key);
    }  
    return -1;  
}

let a=[5,4,2,7,0,1];
a.sort((a,b)=>a-b);
console.log(a);
console.log(ternarySearch(a,0,a.length-1,10));
