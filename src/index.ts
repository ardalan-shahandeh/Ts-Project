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

//   absstringPairtract addEvent(): void;

//   abstract removeEvent(): void;
// }

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

//without generic
//

class keyValuePair1 {
  constructor(public key: number, public value: string) {}
}

class stringKeyValuePair1 {
  constructor(public key: string, public value: string) {}
}

let pair1 = new keyValuePair1(1, "Apple");

let stringPair = new stringKeyValuePair1("1", "Apple");

// with generic

class keyValuePair<N, S> {
  constructor(public key: N, public value: S) {}
}

let pair = new keyValuePair<number, string>(1, "mohammad");

// generic function

function wrapInArray1(value: number) {
  return [value];
}

let numbers1 = wrapInArray1(1);

// generic function 1

function wrapInArray<T>(value: T) {
  return [value];
}

let numbers = wrapInArray<string>("1");

/////////////////////////////////////////////

interface Result<T> {
  data: T | null;
  error: string | null;
}

interface User {
  userName: string;
}

interface Product {
  title: string;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

fetch<User>("url");

//////////////////////////////////////////////

// function echo<T extends number | string>(value: T): T {
//   return value;
// }

// echo(1);

class Persons {
  constructor(public name: string) {}
}

class Customer extends Persons {}

function echo<T extends Persons>(value: T): T {
  return value;
}

echo(new Customer("123"));

////////////////////////////

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  private _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }
}

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store = new CompressibleStore<Product>();

// store.add

// type mapping

interface Products {
  name: string;
  price: number;
}

type ReadOnly = {
  readonly [K in keyof Products]: Products[K];
};

let customProduct: ReadOnly = {
  name: 'a',
  price: 2
}
