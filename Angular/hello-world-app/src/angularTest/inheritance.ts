// Single Inheritance
class Animal {
    constructor(public name: string) {}
    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy");
dog.move(10);
dog.bark();

// Multiple Inheritance (achieved using mixins)
class Jumpable {
    jump() {
        console.log("Jumping...");
    }
}

class Swimmable {
    swim() {
        console.log("Swimming...");
    }
}

class Frog implements Jumpable, Swimmable {
    jump() {
        console.log("Frog is jumping...");
    }

    swim() {
        console.log("Frog is swimming...");
    }
}

const frog = new Frog();
frog.jump(); 
frog.swim();


// Multilevel Inheritance
class Vehicle {
    move() {
        console.log("Vehicle is moving.");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Car started.");
    }
}

class ElectricCar extends Car {
    charge() {
        console.log("Electric car is charging.");
    }
}


const electricCar = new ElectricCar();
electricCar.move();  
electricCar.start();
electricCar.charge();
