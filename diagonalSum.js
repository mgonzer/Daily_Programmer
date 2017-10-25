//sum the diagonals of the array;


function diagonalSum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i][i];
  }
  return sum;
}


console.log(diagonalSum([[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]));
