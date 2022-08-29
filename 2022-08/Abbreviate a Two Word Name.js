//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){
    let initials = name.split(" ").map(e=>{
        return e[0].toUpperCase()
    })
    let answer = `${initials[0]}.${initials[1]}`
    return answer

}

console.log(abbrevName("Sam Harris"))
console.log(abbrevName("sam harris"))

//narayanswa30663
function abbrevName2(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}