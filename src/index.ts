class Ride {
  private static _activeRides: number = 0;
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

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

// inherited ** verasat
// be classi ke azash ers bari mishe migan parent
// parent/ super
//child/derived/sub

class Person {
  constructor(public firstName: string, public lastName: string) {}

  walk() {
    console.log("Walking");
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("taking a test");
  }
}

let student = new Student(1, "mohammad", "seyedAghae");
// console.log(student.takeTest());

///// methdo overRiding

//override

class Teacher extends Person {
  override get fullName(): string {
    return "professor" + " " + super.fullName;
  }
}

let teacher = new Teacher("ardalan", "shahandeh");

console.log(teacher.fullName);

// polly morphism

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([
  new Student(1, "ali", "gowjei"),
  new Teacher("mohammad", "khiari"),
]);

//

abstract class Shape {
  constructor(public color: string) {}
  render() {}
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle ...");
  }
}

// let shape = new Shape("red");
// shape.render();

/////////////####  interface

// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void;

//   abstract removeEvent(): void;
// }

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}