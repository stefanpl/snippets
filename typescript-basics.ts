// Video packed with more info about TS than any sane person can handle:
// https://www.youtube.com/watch?v=hDACN-BGvI8


// Sometimes you know more about the type than the compiler.
// In this case, you can explicitly state the type of any variable by using either of these constructs:
let someValue: any = 'woof';
let strLength: number = (someValue as String).length;
// alternative syntax:
// let strLength: number = (<String>someValue).length;


interface ExampleData {
  name: string,
  description?: string,
  tags?: string[],
  modifiedTimestamp?: number,
}

// Creating a dictionary
let persons: { [id: string] : ExampleData; } = {
  some: {
    name: 'woof',
  },
  another: {
    name: 'the alternative one',
    tags: ['some', 'other', 'thingy'],
  }
};


type ValidKey = string | number;
// To use more elaborate mappings, a Record<key, entry> can be used!
let whatever: Record<ValidKey, ExampleData> = {};

// Avoid 'before initialized' warnings when using a try-catch:
let x !: number;
try {
  x = getPropertyFromObject({some: 99}, 'some');
} finally {
  // …
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
  Input extends string ? string :
  Input extends number ? number :
  Input extends boolean ? void :
  never;

function getSomeInfo<T extends string | number | boolean>(info: T): ReturnTypeForMyFunction<T> {
  switch (typeof info) {
    case 'string':
      return;
    case 'boolean':
      return;
    case 'number':
      // Todo: find out why this needs a type assertion
      return 100 as ReturnTypeForMyFunction<T>;
  }
} 


type MyExclude<T, U> = T extends U ? never : T; // Exclude U-Likes from T
type MyExtract<T, U> = T extends U ? T : never; // Extract U-Likes from T


type T1 = MyExclude<string | number | (() => void), Function>; // string | number
type T2 = MyExtract<string | number | (() => void), Function>; // () => void

type MyNonNullable<T> = MyExclude<T, null | undefined>;

// Extending the window object with new properties.
// Only works in certain environments, so let's ignore the error.
// @ts-ignore
declare global {
  interface Window { 
    someNewProp: any
    orSomeString: string
  }
}

// Optional color and witdth properties and any number of string properties.
// This will avoid exess checks ('Object literal may only specify known properties …')
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

// Functions can also have interfaces
interface InterfaceForMyFunction {
  (source: string, subString: string): boolean;
}
// Note: the name of the params does not need to match
const woof: InterfaceForMyFunction = (haystack, needle) => {
  return haystack.includes(needle);
}

enum Gender {
  male,
  female,
  other,
}
const enumsAreNumbers: number = Gender.female;
const genderAsString: string = Gender[Gender.other];

// readonly properties avoid re-assigning!
interface Person {
  readonly name: string;
  readonly gender: Gender;
  dollarsInTheBank: number;
}

// Only dollarsInTheBank can be changed with Person objects!
const me: Person = {
  name: 'Panepeter',
  gender: Gender.male,
  dollarsInTheBank: 100,
}
// At this point, only dollarsInTheBank can be changed.

// TODO: continue at https://www.typescriptlang.org/docs/handbook/classes.html
