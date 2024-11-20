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
];
console.log(contacts);


let array1 = ['a', 'b', 'c', 'd', 10, true, contacts[0].name];
console.log('** array1:', array1);
let array1String = array1.toString(); //convert the array to string.
console.log('*** array1String:', array1String);

let outputString = 'a,b,c,d,10,true,Andy Young';

let array1join1 = array1.join(' - ');
console.log('array1join1:', array1join1);

let array1join2 = array1.join(' & ');
console.log('array1join2:', array1join2);

let ex = 'this is a string.';


//we can have ANY element in an array.
    //string, numbers, object, boolean, null
let arr6 = ['shoe', 'dress', 12]; // is this allowed?

let arr7 = [45, 12, 15, 99, 77]; //is this allowed?


//we want to create variable to store firstname, lastname, age
let firstName = 'John';


let devLanguages = ['html', 'css', 'javascript'];



