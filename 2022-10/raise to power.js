//https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript

let number = 10
let power = 3
//4

function numberToPower(number, power){
    if(power === 0){
        return 1
    }
    let num = number
    for(let i = 1; i<power; i++){
        num *= number
        console.log(num)

    }
    
    return num
}

console.log(numberToPower(number, power))