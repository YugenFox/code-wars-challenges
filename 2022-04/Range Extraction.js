//https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution1(list){
    let groupString = []
    let finalListString = ''
    let firstValueOfGroup = list[0]
    let newGroupMade = true
    //let lastValueOfGroup //will be i before we start next firstValueOfGroup
    for(i = 0; i < list.length; i++){
        console.log(`\nLoop Current i: ${i}`)
        let lastIndex = i === 0 ? 0 : i - 1
        if(newGroupMade === false){
            lastIndex = i
            console.log(`in NewGroup. i: ${i} lastIndex${lastIndex}`)
            
            newGroupMade = true
        }
        console.log("lastIndex: " + lastIndex)
        
        //code
        if(i === list.length - 1){//last run to ","
            finalListString += `${groupString[0]}-${list[i]}`
            console.log(`in IF finalString: ${finalListString}`)

        } else if(list[i] === (list[lastIndex] + 1) ){//normal opperation list continuing add to groupString
            //else if(list[i] === list[lastIndex] || list[i] === (list[lastIndex] + 1) ){
            groupString.push(list[i])
            console.log(`In else If groupString ${groupString}`)
            //-2 === -2 || ...
            //...       || -1 === (-2+1) = -1  

        }else{//current i is end of group
            console.log(`in ELSE: i= ${i} value: ${list[i]}`)
            //console.log(groupString.indexOf(0))
            console.log(`groupString[0]: ${groupString[0]} list[i-1]: ${list[i-1]} list[i]: ${list[i]}`)

            if(groupString[0] === list[i-1] || groupString[0] === list[i] || groupString === undefined){
                console.log(`ELSE IF--`)
                groupString.push(list[i])
                finalListString += `${groupString[0]}`
            }else{
                console.log(`ELSE ELSE--`)
                finalListString += `${groupString[0]}-${list[i-1]},` 
            }
            console.log(`Else finalString: ${finalListString}`)
            groupString = []
            groupString.push(list[i])
            newGroupMade = false 
        }
        //filter duplicates at end - might not have any
    }
    return finalListString
}

let oddArray = [-3,-1]
let lilArray = [-2,-1,1,2] //returns "-2--1,1-2"
let numArray = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20] // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

//console.log("solution: " + solution(oddArray))

function solution(list){
    let groupString = []
    let finalListString = ''
    let newGroupMade = false
    let lastIndex = 0
    //let lastValueOfGroup //will be i before we start next firstValueOfGroup
    for(i = 0; i < list.length; i++){
        console.log('\n')
        //set up lastIndex to compare current i too
        if(newGroupMade === false){
            lastIndex = i
            newGroupMade = true
        }else{
            lastIndex = i - 1
        }
        console.log(`lastIndex: ${lastIndex} index: ${i}`)

        ////compare the groupString to the current index value
        
        //just single groupString in total
            //add if for not last index
                //-1 === -1         &&      (-1+1 = 0) !== -3
                //-1 === -2         &&      (-1+1 = 0) !== -1+1 = 0 Fail
        if(list[i] === list[lastIndex] && list[i] +1 !== list[i+1]){
            
            finalListString += list[i] + ","
            console.log(`First IF: ${finalListString}`)

        }//not last check so keep "," //last check so NO ","
        else{//should just be adding to normal string list and have break if not to change newGroupMade = false
            console.log(`list[i] ${list[i]} vs list[lastIndex] ${list[lastIndex]}  `)
            //groupString += list[i]
            // -2 === -1+1(0) Fail

            //-
            if(list[i] === list[lastIndex]){
                groupString.push(list[i])
                console.log(`ELSE IF: groupString: ${groupString}`)

            }else{//should end block
                console.log(`Should END BLOCK groupString: ${groupString} list[i]: ${list[i]}`)
                if(groupString.length !== 0){//length 0 or 
                    console.log(`finalString pre add: ${finalListString}`)
                    finalListString += `${groupString[0]}-${list[i]},`
                    console.log(`finalList post add: ${finalListString} groupString[0]: ${groupString} list[i]: ${list[i]}`)
                }else{
                    console.log(`in confused else`)
                    finalListString += `${list[i]},`
                }
                
                groupString = []
            }

            /*
            if(list[i] === list[lastIndex] + 1 && newGroupMade === true){
                //groupString.push(list[i])//how to start this though and include old index
                console.log(`ELSE IF: `)
            }

            //group not connected
            if(list[i] !== list[lastIndex]){
                //-1 !== -2 True
                newGroupMade = false
                finalListString += groupString + ","
                console.log(`ELSE IF IF: finalString: ${finalListString}`)

            }
            */


        }

        //if next i different than group string && ![i]+1 then ","
            //also funalStringList += "groupString[0] - list[i]"
        //if next list[i] === list[lastIndex] + 1 then groupString.push(i)
        
        
        //filter duplicates at end - might not have any
    }
    if( finalListString.lastIndexOf("," === (list.length-1) === 0) ){
        finalListString = finalListString.slice(0, -1)
    }
    return finalListString
}

let oneArray = [-3, -2,-1, 0]
let myArray = [-2,-1]
let newSpacedArray = [-3, -1]
console.log("solution: " + solution(oneArray))


