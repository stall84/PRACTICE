// A recursive function typically will have the following structure which calls the function if a condition is not satisfied, 
// until that condition is satisfied 

/********************************************************************************************************************************************** 
function recurse () {

    // If condition is satisfied. Exit recursion/function
    if ( condition )

} else {

    recurse()

}
/*****************************************************************************************************************************************************/



// Simple jScript example where we want to accomplish counting down from 10 to 1
// But because the below example has no condition to stop itself... It's going to count down through zero .. to negative multi-thousand something 
// until the browsers maximum call-stack is reached (don't do this lol)


/**********************************************************************************************************************************************
function countDown (fromNum) {
    console.log(fromNum); 
        countDown(fromNum - 1);
    
}

countDown(10)

/*****************************************************************************************************************************************************/

// The way to make the function recursive is by adding a condition to eliminate the cycles the function will go through to reach desired condition 

function countDown (fromNum) {
    
    console.log(fromNum);

    let nextNum = fromNum - 1;
        //Important to note you must specify next num in the countdown argument. this if statement is the conditional
    if (nextNum > 0) {
        countDown(nextNum);
    }
}

countDown(10) 