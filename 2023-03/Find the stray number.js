//https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

//Smokin's
function stray(numbers) {
  var a = numbers.sort();
  
  if(a[0] != a[1]) {
    return a[0]
  } 
  return a[a.length-1]
}


//mine
function stray(numbers) {
  //I forgot to sort the first time doing this and got stuck on that.
  //code needed sort to have last return work as expected(where last return grabs end or aka stray num if not found at beginning)
  let numArray = numbers.sort()
  let initialArray = numArray
  let num
  let lastNum
  

  for(num of numArray){    
    console.log('num:', num)
    
    if(lastNum === num){
      console.log('if',num)
      let ret = initialArray.filter(e => e !== num)[0]
      return ret
    }
    lastNum = num
  }  
  
  //this is if 
  return initialArray.filter(e => e === initialArray[initialArray.length - 1]);
}

//tests
//[1, 1, 2] ==> 2
// console.log(stray([1, 1, 2]))
//[1, 2, 1] ==> 2
console.log(stray([1, 2, 1]))
