//https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0

function last(x){
    //take string and split into array
    //sort by last letter/index of that array
    //use unicode to allow us to use .sort by using number values to compare the alphabetic value at the last index
    let arr = x.split(" ").sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
    
    return arr;
    
  
  }
  //test cases
  console.log(last("za zb"), "za, zb") //array of words in return, show each index
  console.log(last("zb za"), "za, zb")
  console.log(last("zb zba za"), "za, zba, za")
  