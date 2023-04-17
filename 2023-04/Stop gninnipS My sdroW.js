//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

//mine
function spinWords(string) {
  let splitArr = string.split(" ");
  let spunArr = splitArr.map((word) => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    }
    return word;
  });

  return spunArr.join(" ");
}

//uses ternary instead of my if
function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

//tests
console.log(spinWords("Hey fellow warriors"), "--Hey wollef sroirraw");
