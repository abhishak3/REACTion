function greeting() {
    return 'Welcome to Javascript';
}

// is same as

greeting = () => {
    return 'Welcome to Javascript';
}

// is same as

greeting = () =>
    'Welcome to Javascript';

console.log(greeting())
