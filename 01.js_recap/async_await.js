function first() {
    return new Promise(function(resolve, reject) {
        let x = 1 + 1;
        if (x === 2) {
            resolve("Worked!");
        } else {
            reject("Not Worked!")
        }
    });
}

function second(value) {
    return new Promise(function(resolve, reject) {
        resolve("processed " + value);
    });
}

//first().then(
//    value => {
//        console.log("value " + value);
//        second(value).then(
//            value => {
//                console.log(value);
//            }
//        )
//    }
//);

//first().then(value => {
//    console.log(value);
//    return second(value);
//}).then(value => {
//    console.log("processing");
//    console.log(value)
//});

// async await is syntactic sugar for promises
async function doWork() {
    let response = await first(); // wait until this completes
    console.log(response);
    let processedResponse = await second(response);
    console.log("processing");
    console.log(processedResponse);
}

doWork();
