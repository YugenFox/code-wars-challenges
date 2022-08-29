//https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript

function toNumberArray(stringarray){
    return stringarray.map(Number)
  }

  let stringArray = ["1.1","2.2","3.3"]
  console.log(stringArray)
  console.log(toNumberArray(stringArray))
