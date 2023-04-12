//https://www.codewars.com/kata/57d93978950d8486a3000def/train/javascript

function findNumber(searchedNum, compare) {
  let underApprox = compare - 0.00002
  let overApprox = compare + 0.00002
  
  //exact match return 
  if(searchedNum === compare){
    return searchedNum
  }
  
  //approx .00002 correct
  if(searchedNum >= underApprox && searchedNum <= overApprox){
    return 0
  }
  //less than approx
  if(searchedNum < underApprox){
    return -1
  }
  //greater than approx
  if(searchedNum > underApprox){
    return 1
  }
  
  
}

//test
console.log(findNumber(5,10))
console.log(findNumber(9.99998,10))
console.log(findNumber(10.00002,10))
console.log(findNumber(10.00003,10))

//code wars was dumb in the way it was layed out. Above works with general idea