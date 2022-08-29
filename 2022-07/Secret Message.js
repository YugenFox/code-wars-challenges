//https://www.codewars.com/kata/54808e45ab03a2c8330009fb/train/javascript

function findSecretMessageOG(paragraph) {
    // what's the message?
    //store one instance of each duplicate word in a set
        //make sure don't use same word twice
    //ignore ending punctuation
    initArray = paragraph.split(' ')

    let duplicate = paragraph.forEach(x => {

    })
    
  }

  //idea by devdinho
  function findSecretMessage(paragraph) {
    const words = paragraph.toLowerCase().match(/[a-z]+/g);
    const base = new Set(), dupes = new Set();
  
    for (let word of words)
      base.has(word) ? dupes.add(word) : base.add(word);
    
    return [...dupes].join(' ');
  }