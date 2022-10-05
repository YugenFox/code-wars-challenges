//https://www.codewars.com/kata/58aed2cafab8faca1d000e20/train/javascript

let a = [1,2,3]
let n = 3
//answer 30
function modifiedSum(a, n) {
    originalArraySum = a.reduce((accumulator, value) => {
      return accumulator + value
    }, 0)
    
    nthPowerArray = a.map(e => Math.pow(e, n))
    
    nthPowerArraySum = nthPowerArray.reduce((accumulator, value) => {
      return accumulator + value
    }, 0)
    
    return nthPowerArraySum - originalArraySum
}
  console.log(modifiedSum(a, n))
