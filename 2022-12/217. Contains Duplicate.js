//https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    //object to hashmap new entries found
    let numsArray = {}

    for(let i = 0; i <= nums.length; i++){
        //if current index in nums array loop has been seen
            //true
        if(numsArray[nums[i]]){
            return true //found a duplicate since above number in loop exist in object from prior loop
        }
        //else
            //add that i value to the hashmap with the value = true
        else{
            numsArray[nums[i]] = true
        }
    }
    //the loop is over, no duplicate was found
        //return false
    return false
    
};

//tests
nums =
[1,2,3,1]
nums =
[1,2]
nums =
[1,1]