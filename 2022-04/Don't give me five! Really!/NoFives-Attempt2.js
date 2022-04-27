//https://www.codewars.com/kata/621f89cc94d4e3001bb99ef4/train/javascript
//Attempt 2

function dontGiveMeFive(start, end){
    let nLength = (num) => 1 + Math.log10(Math.abs(num) + 1) | 0; //function to return length
    let startString = start.toString()
    let endString = end.toString()
    let totalFives = 0
    let totalNotFives = 0
    let startLength = nLength(start)
    let endLength = nLength(end)
    let startDigitLengths = []
    let startNIterate;
    let endDig;
    let endNIterate;

    //hard test solution if small range
    if(end - start <= 10){
        return testFives(start,end)
    }
    //past this point will definitely have at least one totalFives to find
    //longer range do more
    //get totalFives in range to sub from total range

    //store digit ranges of start
    //if first char is start is negative, will need to find way around adding that num to an array. And not add the '-' sign
    for(let i = 0; i < startLength;i++){
        startDigitLengths.push(parseInt(startString[i]))
        console.log(`startDigitLength: ${startDigitLengths} += start[i]: ${startString[i]}`)
    }
    //store digit ranges of end

    //later do the math to know which ranges of [0-9] to iterate through for each tens value and do that num in each digit range to ^ power
    let startDigitLength = `${start}`.length
    console.log(`start: ${start} start.length: ${nLength(start)}}`)

    //+1 end to encompase last number that is notFive in return
    totalNotFives = ((end + 1) - start) - totalFives
                    
    console.log(`totalNotFives:${totalFives} = (end:${end}+1 - start:${start}) - totalFives${totalFives}`)

    return totalNotFives
}


//used for loop test under <=10.length
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

//new tests
console.log(dontGiveMeFive(-17, 9))//-15,-5,5 //3 --- (26+1)-3=23


// //tests
// console.log(dontGiveMeFive(-17, 9))//-15,-5,5 //3 --- (26+1)-3=23
// //totalFive: totalFives = ((lastFive - firstFive)/5) / 2
//     //                    (20/5) /2 --- 4/2 --- = 2 NOT +1 = 3 TRUE

// console.log(dontGiveMeFive(4, 15))//5,15 //2 --- (11+1)-2=10
// //totalFive: totalFives = ((lastFive - firstFive)/5) / 2
//     //                    (10/5) /2 --- 2/2 --- = 1 NOT +1 = 2 TRUE
// console.log(dontGiveMeFive(984, 4304))//5,15 //2 --- (11+1)-2=10
// console.log(testFives(984, 4304))//5,15 //2 --- (11+1)-2=10
// console.log(testFives(1, 100))//5,15 //2 --- (11+1)-2=10


// let startTest = 50
// let endTest = 61
// console.log(`${dontGiveMeFive(startTest, endTest)} vs ${testFives(startTest, endTest)}`)

//https://www.quora.com/How-many-numbers-between-1-to-1-000-000-contain-a-five
/*
Get digit length to string of end - start

Then do math of how many fives would be included in that grouping

--may have to do difference from startingFive or endingFive to the next digit in the group....idk that part
    e.g (95, 1005) how to part between those and do that math thing
*/

/*
(95, 1005)
1005-95 =

(50-100)

(0-100)//look for 5s
100-0 = 100.
[0-9] is 10 choices. Take away 5 = 9 choices
--100s place stays same so leave at 1
--10s place has 1 five option. 10 * 1 = 10
--1s  place has 1 five option.  1 * 1 =  1
--Total 5s          =                   19

*/

/*
(0, 11)
startDig = start[0](0+1=1). 
startNIterate = 10-1=9
(49, 100)
startDig = start[0](4+1= 5). 
startNIterate = 10-5 = 5

(50, 100)
need to find starting digit option [first digit of starting num]
digits in between if any would be [0-9] - 1(the 5) = 9
ending digit option(s) [0-end num]

let startDig = start[0] = 5. [0,1,2,3,4,5,6,7,8,9]. 10 - [0-5]
let startNIterate       10 - 6 = 4 10-1=0 [4,9] --what we iterate through?
let endDigitEnd = end[end.length-1] = 0

10*1 + 1 * 9

(64, 100)
10*0 + 1*9
(984, 4304)
1000*0 + 9 * 9 * 9

if actuall digit in index is >= 5 don't muliply same?
*/

/*
(984, 4304)
startDigs = '0[9,8,4]
endDigs   = [4,3,0,4]

startDIter=  '0[10-(9+1),10-(8+1),10-(4+1)] =         [0,1,5]
endDIter  = [10-(4+1),10-(3+1),10-(0+1),10-(4+1)] = [5,6,9,5]
for(let i = 0; i < startDigs.lengths(4); i++){
    if(startDigs > )
}

*/



//old---------------
/*
function dontGiveMeFive(start, end){
    let firstFive = start
    let lastFive = end
    let totalFives = 0
    let totalNotFives = 0
    let 

    //hard test solution if small range
    if(end - start <= 10){
        return testFives(start,end)
    }
    //past this point will definitely have at least one totalFives to find
    //longer range do more

    while (firstFive.toString().includes('5') === false) {
        firstFive++
    }
    while(lastFive.toString().includes('5') === false){
        lastFive--
    }
    console.log(`firstFive: ${firstFive}  lastFive: ${lastFive}`)

    //get totalFives in range to sub from total range
    if(lastFive === firstFive){
        totalFives = 1
    }else{
        //totalFives return
        
    }
    //+1 end to encompase last number that is notFive in return
    totalNotFives = ((end + 1) - start) - totalFives
                    
    console.log(`totalNotFives:${totalFives} = (end:${end}+1 - start:${start}) - totalFives${totalFives}`)

    return totalNotFives
}
*/