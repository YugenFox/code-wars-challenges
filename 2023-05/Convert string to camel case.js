//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str) {
  let charsToSplit = ["-", "_"];
  let retString = str;
  //split in array for both char cases
  for (let char of charsToSplit) {
    console.log(retString.split(char), `in looprun: "${char}"`);

    retString = retString
      .split(char)
      .map((char, index) => {
        return index === 0 //dont .toUpperCase the first word automatically, will be capitazlized if it already was
          ? char //returns first word
          : char //returns all other words
              .split("")
              .map((char, index) => (index === 0 ? char.toUpperCase() : char))
              .join("");
      })
      .join("");
  }

  return retString;
}

//tests
// console.log(toCamelCase("The-Stealth_Warrior"), "TheStealthWarrior");
console.log(toCamelCase("the-stealth_warrior"), "theStealthWarrior");
