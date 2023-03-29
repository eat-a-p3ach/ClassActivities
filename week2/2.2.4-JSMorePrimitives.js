// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let a="this is my string";
let b= 8393;
let c= false;
let d= null;
let e;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let tl= `I don't get these template literals $(a) and $(c)`
// reassign the value of the variable that references "null"
d= 14;
// print the value and its type
console.log(typeof d);
// print a variable that causes a ReferenceError
f=14;
// alter the previous line to no longer cause a ReferenceError

