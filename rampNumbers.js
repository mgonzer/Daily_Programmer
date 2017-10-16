// # Ramp Numbers
// A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
//
// ## Input
// A positive integer, n.
//
// ## Output
// true if the input is a ramp number, false if it is not


function rampNumber(number){
  let string = number.toString()
  for(let i = 0; i < string.length-1; i++){
    if(string[i+1] < string[i]){
      return false
    };
  }
  return true
}

console.log(rampNumber(12342));
