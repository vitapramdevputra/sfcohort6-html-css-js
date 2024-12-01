let x = 'apple';
var y = 'banana';
const z = 'cherry';//constant -> we cannot update constant value

console.log('x:', x);
console.log('y:', y);
console.log('z:',z);

x = 'orange';
y = 'blueberry';
//z = 'mango'; CANNOT UPDATE CONST.
console.log('x:', x);
console.log('y:', y);
console.log('z:', z);


let x1;
let _x;
let $x;
let x_y;
let x_5;


//object in JS.
let json1 = {
    firstName: 'John',
    lastName: 'Snow',
    age: 25,
    phone: '987987987'
}

//to convert Javascript OBJECT to JSON use stringify method
let jsonStr1 = JSON.stringify(json1);

console.log('json1:', json1);
console.log('jsonStr1:', jsonStr1);//{"firstName":"John","lastName":"Snow","age":25,"phone":"987987987"}

let str = '{"firstName":"John","lastName":"Snow","age":25,"phone":"987987987"}';
let obj = JSON.parse(str); //parse is used to convert json string to object.
console.log('obj:', obj);


function sampleFunction() {
    console.log('print json1 inside function:', json1);
    let first = 'HELLO HELLO';
    var second = 'AWAKE?';
}
sampleFunction();

//console.log('first:', first);
//console.log('second:', second);


console.log('----COMPARISION----');

let num1 = 10; //number (integer)
let num2 = '10'; //string

console.log('num1 == num2:', num1 == num2);//will compare value only. (datatype can be different)
console.log('num1 === num2:', num1 === num2); //value is same, but datatype is different so false.


console.log('num1 != num2:', num1 != num2);//will compare value only. (datatype can be different)
console.log('num1 !== num2:', num1 !== num2); //value is same, but datatype is different so false.

//=== & !==
num1++;
console.log(num1);
num1++; //increment by 1
console.log(num1);

let num3 = 25; //assigning 25 to num3

num3 += 10; //num3 = 25+10; => 35
console.log('num3:', num3);

num3 += 35; //35+35 => 70
console.log('num3:', num3);

let str3 = 'Hello';

str3 += ' Hello';
console.log('str3:', str3);

str3 += ' Everybody';
console.log('str3:', str3);

num3 -= 50; //70 - 50 => 20
console.log('num3:', num3);

num3 *= 5 //20 * 5 ==> 100
console.log('num3:', num3);
num3 /= 4 //100/4 => 25
console.log('num3:', num3);

num3 %= 10; //25%10 => 5
console.log('num3:', num3);

num3 %= 3;
console.log('num3 => ', num3);