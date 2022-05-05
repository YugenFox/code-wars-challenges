//https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

function vowelIndices(word){
    let letter = word.split('')
    let vowelIndexesArray = []
    for(i = 0; i< letter.length; i++){
        let test = letter[i].toLowerCase()
        if(test == 'a' || test == 'e' || test == 'i' || test == 'o' || test == 'u' || test == 'y'){
            vowelIndexesArray.push(i + 1) //this is our index of a vowel we'll add to array
        }
    }

    return vowelIndexesArray
  }

  console.log(vowelIndices('Mmm')) 
  console.log(vowelIndices('amm')) 
  console.log(vowelIndices('mam')) 
