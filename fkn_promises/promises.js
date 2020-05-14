

let promiseToClean = new Promise((resolve,reject) => {

    //stuff gets cleaned
    let isClean = false;

    if (isClean) {
        resolve('Clean!');
    } else {
        //testing error with simple 'nope' statement
        reject(Error("NOPE"));
    }

});
// passing a completely arbitrary 'cheese' as argument to show it could be anything
promiseToClean.then((cheese) => {
    console.log('It is ' + cheese);
}, (err) => {
    console.log(err)
});