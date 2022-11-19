//https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

//my solution
function dup(s){
    retArray = []

    for(let i = 0; i < s.length; i++){
        // console.log(s.length, "s.length")
        //indexes
        let currentChar = ''
        let currString = s[i]
        let retString = ''
        for(let j = 0; j < s[i].length; j++){
            //char in string index
            //set last char seen in string
            if(currentChar === ''){
                console.log("current char is blank")
                currentChar = currString[j]
                console.log(currentChar, "current char")
                //add letter to return array string
                retString += currentChar
            }else if(currString[j] !== currentChar){
                console.log("not current char")
                currentChar = currString[j]
                //add letter to return array string since new char is different than old char
                retString += currentChar
            }
            
            
            //only keep one char, ignore if same in front or behind. So want last in front of group
        }
        retArray.push(retString)
    }
    return retArray
}


//tests
console.log(dub(["aabb", "bb", "cc"]), "a, b, c")
console.log(dub(["hhaappyy", "babyy", "candyy"]), "hapy baby candy")

// console.log(dub(["four"]))