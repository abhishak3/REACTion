class Animal {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name} is walking..`);
    }
}

// inheritance
class Monkey extends Animal {
    constructor(name) {
        super(name) // calling parent's constuctor
    }
    hang() {
        console.log(`${this.name} is hanging from tree..`);
    }
}

var lion = new Animal("lion");
lion.walk(); // lion is walking..

var monkey = new Monkey("monkey");
monkey.hang(); // monkey is hanging from tree
