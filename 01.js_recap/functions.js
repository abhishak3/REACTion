// bind - borrowing function from an object
const person = {
    firstName: "Abhishek",
    lastName: "Pandey",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

// this object doesn't have fullName attritbute
const another_person = {
    firstName: "Heil",
    lastName: "Hitler"
}

another_person.fullName = person.fullName.bind(another_person)
console.log(another_person.fullName())

// arguments object
function add() {
    let sum = 0;
    for (let x = 0; x < arguments.length; x++) {
        sum += arguments[x];
    }
    return sum;
}

console.log(add(1, 2, 3, 4))

// function constructor
function myFunc(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}

myObj = new myFunc("abhishek", "pandey");
console.log(myObj.firstName);
console.log(myObj.lastName);

// function call
console.log(person.fullName.call(another_person));

// function apply
console.log(person.fullName.apply(another_person));

// call and apply are similar. The difference is call takes arguments separately while apply takes arguments in an array.
