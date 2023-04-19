//https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

//other
function validBraces(braces){
  for (var i = 0, depth = []; i < braces.length; i++) {
    // console.log(depth)
    switch (braces[i]) {
      case '(': case '[': case '{': depth.push(braces[i]); break;
      case ')': if (depth.pop() != '(') return false; break;
      case ']': if (depth.pop() != '[') return false; break;
      case '}': if (depth.pop() != '{') return false; break;
    }
  }
  //If never got a closing and only ([{, the return below would show false 
  return depth.length == 0;
}

//tests
console.log(validBraces("({})"), "be: true")
console.log(validBraces("({})[({})]"), "be: true")

//main lesson is anytime there is a closing thing )]} the .pop() --last thing in the array before then would have to be its match ([{


// console.log(validBraces("({})[({})]"), "be: true")
// console.log(validBraces("(){}[]"), "be: true")
// console.log(validBraces("([{}])"), "be: true")
// console.log(validBraces("(}"), "be: false")


//mine - did not read close enough. Mine only works if the pairs are wrapped in the correct order, not if they are not
// function validBraces(braces){
//   let arr = braces.split('')
//   console.log(arr) 

//   let isMatch = true
//   while(isMatch & arr.length > 0){
//     //if odd length can't be match
//     if(arr.legnth % 2 === 1){
//       isMatch = false
//       return false
//     }
//     //check if match next to each other
//     if(arr[0] === "(" & arr[1] === ")"){
//       arr.shift()
//       arr.shift()
//     } else if(arr[0] === "[" & arr[1] === "]"){
//       arr.shift()
//       arr.shift()
//     } else if(arr[0] === "{" & arr[1] === "}"){
//       arr.shift()
//       arr.shift()
//     } else{
//       //otherwise check at beggining and end if match, if not fail
//       if(arr[0] === "(" & arr[arr.length - 1] === ")"){
//         arr.shift()
//         arr.pop()
//       } else if(arr[0] === "[" & arr[arr.length - 1] === "]"){
//         arr.shift()
//         arr.pop()
//       } else if(arr[0] === "{" & arr[arr.length - 1] === "}"){
//         arr.shift()
//         arr.pop()
//       } else{
//         //no match found, return false
//         isMatch = false
//         return false
//       }
//     }
    
//   }
//   console.log(arr, "arr at end")
//   return true
// }