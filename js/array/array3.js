let names = ['a', 'b', 'c'];
console.log('names:', names);


//first  -> value of each element in array

//second -> index of that element

//third  -> array itself.


function greet(val, ind, arr) {
    console.log('Hey ' + val + ' - index is ' + ind + '. ARR => ' + arr);
}

function getlength(x,y,z) {
    console.log('x:', x);//Sean
    console.log('y:', y);//0
    console.log('z:', z);//array
    console.log(' length of ' + x + ' is ' + x.length)
    console.log('z[y] => ' + z[y]);
    //array[index] = Sean - 4
    z[y] = x + ' - ' + x.length;
    console.log('------------');

    
}


names.forEach(greet);
//forEach method will take first element, its index , and the array itself ('a',  0,['a', 'b', 'c'] ) -> it will pass this three parameters in greet function. 


let names2 = ['Sean', 'Firuza', 'Sara', 'Zahir', 'Merve', 'Diora'];
console.log('******');
names2.forEach(getlength);
//if we want to use forEach -> the function will have 3 parameters
//forEach method will automatically pass one by one values from array in the function
//  first parameter  -> element from the array (from 0 to n)
//  second parameter -> index of that element.
//  third parameter  -> array itself


let num1 = [5, 2, 10, 5, 20, 50, 45, 84, 99];



let a = 3;
let b = 1;
let c = 2;

console.log('num1[5]:', num1[5]); //50
console.log('num1[7]:', num1[7]); //84
console.log('num1[1]:', num1[1]); //2
console.log('num1[2]:', num1[2]); //10

console.log('num1[b]:', num1[b]); //2
console.log('num1[c]:', num1[c]); //10
console.log('num1[a]:', num1[a]); //5
num1[a] = 50;



//new array should be 10,4,20,10

function double(x, y, z) {
    //x = 5, y = 0, z =array
    z[y] = x * 2;
}

num1.forEach(double);
console.log('** num1: ', num1);


console.log('*************');
let num2 = [5, 2, 10, 5, 10, 2, 5, 10, 15];

console.log('num2.indexOf(10):', num2.indexOf(10));

console.log('num2.lastIndexOf(10):', num2.lastIndexOf(10));


console.log('----------------FILTER-------------');

function greaterThan5(item) {
    return (item > 5);
}
function smallerThanOrEqual5(item) {
    return (item <= 5);
}
let num3 = [-5, -2, 0, 1, 3, 9, 12, 5, 2, 10, 5, 10, 2, 5, 10, 15, 20];
console.log('num3:', num3);
let newArray1 = num3.filter(greaterThan5);
console.log('newArray1:', newArray1);

let newArry2 = num3.filter(smallerThanOrEqual5);
console.log('newArry2:', newArry2);



console.log('----------------MAP-------------');

//triple
function triple(item) {
    return item * 3;
}

let xy1 = triple(6);
console.log('xy1: ', xy1);//what will this return?

//create an array by multiplying each element with 3

let num4 = [2, 4, 6, 12, 15, 8, 7, 9];

let newArray3 = num4.map(triple);
//2 -> triple(2) => 6
//4 -> triple(4) => 12
//6 => 18
//12 => 36
//15 => 45
//8 => 24
//7 => 21
//9 => 27
console.log('num4:', num4);
console.log('newArray3:', newArray3);


function tenth(item) {
    return item * 10;
}

let newArray4 = num4.map(tenth);
console.log('newArray4:', newArray4);

//array of contact objects
let contacts = [
    {
        name: 'Andy Young',
        AccName: 'Dickenson Plc',
        phone: '98765461'
    },
    {
        name: 'Avi Green',
        AccName: 'United Oil Corp.',
        phone: '654654654'
    },
    {
        name: 'Ashley James',
        AccName: 'United Oil UK.',
        phone: '987654321'
    }
    ,
    {
        name: 'Sean James',
        AccName: 'United Oil UK.',
        phone: '654654'
    },
    {
        name: 'Sara Blue',
        AccName: 'United Oil Corp.',
        phone: '454646464'
    }
];
console.log(contacts);

console.log(contacts[2]);
console.log(contacts[2].AccName);

//create a new array with JUST names from contacts
function getNames(item) {
    return item.name;
}

let allNames = contacts.map(getNames);
console.log('allNames:', allNames);