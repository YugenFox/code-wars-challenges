//FizzBuzz with any number pair


function reverseFizzBuzz(array, num1, num2) {
    //ret array

    let ret = []
      //inputs m,n //sort m to be smallest and n to be largest
    let m = Math.min(num1,num2)
    let n = Math.max(num1,num2)
    //loop through array
      //if (i % (n * m))
        //clg FizzBuzz
      //if [i] % m
        //clg Buzz
      //if [i] % n 
        //clg Fizz
    for(i= 0; i<array.length; i++){
      console.log(array[i])
      if(array[i] % (n*m) ===0){
        ret.push("FizzBuzz")
      }else if(array[i] % m===0){
        ret.push("Buzz")
      }else if(array[i] % n===0){
        ret.push("Fizz")
      }else{
        ret.push(array[i])
      }
    }
    
    return ret
      
  };

  let arr = [1,2,3,4,5,6,12]
  let m = 2
  let n = 6
  console.log(reverseFizzBuzz(arr,m,n))