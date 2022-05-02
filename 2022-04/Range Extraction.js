function solution(list){
    

        if(list.length == 0){
            return ""
        }
        else if(list.length == 1){
            return list[0].ToString()
        }

        let returnValue = ""
        let myList = []
        //order list just in case  list = 

        let current = 0
        let min = list[0]
        let last = min
        for(let i = 1; i < list.length; i++){
            current = list[i]
            if(current == last + 1){
                last++
            }
            else{
                myList.push(setGroup(min, last))

                min = list[i]
                last = min
            }
        }

        myList.push(setGroup(min, last))

        for(let i = 0; i < myList.length; i++){
            returnValue += `${myList[i]},`
        }
        //removes last "," is present 
        if( returnValue.lastIndexOf("," === (list.length-1) === 0) ){
            returnValue = returnValue.slice(0, -1)
        }
        return returnValue

}

function setGroup(startGroup, endGroup){
    let difference = endGroup - startGroup
    if(difference >= 2){
        return `${startGroup}-${endGroup}`
    }else if(difference == 1){
        return `${startGroup},${endGroup}`
    }
    return startGroup.toString()
}

let numArray = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20] 
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
//wrong     -10--8,-6-1,   3-5,7-11,14-15,14-15,17-20
console.log(solution(numArray))

