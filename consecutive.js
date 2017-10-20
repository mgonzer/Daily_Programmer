//Check for consecutive numebers in an array.

function consecutive(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i]+1 != arr[i+1]){
      return arr[i+1]
    }
  }
  return null
}

console.log(consecutive([1,2,3,4,5]));
console.log(consecutive([1,2,3,4,6,7]));
