//https://www.codewars.com/kata/621f89cc94d4e3001bb99ef4/train/javascript

//0 - 100
function dontGiveMeFive(start, end){
    //start ++ until % 5. 
        //find how many 5s are from start to end. 
        //subtract the fives answer from the total end-start range for return
    let firstFive = start;
    let firstFiveMinusStart = 0; //if difference add to end return value
    let lastFive = end; //while loop 
    let endMinusLastFive = 0;
    let totalFives;
    let totalNotFives;

    if(start.toString().includes('5') === false ){
        console.log("----in first if----")
        if(end - start <= 10){ //call small loop return answer
            console.log(`testFives(${start},${end}) = ${testFives(start,end)})`)
            return testFives(start, end)

        }else{//for big nums - returns firstFive
            while (firstFive.toString().includes('5') === false) {
                firstFive++
            }
            while(lastFive.toString().includes('5') === false){
                lastFive--
            }
            // totalFives = Math.floor((end - firstFive)/5)//round down, can't have partial five
            ////get totalFives - /2 to get only 5s count, not just divisible by 5
                //then correct with ifs below
            totalFives = ((end - firstFive)/5)/2
            console.log(`(totalFives = lastFive: ${lastFive} - firstFive:${firstFive})/5)/2 = ${totalFives}`)
            if(totalFives === 0){
                console.log('0+1-- totalFives')
                totalFives = 1 //e.g range of 0-11 has one five. lastFive - firstFive would be 0, but actually has 1 in group
            }
            else if(totalFives === 1){
                totalFives++
            }
            else if(totalFives %2 !== 0 && totalFives === parseInt(totalFives)){
                console.log('minus-- totalFives')
                totalFives--//if odd subtract one to get correct 5s count
            }else if(totalFives != parseInt(totalFives)){
                console.log('Math.ceil-- totalFives')
                totalFives = Math.ceil(totalFives)
            }else{
                console.log(`totalFives:${totalFives} Nothing Happened -- Math.ceil`)
                totalFives = Math.ceil(totalFives)
            }
            //add +1 to end to encompase the last number in the list of returns
            totalNotFives = ((end+1) - start) - totalFives
            console.log(`totalNotFives: ${totalNotFives} = (end:${end} - start:${start}) - totalFives:${totalFives}`)
            firstFiveMinusStart = firstFive - start
            endMinusLastFive = end - lastFive
            console.log("totalFives"+totalFives)
            console.log(`Done with while LOOP - firstFive = ${firstFive}. firstFiveMinusStart: ${firstFiveMinusStart}`)
        }
        
    }else{//since start.includes('5') - returns firstFive
        firstFive = start
        if(end - start <= 10){ //return answer if small range
            console.log(`testFives(${start},${end}) = ${testFives(start,end)})`)
            return testFives(start, end)

        }else{//Getting final return - big num
            while(lastFive.toString().includes('5') === false){
                lastFive--
            }
                    
            // totalFives = Math.floor((lastFive - firstFive)/5)//round down, can't have partial five
            ////get totalFives - /2 to get only 5s count, not just divisible by 5
                //then correct with ifs below
                totalFives = ((end - firstFive)/5)/2
                if(totalFives === 0){
                    console.log('0+1-- totalFives')
                    totalFives = 1 //e.g range of 0-11 has one five. lastFive - firstFive would be 0, but actually has 1 in group
                }else if(totalFives === 1){
                    totalFives++
                }else if(totalFives %2 !== 0 && totalFives === parseInt(totalFives)){
                    console.log('minus-- totalFives')
                    totalFives--//if odd subtract one to get correct 5s count
                }else if(totalFives != parseInt(totalFives)){
                    console.log('Math.ceil-- totalFives')
                    totalFives = Math.ceil(totalFives)
                }else{
                    console.log(`totalFives:${totalFives} Nothing Happened`)
                }
            
                //wrong //(1 - 0) / 5
            totalNotFives = ((end+1) - start) - totalFives
            console.log(`totalFives:${totalFives} = (end:${end} - firstFive:${firstFive})/5`)
        }
    }
    // //Getting final return
    // totalFives = (end - firstFive)/5
    //     //wrong //(1 - 0) / 5
    // totalNotFives = (end - start) - totalFives
    console.log(`totalFives in range of ${start}... ${end} = ${totalFives}`)
    console.log('notFives- '+totalNotFives)
    
    return totalNotFives //+ firstFiveMinusStart
}

console.log(dontGiveMeFive(-17, 9))//
console.log(testFives(-17, 9))//

// console.log(dontGiveMeFive(4, 17))//
// console.log(testFives(4, 17))//

// console.log(dontGiveMeFive(0, 11))//
// console.log(testFives(0, 11))//



//console.log(dontGiveMeFive(0, 20))//
//startingFive = 5. start = 0   startPointDiff  = startingFive - start = 5
    //while loop up for startingFive - must be over 10 length(end - start)
//endingFive = 15.  end   = 20  endingPointDiff = end - endingFive = 5 
    //while loop down for endingFive - must be over 10 length(end - start)

//console.log(dontGiveMeFive(4, 15))
//Fives -- 5,15
    //Find FivesTotal
    //(endingFive - StartingFive)/5 //(15-5)/5 = 3 NOT 2 
        //-- if(fivesTotal %2 = 0 && fivesTotal === pasrseInt(fivesTotal)){fivesTotal--}
    //(endingFive - StartingFive)/5 //(9-(-17))/5--- 26/5 = 5.2
//console.log(dontGiveMeFive(0, 100))
    //(100-5)/5 = 19 /2 = 9.5 -- roundUp = 10 CHECK 
        //-- if(fivesTotal != parseInt(fivesTotal)){roundUp(fivesTotal)}
    //(
//console.log(dontGiveMeFive(0, 11))
    //if endingFive === startingFive{fivesTotal === 1}

//notFives = (15-4) - 2






// console.log(dontGiveMeFive(0, 1))//
// console.log(dontGiveMeFive(4, 5))//
// console.log(dontGiveMeFive(0, 100))//100/5 = 20. End - fives = 75
// console.log(dontGiveMeFive(75, 100))
// //(End-startingFive)/5 == totalFives. (End-start) - totalFives   
// //(100-75)/5 = 5. (100 - 75) - 5 = 20 is our return   
// console.log(dontGiveMeFive(74, 100))  
// //(100-74)/5
//     //if startingFive not starting num. Remember difference from startingFive-start = 75 - 74




// console.log(dontGiveMeFive(3, 100))//

//

function testFives(start, end)
{
    counter = 0
    for(let i = start; i <= end; i++){
        if(i.toString().includes('5') === false){
            counter ++
        }
    }

  return counter;
}

//console.log(testFives(1,9))
//console.log(testFives(-17,9))

