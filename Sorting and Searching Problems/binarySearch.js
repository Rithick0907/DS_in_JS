function binarySearch(a,start,end,key){
    if(start<=end){
        let mid=Math.floor((start+end)/2);
        if(key===a[mid]){
            return mid;
        }
        else if(key>a[mid]){
            return binarySearch(a,mid+1,end,key);
        }
        else{
            return binarySearch(a,start,mid,key);
    }
}
}
let a=[5,4,2,7,0,1];
a.sort((a,b)=>a-b);
console.log(a);
console.log(binarySearch(a,0,a.length-1,7));
