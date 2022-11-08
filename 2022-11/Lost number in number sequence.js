//https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript

function findDeletedNumber(arr, mixArr) {
    // your code
    //arr whole array
    
    //mixArr - something might be missing??
    //sort
    let sortedArr = mixArr.sort((a,b) => a - b)
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== sortedArr[i]){
        return arr[i] 
      }else{
        //nothing burger
      }
      
    }
    //if no missing number found
    return 0
      
      
    }
  
  //console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [3,2,4,6,7,8,1,9]), "5")