//we are trying to USE a1 variable BEFORE defining (creating)
console.log('BEFORE a = ' + a1); //43
var a1 = 43;
console.log('AFTER a1        : ' + a1); //43


//console.log('printing b1 before the variable is defined b1 = ' + b1);
let b1 = 18; //creating a variable using let
console.log('printing b1 after the variable is defined b1 = ' + b1);

let x1 = 'Vitap'; //datatype => string
let x2 = 'Ramdevputra';
let x34 = 'India';

//Vitap Ramdevputra
let z1 = x1 + ' ' + x2;
console.log('z1:', ' z1');

console.log(x1 + x2);//concatenate short concat (add two or more string)
console.log(x1,x2);


let c1 = true;  //this is boolean
let c2 = false; //this is boolean
let c3 = 'true'; //is this boolean? No. Because we used ''(quotes)
let c4 = '74'; //is this number? NO. Because we used ''(quotes) 
let c5 = 74;//this is a number.
let noOfStudents = 4;
console.log('-------------');
let firstName = 'Sean';
let x3 = 'Welcome ' + firstName + ', to yoll academy . Total students are : ' + (noOfStudents + 1 + 1+ 1);
console.log(x3);

let x4 = `Welcome ${firstName}, to yoll academy. Total students are : ${noOfStudents + 1 + 1+ 1}`;
console.log(x4);



//in object we can store multiple key-value pair

//store details of the person - firstname, lastname, country, age,
let person = {
    firstName: 'John',
    lastName: 'Wick',
    country: 'USA',
    age: 45
}
console.log('person1 : ', person);
console.log('p1 firstname: ' + person.firstName);
//Name is John Wick. He/she is from USA.
let p1 = `Name is ${person.firstName + ' ' + person.lastName}. He/she is from ${person.country}`;
console.log('p1:', p1);

let person2 = {
    firstName: 'Peter',
    lastName: 'Parker',
    country: 'USA',
    age: 22
}
console.log('person2 : ', person2);
let p2 = `Name is ${person2.firstName + ' ' + person2.lastName}. He/she is from ${person2.country}`;
console.log(p2);


console.log('-----math------');
//Math is defined OBJECT in javascript.
    //PI is a constant available in Math object. Predefined variable.
console.log('Math.PI:', Math.PI); //static value
//squareroot of 144 => 12
//squareroot of 9 ==> 3
console.log('144 sqrt root: ' + Math.sqrt(144)); //12
console.log('9 sqrt root: ' + Math.sqrt(9)); //12

//rounding
//2.4 ==> 2
//2.5 ==> 3
console.log(Math.round(6.675)); //>5 after decimal SO => 7
console.log(Math.round(12.3344));//<5 after decimal SP => 12

let m1 = Math.random();
console.log(m1 * 100);
let m2 = Math.round(m1 * 100);
console.log(m2);

console.log('-----array------');

//collection of values (comma separated) is an array.
let itemsOnMyDesk = ['laptop', 'monitor', 'keyboard', 'mouse', 'pentablet', 3, 'fountain pens', 1, 'water bottle', true, false];
console.log('itemsOnMyDesk:', itemsOnMyDesk);
//collection of all person
let allPerson = [person, person2]; //array of objects
console.log('allPerson:', allPerson);

let saraNumbers = [30, 20, 50, 60, 40, 60, 30, 20,100,500];
console.log('saraNumbers:', saraNumbers);//array of numbers
console.log('want to get 50 from saraNumbers ==> ' + saraNumbers[2]);
console.log(saraNumbers[7]);

console.log(allPerson[0]);//this prints all details of first person
console.log(allPerson[0].firstName);//is this code right or wrong? It will print anything?

console.log(itemsOnMyDesk[6]);
console.log(itemsOnMyDesk[10]);

//arrayName.length
let itemsLen = itemsOnMyDesk.length; //return us TOTAL number of items in array. 
console.log('itemsLen:', itemsLen);
//last item of the array
console.log('last item of array1: ' + itemsOnMyDesk[itemsLen - 1] );

let allPersonLen = allPerson.length;
console.log('allPersonLen:', allPersonLen);
console.log('last item of array2: ', allPerson[allPersonLen - 1]);


let saraNumLen = saraNumbers.length;
console.log('saraNumLen:', saraNumLen);
console.log('last item of array3: ' + saraNumbers[saraNumLen - 1]);





