//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

//LESSONS LEARNED
/*
.sort() will change the order of the array whenever used. To make a copy, use .slice.sort(<do stuff>)

also, can use .sort(<stuff>)[1] as example to set something to that sorted arr with index of 1
*/

function gimme (triplet) {
    //take arr of 3 indexes
    //return the index that is the middle of the other two

    //sort arr in ascending order, find value of index 1
    let middleValue = triplet.slice().sort((a, b) => a - b)[1];
    console.log(middleValue[1], "midVal")
    //find where middle value appeared in original arr indexes
    console.log(triplet,"triplet")
    let midIndex = triplet.findIndex((e) => e === middleValue)
    console.log(midIndex, "midIndex")

    return midIndex
}

//test cases
// console.log(gimme([3,7,10]), 1) //7
console.log(gimme([2,5,1]), 0) //2

//cleaner - no clgs

function gimme (triplet) {
    //take arr of 3 indexes
    //return the index that is the middle of the other two

    //sort arr in ascending order, find value of index 1
      //use.slice to not affect original triplet array with .sort()
    let middleValue = triplet.slice().sort((a, b) => a - b)[1];
  
    //find where middle value appeared in original arr indexes
 
    let midIndex = triplet.findIndex((e) => e === middleValue)

    return midIndex
}