//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

function sumMix(x){
    let nums = x.map(e => Number(e))
    return nums.reduce((prevVal, currentVal) => prevVal + currentVal, 0)
}
//arr test
console.log(sumMix([9, 3, '7', '3']), 22)