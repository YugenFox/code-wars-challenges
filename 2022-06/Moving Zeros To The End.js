//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

//codewars way that used .filter & .concat
function moveZerosCodeWars(arr) {
    let filteredList = arr.filter(num => {return num !== 0})
    let zeroList = arr.filter(num => {return num === 0})

    return filteredList.concat(zeroList)
}

console.log(moveZerosCodeWars([false,1,0,1,2,0,1,3,"a"]))


//My way
function moveZeros(arr) {
    let zeroCount = 0
    ret = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            zeroCount++
        }else{
            ret.push(arr[i])
        }
    }

    for(let i = 0; i < zeroCount; i++){
        ret.push(0)
    }

    return ret
  }

  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]

  //take array.
  //loop through array and check if element is 0
    //if not push that element to new array
    //keep track of how many zeros in array. 
        //if zeroCount > 0, push that many 0's in a loop to new array

    //return new array