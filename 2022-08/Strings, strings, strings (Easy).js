//https://www.codewars.com/kata/56d6b921c9ae3fd926000601/train/javascript

function toString(val){
    let stringVal = `${val}`
    return stringVal
  }

//Beast answer
String.prototype.toString = function(){
  return `${this}`
}

//Main take away is had to make an Object type function to use the function above as a method