//https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

function topThreeWords(text) {
  // Split up text into an array whose elements are separated by anything that is not a-z A-Z or an apostrophe '
  const delimiters = /[^a-zA-Z']+/g;
  const words = text.split(delimiters);

  let counts = {};
  // Count the total occurrence of each word (make all values lowercase for counting)
  for (let word of words) {
    // Only consider words containing at least one alphabet character and not only apostrophes
    if (word.match(/[a-zA-Z]/) && word !== "'") {
      let lowerCaseWord = word.toLowerCase().trim();
      counts[lowerCaseWord] = (counts[lowerCaseWord] || 0) + 1;
    }
  }
  console.log(JSON.stringify(counts), "counts");

  // Sort the counts object in descending order based on the values paired to each key
  const descendingCounts = Object.fromEntries(
    Object.entries(counts).sort((a, b) => {
      if (b[1] === a[1]) {
        // If word appearances are equal, compare the words in ASCII order
        return a[0].localeCompare(b[0]);
      }
      return b[1] - a[1];
    })
  );
  console.log(JSON.stringify(descendingCounts), "descending counts obj");

  // Return an array of topThreeWords, less if < 3 unique words, [] if there are no words
  const keys = Object.keys(descendingCounts);
  const totalKeys = keys.length;
  const topThreeWords = [];
  for (let i = 0; i < Math.min(totalKeys, 3); i++) {
    topThreeWords.push(keys[i]);
  }

  return topThreeWords;
}

//test cases
console.log(topThreeWords("a a b b c c d e f"), ["a", "b", "c"]);

//Node v8.1.3 compatible, mainly the use of Object.fromEntries was not recognized Object.entries seems fine and was used
//--What I had to submit to codewars for it to work

/*
function topThreeWords(text) {
  //split up text into array whose elements are separated by anything that is not a-z A-Z or an apostrophe '
  const delimiters = /[^a-zA-Z']+/g;
  const words = text.split(delimiters);

  let counts = {};
  //counts total occurrence of each word (makes all values lowercase for counting)
  for (let word of words) {
    // Only consider words containing at least one alphabet character and not only apostrophes, exclude blanks or only apostrophes without text touching
    if (word.match(/[a-zA-Z]/) && word !== "'") {
      let lowerCaseWord = word.toLowerCase().trim();
      counts[lowerCaseWord] = (counts[lowerCaseWord] || 0) + 1;
    }
  }
  console.log(JSON.stringify(counts), "counts");

  //Sort our counts object in descending order based on the values paired to each key
  const descendingCounts = Object.entries(counts)
    .sort((a, b) => {
      if (b[1] === a[1]) {
        // If word appearances are equal, compare the words in ASCII order
        return a[0].localeCompare(b[0]);
      }
      return b[1] - a[1];
    })
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
    console.log(JSON.stringify(descendingCounts), "descending counts obj");


  //return an array of topThreeWords, less if < 3 unique words, [] if there are no words
  const totalKeys = Object.keys(descendingCounts).length;
  const keys = Object.keys(descendingCounts);
  const topThreeWords = [];
  for (let i = 0; i < Math.min(totalKeys, 3); i++) {
    topThreeWords.push(keys[i]);
  }

  return topThreeWords;
}
*/
