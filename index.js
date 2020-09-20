//solution 1
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
//solution 2
function sumAll2(arr){
  let total=0;
  for(let i=Math.min.apply(null,arr);i<=Math.max.apply(null,arr);i++){
total+=i;
  }
  return total;
}
sumAll2([4,1])