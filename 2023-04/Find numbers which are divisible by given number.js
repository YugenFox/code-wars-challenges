//https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript

function divisibleBy(numbers, divisor){
  return numbers.filter(e => (e % divisor === 0))
}

//tried using .map instead of .filter at first and wasted some time