//https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

function stray(numbers) {
    //no funny biz on inputs, always whole number. 
    //arr of numbers - all same except one of them.
    
    //go through array, if num has been seen before add to seenNum
    let seenNum = []
    let strayNum 
    let sameNum 

    for(let i = 0; i < numbers.length; i++){
        //once found same repeating num
        if(seenNum.includes(i) && sameNum === undefined){
            //just reoccuring num
            sameNum = i
        }

        //know the same num, so if current i is differnt then return that
        if(sameNum && i !== sameNum){
            strayNum = i
            return strayNum
        }else{
            //return first i, believe that pattern works
        }
        seenNum.push(i)

    }


    //return the outlier number from array
    // return 0;
}

//test cases

console.log(stray([1,3,1]), "3")
console.log(stray([7,7,7,5]), "5")
console.log(stray([9,8,8,8]), "9")