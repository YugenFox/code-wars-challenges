//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

//mine
function solution(number){
  //if negative number 
  if(number < 0){
    return 0
  }
  let sum = 0
  let divisiblyBy15 = false
  
  for(let i = 0; i< number; i++ ){
    divisiblyBy15 = false
    if(i % 15 === 0 ){
      sum += i
      divisiblyBy15 = true
    }
    
    if(divisiblyBy15 === false){
      if(i % 5 === 0 ){
        sum += i
      }
      if(i % 3 === 0 ){
        sum += i
      }
    }
    
  }
  return sum
    
}

//cleaner way
function solution(number){
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  
  return sum;
}

//tests

console.log(solution(10))

//Put the 2nd and 3rd params of the for loop in the wrong order so it was not running at first
//Was getting wrong return until I saw the instructions said they want all nums BELOW the num we pass through, not up to...so changed the for loop param to match that goal