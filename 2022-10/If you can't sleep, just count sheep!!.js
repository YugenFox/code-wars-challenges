//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num){
    //your code here
    
    let retString = ""
    for(let i = 1; i<= num; i++){
      retString += `${i} sheep...`
    }
    return retString
  }