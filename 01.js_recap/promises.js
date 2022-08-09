let myPromise = new Promise(function(resolve, reject) {
    let x = 7;
    if (x === 0) {
        resolve();
    } else {
        reject();
    }
})

myPromise.then(
    function(value) {
        console.log("Works!");
    },
    function(error) {
        console.log("Doesn't works");
    }
).then(
    function(value) {
        console.log("Works again!");
    },
    function(error) {
        console.log("Not again!!!")
    }
);
// Promises can be
// 1. Pending 2. Fulfilled 3. Rejected


