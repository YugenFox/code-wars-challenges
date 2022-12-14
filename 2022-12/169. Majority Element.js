//https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let numObj = {}

    for(let i= 0; i < nums.length; i++){
        let num = nums[i]

        //add count to value stored in object, if doesnt exist yet make value be 1
        numObj[num] = numObj[num] +1 || 1

        //if that value stored in obj property is > n/2, then that is the answer
        if(numObj[num] > nums.length/2){
            return num
        }
    }
    
};

//Testcase
nums =
[3,2,3]
// Output
// 3
// Expected
// 3
