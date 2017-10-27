//Sum digits until only a single digit left,
//return that digit.

function sumDigits(num){
  let arr = num.toString().split('')

  while(arr.length > 1){
    arr = arr.reduce((a,b)=>(parseInt(a)+parseInt(b)))
    arr = arr.toString().split('');
  }

  return arr.join('');
}


  console.log(sumDigits(901));
