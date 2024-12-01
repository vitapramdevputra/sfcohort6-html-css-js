let contact1 = {
    name: 'Andy Young',
    AccName: 'Dickenson Plc',
    phone: '98765461'
};

console.log('contact1:', contact1);

contact1.email = 'andy@gmail.com'; //add/edit a property

console.log('contact1 again:', contact1);

delete contact1.phone; //delete phone property

console.log('contact1 again and again:', contact1);

console.log('phone in : ', "phone" in contact1)
console.log('name in : ', "name" in contact1)
console.log('AccName in : ', "AccName" in contact1)
console.log('email in : ', "email" in contact1)
console.log('country in : ', "country" in contact1)
