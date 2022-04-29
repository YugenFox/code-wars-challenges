//https://www.codewars.com/kata/52223df9e8f98c7aa7000062/javascript

//Attempt 2 - using more shorthand & regex
function rot13(str) {
    return str.replace(/[a-z]/ig, function(x){
        return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13))
    })
}

console.log(rot13('z'))
/* //Attempt 1
function rot13(str) {
  let offsetBy = 13;
  let newCharNum = 0;
  let unscrambledString = "";
  for (let i = 0; i < str.length; i++) {
      console.log(str.charCodeAt(i))
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) { //A-Z
        
      if(str.charCodeAt(i) +13 > 90){
          newCharNum = 64 + (offsetBy - ( 90 - str.charCodeAt(i) ))
          console.log(`newCharNum: ${newCharNum} && str.charCodeAt(i):${str.charCodeAt(i)}`)
          //89 + 13. 0+12 = 12
          //90-89 = 13-1 = 12
          //. offsetBy - ( EndUpper-string.charCodeAt(i) ) = 12
            //newChar  
            unscrambledString += String.fromCharCode(newCharNum);
      }else{
        newCharNum = str.charCodeAt(i) + offsetBy
        unscrambledString += String.fromCharCode(newCharNum);
      }
        

    } else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
        console.log(`in little alphabet`)
         //a-z
         if(str.charCodeAt(i) +13 > 122){
             
            newCharNum = 96 + (offsetBy - ( 122 - str.charCodeAt(i) ))
            console.log(`97 plus 13 newCharNum: ${newCharNum}`)
            //89 + 13. 0+12 = 12
            //90-89 = 13-1 = 12
            //. offsetBy - ( EndUpper-string.charCodeAt(i) ) = 12
              //newChar  
              unscrambledString += String.fromCharCode(newCharNum);
        }else{
          newCharNum = str.charCodeAt(i) + offsetBy
          unscrambledString += String.fromCharCode(newCharNum);
        }
    }
    else {
      //should just be spaces, nums and punctuation
      unscrambledString += str[i];
    }
  }
  return unscrambledString;
}
//"ROT13 example."
console.log(rot13('EBG13 rknzcyr.'))
//console.log(rot13('ebg13 rknzcyr.'))
//console.log(rot13('z'))
//console.log(rot13('Grfg'))
//console.log(rot13('T'))

*/


















//old reference code
function solution(string) {
  let spaced_Camels = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      spaced_Camels += " " + string[i];
    } else {
      spaced_Camels += string[i];
    }
  }
  return spaced_Camels;
}
