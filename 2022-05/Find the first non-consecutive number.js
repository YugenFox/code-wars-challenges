//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonConsecutive (arr) {

    for(let i = 1; i<arr.length; i++){
        if((arr[i-1] +1) !== arr[i]){
            console.log(`return nonConsecutive ${arr[i]}`)
            return arr[i]
        }
        if(i === arr.length -1){
            console.log(`all consecutive`)
            return null
        }
    }
}

let test1 = [1,2,3,4,6,7,8]
let test2 = [1,2,3,4,5,6,7,8]
console.log(firstNonConsecutive(test2))
