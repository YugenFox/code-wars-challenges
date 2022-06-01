//https://www.codewars.com/kata/533c46b140aafec05b000d31/train/javascript

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    var chars = this.split('');
    chars[index] = replacement;
    return chars.join('');
}

function translate(sentence) {
	//Get word array to manipulate 
    let igPayayordsWay = sentence.split(' ')
    //add pigness
    let etray = igPayayordsWay.map(word => {
       // console.log(`word[0] === word[0].toUpperCase(): ${word[0]} vs ${word[0].toUpperCase()}`)
        let hasCapital = word[0] === word[0].toUpperCase() //true false if start with capLetter
        word = word.toLowerCase()
        //my tests
        
       
        let hasVowel = word[0].includes('a') || word[0].includes('e') || word[0].includes('i') || word[0].includes('o') || word[0].includes('u') 
        let hasPunctuation = word.includes('.') || word.includes(',') || word.includes('!') || word.includes('?')
        //let totalPunctuation = word.indexOf(hasPunctuation)//only can use indexOf on literal string or char
        let puncutations = ['.',',','!','?']
        let firstPunctuation = 0
        for(let i = 0; i < puncutations.length; i++){
            if(word.indexOf(puncutations[i]) !== -1){
                firstPunctuation = word.indexOf(puncutations[i])
            }
        }
        let totalPunctuation = word.length - firstPunctuation
        console.log(`IndexOfPuncs: ${firstPunctuation} totalPunctuation: ${totalPunctuation}`)

        //has Vowel & firstVowel in string
        let vowels = ['a','e','i','o','u']
        //let vowelsFound = []
        let firstVowel 
        let firstVowelFound = false
        for(let i = 0; i < word.length; i++){
            let char = word[i]
            for(let vArray = 0; vArray < vowels.length; vArray++){
                if(char === vowels[vArray]){
                    firstVowel = i
                   // console.log(`firstVowel: ${firstVowel} i: ${i}`)
                    firstVowelFound = true
                    break;
                }
                if(firstVowelFound){
                    break;
                }
            }
            if(firstVowelFound){
                break;
            }
        }
        // for(let i = 0; i < vowels.length; i++){
        //     console.log(`vowels[i]: ${vowels[i]}`)
        //     if(word.indexOf(vowels[i]) !== -1){
        //         vowelsFound.push(word.indexOf(vowels[i]))
        //         console.log(`vowelsFound: ${vowelsFound} i: ${i}`)
                
        //     }
        // }
        console.log(`firstVowelTOP: ${firstVowel}`)


        //vowel or not
        /*
        true    true
        false   true
        true    false
        false   false
        */
        //has vowel and punctuation
        console.log(`hasVowel: ${hasVowel} hasPunctuation: ${hasPunctuation} hasCapital: ${hasCapital} firstVowel: ${firstVowel}`)

        if(hasVowel){//as first letter
            if(hasCapital){//cap first letter since vowel === true
                //word[0] = word[0].toUpperCase() // this does nothing

                word = word.replaceAt(0, word[0].toUpperCase())
                console.log(`Vowel and capital:  ${word[0]}`)
            }
            //hasVowel - keep first letter where is and add "ay" to end. 
                //keep punc at end too
            if(hasPunctuation){
                        //Alien!
                        //Alien + ay + !
                return `${word.slice(0,word.length-totalPunctuation)}way${word.slice(-totalPunctuation)}`
            }else{
                        //Alien
                        //Alien + ay
                return `${word}way`
            }
            
        }
            //have to work on below when back
            // firstVowel -= 1
        if(!hasVowel){
            if(hasCapital){//cap first letter since vowel === true
                //word[1] = word[1].toUpperCase() // this does nothing
                // if(firstVowel === 0 || firstVowel === 1){
                //     firstVowel += 1
                // }

                word = word.replaceAt(firstVowel, word[firstVowel].toUpperCase())
                console.log(`NO vowel and capital:  ${word[firstVowel]}`)
            }
            //hasVowel - keep first letter where is and add "ay" to end. 
                //keep punc at end too
            if(hasPunctuation){
                //Farmer!
                //Armer + f + ay + !
                //
                `${word.slice(1)}${word.slice(0,1)}ay `
                if(firstVowel === 1 || firstVowel === 0){
                    return `${word.slice(firstVowel,word.length - totalPunctuation)}${word.slice(0,firstVowel)}ay${word.slice(-totalPunctuation)}`
                }else{
                    console.log(`word: ${word}`)
                    return `${word.slice(firstVowel, -totalPunctuation)}${word.slice(0,firstVowel)}ay${word.slice(-totalPunctuation)}`
                }
                
            }else{
                if(firstVowel === 1 || firstVowel === 0){
                    // if(firstVowel === 0 || firstVowel === 1){
                    //     firstVowel += 1
                    // }
                    return `${word.slice(firstVowel)}${word.slice(0, firstVowel)}ay`
                }else{
                    return `${word.slice(firstVowel)}${word.slice(0, firstVowel)}ay`
                }
                
            }
        }

        /*
        //ends with punctuation or not

        //has punctuation in word and length is only 1
        if(word.length === 1 && (word.includes('.') || word.includes(',') || word.includes('!') || word.includes('?') )){
            return  `${word}`
        }else if(word.length > 1 && (word.includes('.') || word.includes(',') || word.includes('!') || word.includes('?') )){
            return 0//find punc and put at end of word
        }
        else{//No punctuation in word - maybe remove this since do above in vowel or not
            return  `${word.slice(1)}${word[0]}ay `//move first letter to end, then add "ay"
        }
        */
    }).join(' ')

    console.log(etray)
    return etray
};

// translate("Algorithm")
// translate("Farmer!")
// translate("Farmer")

console.log(translate("Hello World!!"))
console.log(translate("eat!"))

// console.log(translate("Please!!"))
// console.log(translate("Please"))
// console.log(translate("please"))
//                     //easepl ay
//                     //aseple + ay
 //console.log(translate("hello"))
//console.log(translate("Pizza?"))

//console.log(translate("worldd!"))



//"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
//If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.
    // "algorithm" => "algorithmway"

//****************************************************************************** */


//My simple Pig Latin code - other project
function pigIt2(str){
    //Get word array to manipulate 
    let igPayayordsWay = str.split(' ')
    //add pigness
    let etray = igPayayordsWay.map(word => {

        //has punctuation in word
        if(word.includes('.') || word.includes(',') || word.includes('!') || word.includes('?') ){
            return  `${word}`
        }else{//No punctuation in word
            return  `${word.slice(1)}${word.slice(0,1)}ay `//move first letter to end, then add "ay"
        }
    }).join('')

    console.log(etray)
    //return ret
  }
  //pigIt2("The man !")
  //pigIt2("Hello test2 !")