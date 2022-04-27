//https://www.codewars.com/kata/586538146b56991861000293/train/javascript

function to_nato(words) {

    let natoString = ''
	//loop through our string and put in military names
    for(let i = 0; i < words.length; i++){
        let char = words[i].toLowerCase()
        switch(char) {
            case "a": char = 'Alfa'; break;
            case "b": char = 'Bravo'; break;
            case "c": char = 'Charlie'; break;
            case "d": char = 'Delta'; break;
            case "e": char = 'Echo'; break;
            case "f": char = 'Foxtrot'; break;
            case "g": char = 'Golf'; break;
            case "h": char = 'Hotel'; break;
            case "i": char = 'India'; break;
            case "j": char = 'Juliett'; break;
            case "k": char = 'Kilo'; break;
            case "l": char = 'Lima'; break;
            case "m": char = 'Mike'; break;
            case "n": char = 'November'; break;
            case "o": char = 'Oscar'; break;
            case "p": char = 'Papa'; break;
            case "q": char = 'Quebec'; break;
            case "r": char = 'Romeo'; break;
            case "s": char = 'Sierra'; break;
            case "t": char = 'Tango'; break;
            case "u": char = 'Uniform'; break;
            case "v": char = 'Victor'; break;
            case "w": char = 'Whiskey'; break;
            case "x": char = 'Xray'; break;
            case "y": char = 'Yankee'; break;
            case "z": char = 'Zulu'; break;
            case " ": char = '';break;
            default: char = char; break;
         }

         //stop adding blank after final char in string
            //else if add blank after normal chars that are not blank spaces
         if(i === words.length -1){
             natoString += char
         } else if(char !== ''){ 
            natoString += char + " "
         }
         
         
    }

    return natoString
    
}
console.log(to_nato("If, you can read?"))
