//reduce product of digits until only one digit remains.
//return the number of times this process occured.

function persistent(number){
  let count = 0;
  let arr = number.toString().split('')

  while(arr.length > 1){
    arr = arr.reduce((a,b)=>a*b);
    arr = arr.toString().split('');
    count ++;
  }
  return count;
}


console.log(persistent(55));
