//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  let counts = {};
  //counts the total occurances of each num in array, puts in object
  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    counts[num] = (counts[num] || 0) + 1;
  }
  console.log(counts);
  let oddCounts = Object.keys(counts) 
    .filter((num) => counts[num] % 2 === 1)
    .map((num) => parseInt(num));

  //This kata only has one odd int to find, so return only item in oddCounts array
  console.log(oddCounts[0]);

  return oddCounts[0];
}

//tests
console.log(findOdd([0, 1, 0, 1, 0]), 0);
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]), 4);
