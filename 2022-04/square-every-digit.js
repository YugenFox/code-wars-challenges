//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
    let numString = num.toString()
    let squaredReturn = ''
    for(let i = 0; i < num.toString().length; i++){
      squaredReturn += Math.pow(numString[i], 2)
      console.log(squaredReturn)
      
    }
    
    return parseInt(squaredReturn);
  }

  console.log(squareDigits(3212)) //9414
  console.log(squareDigits(2112)) //4114