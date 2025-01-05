let cont1 = {
    name: 'Sean James',
    AccName: 'United Oil UK.',
    phone: '654654',
    country: 'UK',
    title: 'COO'
}


//get the element
let output = document.getElementById('output');
let outputMessage = '<dl>';

//for in loop give us keys of object one by one.
//we can get the value using object[key]
for (let key in cont1) {
    console.log('key:', key);
    console.log('value:', cont1[key]);

    outputMessage += '<dt> ' + key + '</dt>'
    outputMessage += '<dd> ' + cont1[key] + '</dt>';
}

outputMessage +='</dl>'

output.innerHTML = outputMessage;


let colors = ['red', 'yellow', 'aqua', 'brown', 'orange', 'green'];
for (const onecolor of colors) {
    console.log('onecolor:', onecolor);
}
let allDescription = document.getElementsByName('description');//array of elements
for (const element of allDescription) {
    element.style.backgroundColor = 'orange';
}





