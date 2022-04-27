//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str){
    strArray = []
    arrayIndex = 0
    counter = 0

    //Loop runs one short of odd char on its own. Rounds down with Math.floor
        //then hit if statement below if total str.length is not divisible by 2
    for(let arrayPos = 0; arrayPos < Math.floor(str.length/2); arrayPos++){
        strArray.push(`${str[counter]}${str[counter+1]}`)
        counter+=2

    }
    //Add _ if ended string with odd, so not a pair before adding _
    if(str.length % 2 != 0){
       //pushing last odd str[counter] value, as well as the '_' so there is a pair in the strArray Index location
        strArray.push(`${str[counter]}_`)

        console.log(`Within IF:`)
    }
    console.log(`Final Return: ${strArray}`)

    return strArray
   
}

// console.log(solution("ab"))     //['ab']
// console.log(solution("abcdf"))  //['ab', 'cd', 'f_']


//Attempt 2

function solution(str){
    let strArray = []
    let counter = 0
    //loop just through even groups that exist
    for(let i = 0; i < Math.floor(str.length/2);i++ ){
      strArray.push(`${str[counter]}${str[counter+1]}`)
      counter+=2
    }
    
   //add this array index if odd left over 
     if (str.length %2 !== 0){
       strArray.push(`${str[counter]}_`)
     }
    //console.log(strArray)
     return strArray
  }

  console.log(solution2("abcdf"))
