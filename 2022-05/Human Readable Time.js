//https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable (seconds) {
    let HH, MM, SS

    HH = Math.floor(seconds / 3600)
    MM = Math.floor((seconds % 3600) / 60)
    SS = (seconds % 60)

    console.log(`HH: ${HH} MM: ${MM} SS: ${SS}`)

    //change HH, MM, SS to have 0 before if length < 2
    if(HH < 10){
        HH = `0${HH}`
    }
    if(MM < 10){
        MM = `0${MM}`
    }
    if(SS < 10){
        SS = `0${SS}`
    }
    console.log(`Formatted --- HH: ${HH} MM: ${MM} SS: ${SS}`)

    
    return `${HH}:${MM}:${SS}`;
  }

  humanReadable(1)
  humanReadable(60)
  humanReadable(3600)
  humanReadable(3601)
  humanReadable(36000)



  //HH:MM:SS
  //00-99:0-60:0-60

  //HH
    //1 HH is 3600
  //MM
    //1 MM is 60

  /*
  61

  ///Covers less than hour - find MM & SS
  if(num < 3600)---
  MM = (61 / 60).floor() // 1 MM
  SS = 61 % 60 // 1 SS


  */
  /*
  358200 - 99.5 HH 
  358201 - 99:30:01

  ///covers less than 100 hours
  if(num >= 3600)---
  HH = (358201 / 3600).floor() // 99
  MM = ((358201 % 3600) / 60).floor // MM 30
  SS = ((358201 % 60) // 


  */