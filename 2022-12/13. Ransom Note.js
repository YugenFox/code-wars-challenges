//https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
//13

function ransomNote(note, magazine){
    let noteWords = note.split(' ')
    // console.log(noteWords)
    let magazineWords = magazine.split(' ')
    // console.log(magazineWords)

    let magObj = {}
    //add up count of words in magazine and store in object
    for(const word of magazineWords){
        magObj[word] = magObj[word] + 1 || 1
    }
    // console.log(magObj)
    
    //decriment the magObj words when found in noteWords, if not found then return false, otherwise return true after loop finishes
    for(const word of noteWords){
        if(magObj[word] > 0){
            magObj[word]--
        }else{//value not in magObj, or count already decreminted
            return false
        }
    }
    return true

}

//magazine 
// const magazine = "Happy days I am here you will I am your father"

//my tests
// console.log(ransomNote("I am here", magazine), "true")
// console.log(ransomNote("I I", magazine), "true")
// console.log(ransomNote("I I I", magazine), "false")

//other tests from site
const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

console.log(ransomNote("sit ad est sint", magazine), true)
console.log(ransomNote("sit ad est love", magazine), false)
console.log(ransomNote("sit ad est sint in in", magazine), true)
console.log(ransomNote("sit ad est sint in in in in", magazine), false)

