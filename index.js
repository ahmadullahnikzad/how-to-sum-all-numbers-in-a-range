function sumAll(arr) {
  let total=0;
  if(arr[0]<arr[arr.length-1]){
    for(let i=arr[0];i<=arr[arr.length-1];i++){
    total+=i;
  }
  }if(arr[0]>arr[arr.length-1]){
    arr.reverse();
    for(let i=arr[0];i<=arr[arr.length-1];i++){
    total+=i;
  }
  }
  return total;
}

console.log(sumAll([40,1]));