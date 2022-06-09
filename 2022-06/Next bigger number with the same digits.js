//https://www.codewars.com/kata/next-bigger-number-with-the-same-digits

//code wars answer by W_2004
/*keep adding 9 to the number since the difference between any two numbers with the same digits is always divisible by 9*/

function nextBigger(n){
    var n2 = n
    if (parseInt(n2.toString().split('').sort().reverse().join(''))===n) return -1
    while (true){
      n2+=9
      if (n2.toString().split('').sort().join('')===n.toString().split('').sort().join('')) return n2 }}


/*
function nextBiggerMine(n){

}
//take n
//find next positive num with same digits
    //loop through next digits
        //if length !== n.length then return -1
*/





//*******       Sum of pairs -closest pairs to be 2nd Index.js
/*
//https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

//Code wars 
function sum_pairs(ints, s) {
    let seen = new Set();
    for (let i of ints) {
      if (seen.has(s - i)) return [s - i, i];
      seen.add(i);
    }
  }
  //goes through and sees if s(goal number) - i has been seen before in the list
    //if it has then that old seen is the first num + i(current num) that would equal s
    //essentially earliest pairing from left to right that can be found. 
    

//Mine - would time out
function getMinMaxOf2DIndex (arr, idx) {
    return {
        min: Math.min.apply(null, arr.map(function (e) { return e[idx]})),
        max: Math.max.apply(null, arr.map(function (e) { return e[idx]}))
    }
} 
function sumPairs(ints, s) {

  //return [0, 0] || undefined ; undefined is no pair
  let startingIndex = 0;
  let pairFound = false
  let pairArray = [] //[[3,7, i - startingIndex] ] 
  let endingTest = ints.length

  //console.log(`ints.length: ${ints.length-1}`)
  for (let loop = 0; loop < endingTest; loop++) {
    for (let i = startingIndex + 1; i < endingTest; i++) {
        //console.log(`startingIndex: ${startingIndex} i: ${i}`)
        if(ints[startingIndex] + ints[i] === s && i < endingTest){
            console.log(`returns: ${[ints[startingIndex], ints[i]]} = s: ${s}`)
            pairArray.push([ints[startingIndex], ints[i], i - startingIndex])//where store right answer sort through to find lowest spacing difference
            pairFound = true
            if(i < endingTest){
                endingTest = i
            }
            
        }
        //**if fine last index earlier than we did before do another loop until that point 
    }
    startingIndex++
  }
  //else no pair found
  if(pairFound === false){
    console.log(`undefined ret: undefined = s: ${s}`)
  return undefined
  }else{
    let lowestSpacing = getMinMaxOf2DIndex(pairArray, 2) //min only shows NaN for some reason
    console.log(`pairArray: ${JSON.stringify(pairArray)}`)//JSON.stringify shows it in [[],[]] form instead of all the elements just lited withought [](so you would not know where one array starts/ends)
    console.log(`lowestSpacing: ${lowestSpacing.min} pairArray.filter: ${pairArray.filter(e => e[2] === 1)}`)
    let ret =  pairArray.filter(e => e[2] === lowestSpacing.min)
    console.log(`ret: ${ret} ret[0][1]: ${ret[0][0]} ret[0][1]: ${ret[0][1]}`)
    return [ret[0][0], ret[0][1]]
  }
  
  
}

//console.log(sumPairs([11, 3, 7, 5], 10))
//console.log(sumPairs([4, -2, 3, 3, 4], 8))
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10))



//sumPairs([11, 3, 7, 5], 10);
//#             ^--^      3 + 7 = 10


//[10, 5, 2, 3, 7, 5], 10
 //    1           5 --- [5,5,(5-1 = 4)]
 //          3  4    --- [3,7,(4-3 = 1)]
pairArray = [[5,5, 4], [3,7, 1]]

console.log(getMinMaxOf2DIndex(pairArray, 2))
*/