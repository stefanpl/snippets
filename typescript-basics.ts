// Sometimes you know more about the type than the compiler.
// In this case, you can explicitly state the type of any variable by using either of these constructs:

let someValue: any = 'woof';

let strLength: number = (<String>someValue).length;
// vs.
let strLength: number = (someValue as String).length;
