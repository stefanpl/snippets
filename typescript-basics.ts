// Video packed with more info about TS than any sane person can handle:
// https://www.youtube.com/watch?v=hDACN-BGvI8



// Sometimes you know more about the type than the compiler.
// In this case, you can explicitly state the type of any variable by using either of these constructs:

let someValue: any = 'woof';

let strLength: number = (<String>someValue).length;
// vs.
let strLength: number = (someValue as String).length;


// Creating a dictionary
let persons: { [id: string] : IPerson; } = {};

// To use more elaborate mappings, a Record<key, entry> can be used!
let whatever: Record<validKey, anythingReally> = {};

// Avoid 'before initialized' warnings when using a try-catch:
let x !: number;
try {
  x = someFunction();
}
console.log(x);


// Indexed access types:

// The `keyof` keyword can be used to access the property names of an object:

type foo = {
  a: number,
  b: string,
  c: Array<any>,
}

interface Nested {
  myKey: foo,
}

type bar = keyof Nested['myKey'];  // a | b | c

function some<T extends bar>(myArr: Array<T>): any {}

type woof = foo[keyof foo]; // number | string | Array<any>

// This can be used to construct a generic getter function: 
function getPropertyFromObject<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}


// The declare keyword is used to define variables that originate outside of the TS scope, e.g. in a global
//  context from a library or <script> tag

declare var someLibraryVariabel;


// Conditional types:

type ReturnTypeForMyFunction<Input> =
  Input extends string ? Name :
  Input extends number ? age : 
  Input extends boolean ? check :
  never;

function getSomeInfo<T extends string | number | boolean>(info: T): ReturnTypeForMyFunction<T> {
  // ...
} 


type Exclude<T, U> = T extends U ? never : T; // Exclude U-Likes from T
type Extract<T, U> = T extends U ? T : never; // Extract U-Likes from T


type T1 = Exclude<string | number | (() => void), Function>; string | number
type T1 = Extract<string | number | (() => void), Function>; () => void

type NonNullable<T> = Exclude<T, null | undefined>;

// Extending the window object with new properties:
declare global {
  interface Window { 
    someNewProp: any
    orSomeString: string
  }
}
