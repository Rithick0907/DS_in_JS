//It is best when the number of elements in array is less(like 10 or 100)
function quickSort(a,low,high)
{
    if(low<high){
        let q=partition(a,low,high);
        quickSort(a,low,q-1);
        quickSort(a,q+1,high);
    }
}
function partition(a,low,high){
    let r=a[high];
    let i=low-1;
    for(let j=low;j<high;j++){
        //For Descending order change the "<" to ">"
        if(a[j]<=r){
            i++;
            let temp=a[j];
            a[j]=a[i];
            a[i]=temp;
        }
    }
    i++;
    let temp=a[i];
    a[i]=a[high];
    a[high]=temp;
    return i;
}
let a=[5,2,1,0,3,7];
quickSort(a,0,a.length-1);
console.log(a);
