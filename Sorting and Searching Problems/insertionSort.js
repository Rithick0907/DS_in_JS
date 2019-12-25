function insertionSort(a){
    //Inserting the picked Element in its correct position
    for(j=1;j<a.length;j++){
        let key=a[j];
        let i=j-1;
        while(i>=0&&a[i]>key){
            a[i+1]=a[i];
            i--;
        }
        a[i+1]=key;
    }
}
let a=[5,2,1,0,3,7];
insertionSort(a);
console.log(a);
