function selectionSort(a){
    //Selecting Minimum Value and Place it in Beginning
    for(i=0;i<a.length;i++){
        let minIndex=i;
        for(j=i+1;j<a.length;j++){
            if(a[minIndex]>a[j])    minIndex=j;
        }
        let temp=a[i];
        a[i]=a[minIndex];
        a[minIndex]=temp;
    }
}
let a=[5,2,1,0,3,7];
selectionSort(a);
console.log(a);
