//https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise

    //test if is sq by comparing to parseInt value. Fail = return -1
    if( Math.pow(sq, 1/2) !== parseInt(Math.pow(sq, 1/2)) ){
        return -1 
    }
    
    //find next sq since above test did not hit
    let nextSq = Math.pow(sq, 1/2) + 1
    nextSq = Math.pow(nextSq,2)
    return nextSq

  }

  console.log(findNextSquare(2)) //-1
  console.log(findNextSquare(4)) //9
  console.log(findNextSquare(5)) //-1

//Attempt 2

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if(Math.pow(sq, 1/2) !== parseInt(Math.pow(sq, 1/2)) ){
        return -1 
    }

    let nextSq = Math.pow(sq, 1/2) + 1
    nextSq = Math.pow(nextSq, 2)
    
    return nextSq
  }

  