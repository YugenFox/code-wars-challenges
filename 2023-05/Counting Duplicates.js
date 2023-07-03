//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text){
  let counts = {}
  //counts total occurrence of each char (makes all values lowercase for counting)
  for (letter in text){
    let char = text[letter].toLowerCase()
    counts[char] = (counts[char] || 0) + 1
  }
  console.log(counts, "counts")

  //Makes an array of just keys whos value was >= 2 --i.e duplicate
  let duplicates = Object.keys(counts)
    .filter((letter) => counts[letter] >= 2)
    
  console.log(duplicates, "dups")
  return duplicates.length
}

//tests
// console.log(duplicateCount("abcde"), 0)
// console.log(duplicateCount("aabbcde"), 2)
console.log(duplicateCount("aabBcde"), 2)