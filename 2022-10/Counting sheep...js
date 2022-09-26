//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

//my code test
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    totalSheep = 0
    for(let i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] === true){
        totalSheep++;  
      }
      
    }
    
    return totalSheep
  }