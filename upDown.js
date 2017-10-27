//Given an arry of numbers write a function that says
//if number goes up, down or even


function upDown(arr){
  let result = [];
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i]<arr[i+1]){
      result.push('up')
    }else if(arr[i]>arr[i+1]){
      result.push('down')
    }else{
      result.push('even')
    }
  }

  return result;
}

console.log(upDown([1,2,3,4,3,2,2]));
