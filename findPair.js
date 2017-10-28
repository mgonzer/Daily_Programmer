//Find pair of numbers whos product is equal to given product



function findParis(arr, num){
  for(let i = 0; i < arr.length; i++){
    for(let j = arr.length-1; j > i; j--){
      if(arr[i]*arr[j]==num){
        return [arr[i],arr[j]]
      }
    }
  }
  return null;
}

console.log(findParis([1,7,5,10,4], 20));
