//https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

function solution(input, markers) {
    //split at '\n'
    strArray = input.split('\n')
    //then loop through each array up to the point of having the (symbol/element).
      //store that in the array until that moment. Then at the end join everything. 

    let ret = strArray.map(sentence => {
        let lineAnswer = ''
        for(let i = 0; i < sentence.length; i++){
            let endLine = false
            if(markers.includes(sentence[i])){
                endLine = true
            }
            if(endLine){//found marker so stop line there and add to lineAnswer
                return lineAnswer.trimEnd()
            }

            //add to lineAnswer if no marker found so far in line
            lineAnswer += sentence[i]
        }

        //if no markers found, return the sentence whole after trimming the whitespace
        return lineAnswer.trimEnd()
    });

    return ret.join('\n')
  };

console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']))
  /*var result = solution("apples, pears # and bananas
  \ngrapes
  \nbananas !apples"
  , ["#", "!"]) //what should be blocked
  /*
// result should == "apples, pears\ngrapes\nbananas /**/