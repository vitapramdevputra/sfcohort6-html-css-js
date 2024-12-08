//initialization
let x = 1;
//1 < 10 ==> true

let arr1 = [];
//while condition
while (x <= 10) { //10 <= 10 ===> true
    arr1.push('Hello ' + x);
    x++; //increment or decrement.
}
//9
//10
//11

console.log('arr1:', arr1);


console.log('--FOR LOOP--');


//for(initialize; condition; increment/decrement)

// for (let y = 0; y <= 15; y++){
//     console.log('cool ' + y);
// }

for (let i = 0; i < 10; i++){
    //print the array one by one.
    console.log('arr1[i]:', arr1[i]);
}

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

let filterContacts = []; //if name starts from 'A' add the object here.

//traditional for loop. 
//or For i loop.
for (let i = 0; i < 5; i++){
    let cname = contacts[i].name;
    console.log('cname:', cname);

    if (cname.startsWith('A') || cname.startsWith('a')) {
        filterContacts.push(contacts[i]);
    }
}

console.log('filterContacts:', filterContacts);