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

//type Alias baraye sakhtan yek type shakhsi estefade mishe  melse mesal e zir

type Employee = {
  id:number,  
  // meghdaresh ghabel taghir nist dg
  name?: string,
  retire:(date:Date) => void
}

let employeeType: Employee = {
  id:1,
  name: '',
  retire: (date:Date) => {
    console.log(date);
  }
}


//union Types  be ye moteghayer ya yek parametr  mishe bishtar az yek type dad

function kgToLbs(weight: number | string | boolean): number {
  console.log(weight);
}

kgToLbs(10)
kgToLbs('10')
kgToLbs(true)
kgToLbs([1,2,3])

//narrowing

function kgToLbsNarrow(weight: number | string): number {
  if(typeof weight === 'number') 
    return weight * 2.2
  else 
    return parseInt(weight) * 2.2
  
}

// inter section

let weight: number & string;

type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget= {
  drag:()=>{},
  resize: ()=> {}
}

//baraye mehdud kardan maghadir daryafti faghat yek meghdar mitune begire ke anotate shode bashe
//literal type

type Quantity = 50 | 100

let quantity: Quantity  = 100

type Metric = 'cm' | 'inch';

// kar kardan ba maghdir null va undefine
// nullable object

function greet(name:string | null | undefined) {
  if(name)
    console.log(name.toUpperCase())
  else
    console.log('invalid marker');
}

greet(undefined)


type Customer = {
  birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1)

// if(customer !== null && customer !== undefined)
//   console.log(customer.birthday);

console.log(customer?.birthday?.getFullYear);

// if(customers !== null & customers !== undefined) customers[0]
// optional access element operator in ts
// customers?.[0]



//optional call operator