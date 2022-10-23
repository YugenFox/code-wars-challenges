//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

//my code
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


// assert.strictEqual(duplicateEncode("din"),"(((");
//(duplicateEncode("recede"),"()()()");