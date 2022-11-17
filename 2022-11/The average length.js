//https://www.codewars.com/kata/5a430359e1ce0e35540000b1/train/javascript

//GilSolis solution
function averageLength(arr){
    let num = Math.round(arr.reduce((acc, cv) => acc + cv.length, 0) / arr.length )
  
    return arr.map(element => element[0].repeat(num))
}

//TehOrange solution
function averageLength(arr) {
    const c = Math.round(arr.join('').length/arr.length)
    return arr.map(e=>e[0].repeat(c))
}

//my solution
function averageLength(arr) { 
    ///new array that takes arr indexes and turns them into numbers based on index length
    const numMap = arr.map(e => e.length)
    
    //reduce numMap array to find total indexes string length
    const sumTotalLength = numMap.reduce(
      (prevVal, curVal) => prevVal + curVal, 0
    )
    
    /// divide that number by arr.length to find avgLength
    const avgLength = Math.round(sumTotalLength / numMap.length)

    //rewrite OG array to have each index with the same amount of chars as avgLength
    const avgLengthReturn = arr.map(e => e[0].repeat(avgLength))

    return avgLengthReturn
}

//test
console.log(averageLength(['u', 'y']), ['u', 'y']) 
console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc']) 

//not refactored
/*
function averageLength(arr) { 
    ///make arr changing strings to numbers based on string length
    const numMap = arr.map(e => e.length)
    console.log(numMap, "NumMap")
    
    //reduce that array to find total
    const sumTotalLength = numMap.reduce(
      (prevVal, curVal) => prevVal + curVal, 0
    )
    console.log(sumTotalLength, "sumTotal")
    
    /// divide that number by arr.length
    const avgLength = Math.round(sumTotalLength / numMap.length)

    //rewrite OG array to have each index with the same amount of chars as avgLength
    const avgLengthReturn = arr.map(e => e[0].repeat(avgLength))

    return avgLengthReturn
}
*/