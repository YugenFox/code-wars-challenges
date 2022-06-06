//https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript

//well BigInt is apparently a default impbedded function that just works. 
function multiply(a, b) {return (BigInt(a) * BigInt(b)).toString()}

//old main function
function multiply1(a, b)
{
    //multiply a and b with long division loop
    /*
        001
          3
          3

        003
          5
        
          (5*3) = 15 -- if .length > 1; take first num and += next num
          
    */
}


//multiply two numbers and return as string, without leading zeros
    //a, b are strings
    //don't loop since very large numbers will be passed
    //answer should be a string

console.log(multiply('1020303004875647366210 ', '2774537626200857473632627613'))


/* Won't work with large numbers
//changes scientific notation to regular notation
function numberToString(num)
{
    let numStr = String(num);

    if (Math.abs(num) < 1.0)
    {
        let e = parseInt(num.toString().split('e-')[1]);
        if (e)
        {
            let negative = num < 0;
            if (negative) num *= -1
            num *= Math.pow(10, e - 1);
            numStr = '0.' + (new Array(e)).join('0') + num.toString().substring(2);
            if (negative) numStr = "-" + numStr;
        }
    }
    else
    {
        let e = parseInt(num.toString().split('+')[1]);
        if (e > 20)
        {
            e -= 20;
            num /= Math.pow(10, e);
            numStr = num.toString() + (new Array(e + 1)).join('0');
        }
    }

    return numStr;
}
*/

//old main 

    // let x = numberToString(parseFloat(a))
    // let y = numberToString(parseFloat(b))

    // console.log(`a: ${a} b: ${b}`)
    // console.log(`x: ${x} y: ${y}`)
    // console.log(`ret: ${numberToString(numberToString(x) * numberToString(y))}`)
    // return `${numberToString(numberToString(x) * numberToString(y))}`