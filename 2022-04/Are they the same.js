//https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
/*
//Valid
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

//NonValid
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
*/
let c = [2,8]
let d = [4,64]

function comp(a,b){

  try{
    var a1 = a.map(x => x*x).sort()
    b.sort
  } catch(err) {return false}

  return (a1.toString() == b.toString() ? true: false)
}




/*
//failed old attempt
function comp(array1, array2){
    //your code here
    //return array2.some(i => Math.pow(i, 1/2) === array1.forEach(i))
    //run through array 2 then test all els in array
    //let falsePairCount = 0
    let truePairCount = 0
    for(let i = 0; i < array2.length; i++){
      for(let ii = 0; ii < array1.length; ii++){
       // console.log(`arr2[i]: ${array2[i]} vs Math.pow(array1[ii]): ${Math.pow(array1[ii])}` )
        console.log(`arr2[i]: ${array2[i]} vs array1[ii]: ${array1[ii]}` )
        console.log(`arr2[i]: ${array2[i]} vs Math.pow(array1[ii],2): ${Math.pow(array1[ii], 2)}` )


        if(array2[i] === Math.pow(array1[ii], 2)){
          console.log(`IN IF: arr2[i]: ${array2[i]} vs Math.pow(array1[ii]): ${Math.pow(array1[ii],2)}` )
          truePairCount++
        }
      }
    }

    console.log(`True Pair ${truePairCount} vs arr2.length: ${array2.length-1}` )
    if(truePairCount === array2.length){
      return true
    }else{
      return false
    }

    
  }

  
  //console.log(comp(a, b))
  console.log(comp(c, d))

*/
