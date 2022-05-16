//https://www.codewars.com/kata/523f5d21c841566fde000009/solutions/javascript

//My way
function arrayDiff(a, b) {
  returnArray = [] 
  //loop through a
  //if value in b is in that a index, then remove it
  for(let aR = 0; aR < a.length; aR++){
      if(b.includes(a[aR]) === false){
        returnArray.push(a[aR])
      }
  }
  return returnArray
}

//Using filter()
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}