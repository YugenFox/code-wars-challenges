//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {
  let nums = n.toString().split("").map(Number);
  console.log(nums);
  let sumOfNums = nums;

  if(nums.length === 1){
    sumOfNums = nums.reduce((acc, currVal) => acc + currVal, 0);
    return sumOfNums
  }
  while (nums.length > 1) {
    sumOfNums = nums.reduce((acc, currVal) => acc + currVal, 0);
    console.log(sumOfNums, "preWhile");
    nums = sumOfNums.toString().split("").map(Number);
  }

  return sumOfNums;
}

//tests
console.log(digitalRoot(16), 7);
console.log(digitalRoot(456), 6);
