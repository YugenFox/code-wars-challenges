//https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

function bouncingBall(h,  bounce,  window) {
    // your code here - return bounces momSees
    //need to count h - drop - next bounce. Does this > window(height)
    let passWindow = 0
    let hasBouncedOverWindow = false
    let ballPosition = h
    //pass if and can be true, then get bounce count Mom can see. 
    if(h > 0 && (bounce > 0 && bounce < 1) && window < h   ){
        console.log("in if")
        hasBouncedOverWindow = true
        console.log(ballPosition > window && hasBouncedOverWindow === true)
      while(ballPosition > window && hasBouncedOverWindow === true){
        console.log('in while loop')
        hasBouncedOverWindow = false
        //falls in front of window
        passWindow+=1
        //bounces
        ballPosition = ballPosition * bounce
        console.log('bounced new height: ' + ballPosition)
        //check if bounced ball is greater than window - set ballBounced = true
        //after bounce if less than window STOP incrementing
        if(ballPosition > window){
            hasBouncedOverWindow = true
            passWindow +=1
        }else{
            console.log('ELSE total passWindow: ' + passWindow)
        }
      }
      return passWindow
    }else{
      return -1 //for false test
    }
  }

  console.log(bouncingBall(3,0.66,1.5))