function reverseWords(str){
    let strArray = str.split(" ")
    let reverseArray = []
    for(let i = strArray.length -1; i >= 0; i--){
        reverseArray.push(strArray[i])
    }
    return reverseArray.join(" ")

  }

  console.log(reverseWords("I am happy"))

  //KSA solution
  function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }