class Animal {
    constructor(name, color, speed) {
        this.name = name;
        this.color = color;
        this.speed = speed;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
}

class Cat extends Animal {
    makeSound() {
        return `${this.name} says meow`;
    }
}

class Dog extends Animal {
    makeSound() {
        return `${this.name} says woof`;
    }
}

const cat = new Cat("Tom", "black", 10);
console.log(cat.makeSound());

console.log(Animal.getSpecies());