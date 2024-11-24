console.log('a:', a);
//console.log('x:', x); //error.  It will stop the CODE right here.
console.log('external JS file loaded');
console.log('Some more text.');

//variable -> it can vary or it can change.
let x = 15;
console.log(x);

x = 55; //changing the value of variable x
console.log('x:', x);

x = 'right?'
console.log('x is changing. ' + x);


var a = 99;
console.log(a);

let b; //creating the variable, but NOT defining it (not setting the value)
console.log('b ==> ' + b);



//Two ways to create variables.
let w; //1. let -> we can use the variable ONLY after creation. USED A LOT, A LOT.
var q; //2 var (old way) -> we can use the variable ANYWHERE. Used Less nowadays
console.log('w:', w);
console.log('q:', q);
//how to assign value to a variable? we use equal sign. 
w = 55;
q = 66;
console.log('w:', w);
console.log('q:', q);

let p;
console.log('p:', p); //undefined
p = null; //null
console.log('p:', p);
//null and undefined are different in JS.

console.log('-------------------------------');
console.log('-------------------------------');


let x1 = 15;
let y1 = 25;

let z1;

z1 = x1 + y1; 
console.log('z1:', z1);

z1 = x1 / y1;
console.log('z1:', z1);

z1 = y1 / x1;
console.log('z1:', z1);

z1 = x1 * y1;
console.log('z1:', z1);

z1 = y1 % 7; //find remainder
console.log('z1:', z1);

//modulo -> find remainder
//15/2 => remainder 1