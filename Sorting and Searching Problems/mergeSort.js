function mergeSort(a,low,high){
    if(low<high){
        let mid=Math.floor((low+high)/2);
        mergeSort(a,low,mid);
        mergeSort(a,mid+1,high);
        merge(a,low,mid,high);
    }
}
function merge(a,low,mid,high){
    let n1=mid+1-low;
    let n2=high-mid;
    let L=[];
    let R=[];
    for(let i=0;i<n1;i++)   L[i]=a[i+low];
    for(let i=0;i<n2;i++)   R[i]=a[i+mid+1];
    L[n1]=Infinity;
    R[n2]=Infinity;
    let i=0;j=0;
    //K value start with "low" and end with "<= high"
    for(let k=low;k<=high;k++){
        if(L[i]<=R[j]){
            a[k]=L[i];
            i++
        }
        else{
            a[k]=R[j];
            j++;
        }
    }
} 
let a=[5,2,1,0,3,7];
mergeSort(a,0,a.length-1);
console.log(a);
