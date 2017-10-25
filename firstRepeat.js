//Find the first repeated letter in string;


function repeatLetter(string){
  let obj = {};
  for(let i of string){
    if(!obj[i]){
      obj[i]=1;
    }else{
      return i;
    }
  }
  return null;
}

console.log(repeatLetter('ABCDDA'));
