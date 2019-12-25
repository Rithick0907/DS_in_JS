function linearSearch(a,key){
    for(let i in a){
        if(a[i]===key)  return (Number(i)+1);
    }
    return -1;
}
let a=[5,4,2,7,0,1];
console.log(linearSearch(a,0));
