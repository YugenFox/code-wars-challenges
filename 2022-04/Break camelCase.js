//https://www.codewars.com/kata/5208f99aee097e6552000148/javascript
// complete the function
function solution(string) {
   let spaced_Camels = '' 
   for(let i = 0; i < string.length; i++){
       if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
           spaced_Camels += " " + string[i]
       }else{
           spaced_Camels += string[i]
       }
   }
   return spaced_Camels
}

console.log(solution("camelMan"))