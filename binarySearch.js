function search(arr, target){
  let low = 1, high = arr.length;
  while(low <= high){
    let mid = Math.floor(low +(high-low)/2)
    if(arr[mid]==target){
      return mid;
    }else if(arr[mid] < target){
      low = mid + 1;
    }else{
      high = mid -1
    }
  }
  return null
}


console.log(search([1,2,3,4,5,6,7,8], 2))
