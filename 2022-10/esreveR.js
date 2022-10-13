//https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript

//my solution
reverse = function(array) {
    let revArray = []
    
    for(let i = array.length-1; i >= 0; i--){
      revArray.push(array[i])
    }
    
    return revArray
  }