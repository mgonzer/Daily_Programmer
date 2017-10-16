function countString(string) {
  let lowerCase = string.toLowerCase().replace(/\s/g, '')
  let letterCount = {}
  for (let i = 0; i < lowerCase.length; i++) {
    let key = lowerCase[i]
    if(!letterCount[key]){
      letterCount[key] = 1
    }else{
      letterCount[key] += 1;
    }
  }

  let resultString = ''
  for (let key in letterCount){
    let letters = key + ':' + letterCount[key]
    resultString += letters + ' ';
  }
  return resultString
}


console.log(countString("helllo hh zzz"))
