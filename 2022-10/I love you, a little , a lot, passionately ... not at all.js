//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

function howMuchILoveYou(nbPetals) {
    // your code
  let answer = 1
  
  for(let i = 1; i < nbPetals; i++){
    answer ++
    
    if(answer === 7){
      answer = 1
    }
  }
  
  switch(answer){
      case 1:
        answer = "I love you"
        break;
      case 2:
        answer = "a little"
        break;
      case 3: 
        answer = "a lot"
        break;
      case 4: 
        answer = "passionately"
        break;
      case 5: 
        answer = "madly"
        break;
      case 6: 
        answer = "not at all"
        break;
  }
  
  return answer
}
