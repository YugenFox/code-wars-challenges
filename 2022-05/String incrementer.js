//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

//By - Narsat, a502370
function incrementString2(str){
  var c = str[str.length-1];
    switch(c){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8': return str.substring(0, str.length-1) + (parseInt(c)+1);
            case '9': return incrementString2(str.substring(0, str.length-1)) + 0;
            default: return str+"1";
                }
}


//My solution
function incrementString (strng) {
    // store string portion & digits portion
    let theString = strng.replace(/[0-9]/g, '');
    console.log(`theString: ${theString}`)
    let thenum = strng.replace( /^\D+/g, ''); // replace all leading non-digits with nothing
    //if there are no nums, add "1" to strng
    if(thenum.length === 0){
        console.log(`hit undefined`)
        return `${strng}1`
    }
    //is num, ++ and keep the pre-0 if need be
    digitsLength = thenum.length
    console.log(`thenum: ${thenum} digitsLength: ${digitsLength}`)


    //change our string to number
        //if end same length as digitsLength then nothing. 
    let withoutLeading0 = parseInt(thenum, 10) + 1
    let withoutLeading0Length = `${withoutLeading0}`.length
    console.log(`no leading: ${withoutLeading0} noLeadingLength: ${withoutLeading0Length}`)


    //let test = parseInt(withoutLeading0Length) < parseInt(digitsLength)
    //console.log(test)
    if(parseInt(withoutLeading0Length) >= parseInt(digitsLength)){
        console.log('if')
        return `${theString}${withoutLeading0}`
    }else{
        console.log(`else --- theString: ${theString} withoutLeading0: ${withoutLeading0}`)
        //must be length of digitLength - append 0s to withoutLading0, then add theString before it. 
        let ret = `${withoutLeading0}`
        ret = `${theString}${ret.padStart(digitsLength, '0')}`
        return ret 
    }
  }
//   console.log(incrementString('f09'))
  console.log(incrementString('f009'))
//   console.log(incrementString('f'))//works
