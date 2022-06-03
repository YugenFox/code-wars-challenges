function countArara(n) {
    //ret is my final return value
    let ret = ''

    //odd is anane
    //even is adak
    let evenTotal = 0

    //find total number of evens
    evenTotal = Math.floor(n/2)

    //add adak to return value, in accordance to the evenTotal
    for(let i = 0; i < evenTotal; i++){
        ret += 'adak '
    }

    //does it end with Odd?
    if(n % 2 !== 0){
        ret += 'anane'
    }

    return ret.trimEnd() //get rid of any extra whitespace at the end of the string
}