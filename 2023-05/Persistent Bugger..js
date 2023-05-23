//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
  let nums = num.toString().split("").map(Number);
  // console.log(nums);
  let breakCount = 0;

  while (nums.length > 1) {
    breakCount++;
    nums = nums
      .reduce((acc, currVal) => acc * currVal)
      .toString()
      .split("")
      .map(Number);
    // console.log(nums, "in while");
  }
  return breakCount;
}

//test cases
console.log(persistence(39, 3));
console.log(persistence(999, 4));
console.log(persistence(4, 0));
/*
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/
