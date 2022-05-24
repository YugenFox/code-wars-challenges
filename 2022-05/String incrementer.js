//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript


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
