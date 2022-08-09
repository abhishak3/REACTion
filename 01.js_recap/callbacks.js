// callbacks
function myDisplayer(text) {
    console.log(text);
}

function add(a, b) {
    let c = a + b;
    return c;
}

let result = add(3, 4);
myDisplayer(result);
// problem with above is we need to use two different functions

function add(a, b) {
    let c = a + b;
    myDisplayer(c);
}

add(2, 4)

// problem with above function is now you need to print output everytime you call it.

// Now comes the callbacks
function add(a, b, printCallback) {
    let c = a + b;
    if (printCallback === undefined) {
        return c;
    } else {
        printCallback(`callback ${c}`);
    }
}

let c = add(2, 4);
console.log("no callback", c);
add(2, 4, myDisplayer);


