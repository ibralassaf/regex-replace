const user = {
    firstName: "John",
    lastName: "Doe",
};

const user2 = {
    firstName: "Jane",
    lastName: "Doe",
};

const fullName = function(age) {
    console.log(`${this.firstName} ${this.lastName} is ${age} years old`);
};

let newFunction = fullName.bind(user);

newFunction(30);

let add = (a, b) => a + b;

let add2 = (a, b) => {
    return a + b;
};

console.log(add2(1, 2));

(function(name) {
    return console.log(name);
})("hello");