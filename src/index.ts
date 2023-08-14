// mitunim meghdar ro moshakhas nakonim ke type chi hast agar meghdar avaliye dade bashid
// let sales= 123_456_789

// let course = 'TypeScript'

// let is_published= true

// type any yaani meghdaresh harchizi mitune bashe va az in meghdar ta had emkan azash douri mikonim 

let sales: number = 123_456_789

let course: string = 'TypeScript'

let is_published: boolean= true

// any type

let level;

function render(document: any) {
  console.log(document);
}

// let numbers: Array<number> = [1,2,3,4]
// number[] araye addadi
// string[] araye string

let numbers: number[] = [1, 2, 3, 4]

//Tuple ==> yaani momkene avalin onsor adda bashe dovomin onsot string va .....
// zamani azash estefade mikonim ke bekhaeim masalan yek user ro ba 2 meghdar taarif konim mese daneshu sen va reshte tahsilish ro

let user:[number, string] = [30, 'Ardalan']


// Enum => 

// const small = 1
// const medium = 2
// const large = 3

enum Size {Small='s', Medium='m', Large='l'}

let mySize: Size = Size.Medium

// console.log(mySize);



// functions

function calculatingTax(income:number, taxYear: number): number {
  if(taxYear<5000) {
    return income * 1.2
  }
  return income * 1.3
}

console.log(calculatingTax(10_000,2022));



//Object 

let employee:{
  readonly id:number,  
  // meghdaresh ghabel taghir nist dg
  name?: string,
  retire:(date:Date) => void
} = {
  id:1,
  name: '',
  retire: (date:Date) => {
    console.log(date);
  }
}

employee.name = 'mohammad'