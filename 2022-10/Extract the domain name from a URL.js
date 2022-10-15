//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

let test1 = "http://github.com/carbonfive/raygun"
let test2 = "http://www.bkj8ycolz9857s70g.us/error"

//note you have to actually set url = url.replace("take out thing", "") for it to work. Does not change the url automatically just using .replace on it, for reference. 
function domainName(url){
    retArr = []
    //remove http://
    url = url.replace("http://", "")
    //remove https://
    url = url.replace("https://", "")
    //remove www.
    url = url.replace("www.", "")
    //split .
    retArr = url.split(".")
      //choose index 0 for domain
    
    return retArr[0]
  }
  
  console.log(domainName(test2))
  //"http://github.com/carbonfive/raygun" => carbonfive
  //"http://www.zombie-bites.com" =>  zombie-bites
  //"https://www.cnet.com" => cnet