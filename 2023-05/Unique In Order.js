//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder = function (iterable) {
  let arr = typeof iterable === "string" ? iterable.split("") : iterable;

  return arr.filter((e, i) => e !== arr[i + 1]);
};

//tests
console.log(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"]);
console.log(uniqueInOrder("ABBCcAD"), ["A", "B", "C", "c", "A", "D"]);
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);

//another guy - used [...iterable] to convert iterable into array, if already array just returns same array as is. Kind of a short hand way to .split('') 
var uniqueInOrder2=function(iterable){
  return [...iterable].filter((a, i) => a !== iterable[i-1])
}

//did more refactoring, don't need separate variable to hold return, just return
//also not using brakcets with .filter since so small
/*
var uniqueInOrder = function (iterable) {
  let arr = typeof iterable === "string" ? iterable.split("") : iterable;

  let uniqueArr = arr.filter((e, i) => {
    return e !== arr[i + 1];
  });

  return uniqueArr;
};
*/
//old - works but don't need to use current to check, just return based on if the next value is different or not
/*
let uniqueArr = arr.filter((e, i) => {
  if(current !== arr[i + 1]){
    current = arr[i+1]
    return e
  }
})
*/
