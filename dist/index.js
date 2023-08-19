"use strict";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    walk() {
        console.log("Walking");
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("taking a test");
    }
}
let student = new Student(1, "mohammad", "seyedAghae");
class Teacher extends Person {
    get fullName() {
        return "professor" + " " + super.fullName;
    }
}
let teacher = new Teacher("ardalan", "shahandeh");
console.log(teacher.fullName);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([
    new Student(1, "ali", "gowjei"),
    new Teacher("mohammad", "khiari"),
]);
class Shape {
    constructor(color) {
        this.color = color;
    }
    render() { }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle ...");
    }
}
//# sourceMappingURL=index.js.map