//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN (pin) {
    let attempt = pin.toString()
    
    

    //check false length
    if(attempt.length !== 4 && attempt.length !== 6){
        return false
    }
    //check false not numbers only
    //if they don't put in a digit and instead type in -12345, it would pass the 4/6 .length test, but still be wrong since not all characters are digits -- hence test below
    // if(parseInt(attempt) < 0 || attempt.includes('.') || attempt.includes(' ')){
    //     return false
    // }
    //let isNum = /^\d+$/.test(attempt)
    if(attempt.match(/^[0-9]+$/) == null){
        return false
    }

    if(attempt == parseInt(attempt)){
        console.log(`no parse ${attempt}- ${attempt.length} With Parse ${parseInt(attempt)} - ${parseInt(attempt.length)}`)//for some reason the parseInt.length is always the same as original attempt.length, even though it outputs NAN when parseInt() a character string....
        return true
    }else{
        return false //since the lengths don't match after parseInt()
    }
  }

  console.log(validatePIN("-12345"))
  console.log(validatePIN("67447."))

//   console.log(validatePIN("1234"))
//   console.log(validatePIN("12345"))
//   console.log(validatePIN("a23455"))



