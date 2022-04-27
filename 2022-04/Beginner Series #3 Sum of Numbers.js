//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum( a,b )
{
    let startingPoint = 0
    let endingPoint = 0
    let totalSum = 0
   if(a === b){
       return a
   }else if(a > b){
       startingPoint = b
       endingPoint = a
   }else{
    startingPoint = a
    endingPoint = b
   }

   for(let i = startingPoint; i <= endingPoint; i++){
       totalSum += i
   }
   return totalSum

}

console.log(getSum(1,0)) //1
console.log(getSum(-1,0)) //-1
console.log(getSum(-1,2)) //2
console.log("hello")