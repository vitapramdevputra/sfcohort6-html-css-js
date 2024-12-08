//if else conditions is used to decide if we want to execute a piece of code or not.

let hungry = 'Maybe';// or No

//print eat if hungry is 'Yes'.
//print sleep if hungry is 'No'.


if (hungry === 'Yes') {
    console.log('EAT NOW.');
}

if (hungry === 'No') {
    console.log('SLEEP');
}

//comparision with string is case sensitive
if (hungry === 'Maybe') {
    console.log('Drink.');
}


//thirsty = "Yes" => drink water. 
//anything else => 'breathe'

console.log('----IF/ELSE----');

let thirsty = "";

let emptyStr = '';//false
let str = 'ab';//any non empty string is true
let zero = 0;//false
let one = 1;//truthy (any other number apart from 0 is true)
let und; //false
let n = null; //false

let x = 'a' * 3;
console.log('x:', x); //NaN is falsy

//we can write boolean, string, number, any variable inside IF condition.
//string -> empty string is FALSE.
//string -> non-empty string is TRUE.
//number -> 0 is FALSE.
//number -> non zero number is TRUE.
//null, undefined are FALSE.
//non-null, not undefined is TRUE (if not zero, not empty string, or false)

if (x) {
    console.log('Drink water');
} else {
    console.log('Nothing. Breathe maybe');
}


//&& -> and
//|| -> OR

//It is Sunday AND you have BOA credit card -> then you get discount.
let day = 'Sunday';
let cc = 'BOA';

//t && t ==> true
//t && f ==> false
//f && t ==> false
//f && f ==> false
if (day == 'Sunday' && cc == 'BOA') {
    console.log('discount');
}

//if it is your birthday OR your invoice is more than $200 -> then you get 10% discount
let birthday = true;//boolean variable
let amount = 210;

//birth is true OR amount > 200 -=> 10%

//t || t => true
//t || f => true
//f || t => true
//f || f => false

if (birthday || amount > 200) {
    console.log('10% instance discount. ENJOY your life.');
} else {
    console.log('NO DISCOUNT.');
}






let x1 = 15;
let x2 = 30;
let x3 = 60;


let b1 = (x1 > x2) && (x3 > x2); 
console.log('b1:', b1);

let b2 = (x1 > x2) || (x3 > x2);
console.log('b2:', b2);


let b3 = ((x1 > x2) && (x3 > x2)) ||  (x3 > (x1+x2));
console.log('b3:', b3);




// let birthYear = prompt('Birth Year: ', '');

// if (birthYear == '') {
//     alert('NOT BORN');
// }
// else if (birthYear <= 1964) {
//     alert('Baby Boomer');
// } else if (birthYear > 1964 && birthYear <= 1980) {
//     alert('Gen X it is.');
// } else if (birthYear > 1980 && birthYear <= 1996) {
//     alert('millenial');
// } else if (birthYear > 1996 && birthYear <= 2012) {
//     alert('Gen z');
// } else if (birthYear > 2012) {
//     alert('alpha');
// }

//empty => NOT BORN YET.
//boomers (<1960)
//gen x (1960 to 1983)
//millenials (1984 to 1996)
//gen z (1996 to 2009)
//alpha (2009+)


//amount  < 100 => no discount
//amount > 100 and < 200 => 5%
//amount > 200 and < 500 => 10%
//amount > 500 => 15% 

let amount1 = prompt('Amount?', '');
//if we give minus amount then currently it is priting 'No Discount for you'.
//it should Print "Amount must be more than zero. Invalid amount."

if (amount1 <= 0) {
    console.log("Amount must be more than zero. Invalid amount.");
} else if (amount1 > 0 && amount1 < 100) {
    console.log('No Discount for you');
} else if (amount1 > 100 && amount1 <= 200) {
    console.log('5% discount. So final amount is  ', (amount1 - amount1 * 0.05));
} else if (amount1 > 200 && amount1 <= 500) {
    console.log('10% discount. So final amount is  ', (amount1 - amount1 * 0.1));
} else if (amount1 > 500) {
    console.log('15% discount. So final amount is  ', (amount1 - amount1 * 0.15));
}