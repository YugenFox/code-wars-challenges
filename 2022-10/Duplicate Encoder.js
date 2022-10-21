//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

function duplicateEncode(word){

    return word.toLowerCase().split("").map((e, i, arr) => {
        if(arr.indexOf(e) === arr.lastIndexOf(e)){
            return "("
        }else{
            return ")"
        }
    }
    ).join("")
}


// word.map(e => {
//     if(word.indexOf(e) === word.lastIndexOf(e)){
//         return "("
//     }else{
//         return ")"
//     }
// }

// assert.strictEqual(duplicateEncode("din"),"(((");
//(duplicateEncode("recede"),"()()()");