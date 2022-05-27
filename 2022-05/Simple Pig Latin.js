//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

//Mine
/* could have used map better, really treated it as forEach loop.
    //the ret += in the fun I could have made returns.
        //then after map done .join(' ') to add spaced betweeen the elements, but make them one string.
        --essentially did not need to even map ret, just use etray
     */
function pigIt(str){
    //Get word array to manipulate 
    let igPayayordsWay = str.split(' ')
    //let puncuation = [".",",","!","?"]
    let ret = ''
    //add pigness
    let etray = igPayayordsWay.map(word => {

        //has punctuation in word
        if(word.includes('.') || word.includes(',') || word.includes('!') || word.includes('?') ){
            ret += `${word}`
        }else{//No punctuation in word
            ret += `${word.slice(1)}${word.slice(0,1)}ay `//move first letter to end, then add "ay"
        }
    })

    console.log(ret)
    return ret
  }

  var words = ['hi', 'howdy', '!'];
  var puncs = ['!', '']
  var str = "hello."
  var value = new RegExp(puncs.join('|')).test(str); //never worked out with its true/false returns making sense. Used word.included in func instead. 
  console.log(value)
  pigIt('Hello !')
    //pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    //pigIt('Hello world !');     // elloHay orldway !

    //don't change puncuation positioning
    //don't lowercase capital letter or vice versa

    /*
    Pig boy!
    //move first letter to end
    //add "ay" to end of each word

    igPay oybay 
    */