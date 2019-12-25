function bubbleSort(a){
    //Checking Adjacent Elements
    for(let k=0;k<a.length;k++){
        for(let i=0;i<a.length-k;i++){
            if(a[i]>a[i+1]){
                let temp=a[i];
                a[i]=a[i+1];
                a[i+1]=temp;
            }
        }
    }
}
let a=[5,2,1,0,3,7];
bubbleSort(a);
console.log(a);
