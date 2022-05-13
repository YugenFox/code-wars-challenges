//https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

//Ard way - cleaner
function generateHashtagArdWay (str) {
    str = "#"+ str.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("")
    return str.length >= 2 && str.length <= 140 ? str : false 
}
/*
split is saying start at this index and keep the rest. So Kaleb
s.charAt(0) = K 
s.slice(1) = aleb
*/


//My way - it worked
function generateHashtag (str) {
    str = str.trim()
    addedHashtag = false //will make true if not empty
    newWord = false
    ret = ''
    
        for(let i = 0; i< str.length; i++){
            //add starting #
            if(addedHashtag === false && str[i] !== ' '){
                ret += `#`
                addedHashtag = true
            }
            //make capital for new word and avoid spaces being added
            //"   x  y" => "#XY"
            //found word
            if(newWord === false && str[i] !== " "){
                newWord = true
                ret += str[i].toUpperCase()
            }else if(str[i] !== " "){
                ret += str[i]
            }else if(newWord === true && str[i] === " "){
                newWord = false
            }

        }
       

    if(ret.length <= 140){
        if (addedHashtag === false){//only had empty string
            return false
        } else{
            return ret
        }
    }else{//over 140
        console.log(`FAIL retLength: ${ret.length}`)
        return false
    }
    

}
// console.log(generateHashtag("    Hello     World   "))
console.log(generateHashtag(" code                                                                                                                                            wars "))
console.log(generateHashtag("Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))


/*
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

//get rid of spaces askii
//.toUpperCase() each word after a space/very start
    //start with hashtag after removing all spaces, next word toUpperCase()

//longer than 140 chars RETURN FALSE
//if str is empty or only spaces RETURN FALSE
    //have empty string = true. Change to false after adding # before first letter/word


    //have to change the fail to after I make the str
/*
function generateHashtag (str) {
    str = str.trim()
    addedHashtag = false //will make true if not empty
    newWord = false
    ret = ''
    if(str.length < 139){
        for(let i = 0; i< str.length; i++){
            // console.log(str[i])
            //add starting #
            if(addedHashtag === false && str[i] !== ' '){
                ret += `#`
                addedHashtag = true
            }
            //make capital for new word and avoid spaces being added
            //"   x  y" => "#XY"
            //found word
            if(newWord === false && str[i] !== " "){
                newWord = true
                ret += str[i].toUpperCase()
            }else if(str[i] !== " "){
                ret += str[i]
            }else if(newWord === true && str[i] === " "){
                newWord = false
            }

        }
        if (addedHashtag === false){//only had empty string
            console.log(`This is the empty ret: ${str} `)
            return false
        } else{
            return ret
        }

    }else{//over 140
        return false
    }
    

}
*/