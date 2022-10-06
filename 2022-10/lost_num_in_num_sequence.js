//https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript

function findDeletedNumber(arr, mixArr) {
    let sortedMixArr = mixArr.sort(function (a,b) { return a - b; })
    
    for(let i = 0; i<arr.length; i++){
      if (arr[i] !== sortedMixArr[i]){
        //found number missing/deleted from mixArr
        return arr[i]
      }
    }
    //no deletion found
    return 0
  }