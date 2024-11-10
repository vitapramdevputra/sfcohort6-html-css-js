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
let array1String = array1.toString();
console.log('array1String:', array1String);

let array1join1 = array1.join(' - ');
console.log('array1join1:', array1join1);

let array1join2 = array1.join(' $ ');
console.log('array1join2:', array1join2);