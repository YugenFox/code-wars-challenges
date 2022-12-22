//https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
//15

function twoSum(arr, sum){
    let numObj = {}
    let pairs = []
    //Loop through all the arr and add to obj
    for(const num of arr){
        numObj[num] = 1
    }
    console.log(numObj)
    //then loop through arr and find if there is another num that could add to be the sum desired
    for(const num1 of arr){
        let num2 = sum - num1
        //if num2 exists in numbObj, .push num1 & num2 to pairs
        if(numObj[num2]){
            pairs.push([num1, num2])
        }
    }
    console.log(pairs)
    return pairs
}

//tests
console.log(twoSum([1, 2, 2, 3, 4], 4), 'result: [[2, 2], [3, 1]]')