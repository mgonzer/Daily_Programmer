//Check to see if string contains all letters of the alphabet;
function allLetters(string){
  let obj={};
  string = string.replace(/ /g, '')
  for(let i = 0; i< string.length; i++){
    if(!obj[string[i]]){
      obj[string[i]] = 1;
    }else{
      obj[string[i]] ++
    }
  }
  return (Object.keys(obj).length == 26);
}


console.log(allLetters('abcd efghijkl mnopqrstuv wxyz'))
