function saveOutput() {
    let outputJS = document.getElementById('output');
    outputJS.innerHTML = '<h2>Default Text</h2>';

    let nameJS = document.getElementById('firstname');
    //nameJs.value is NULL
    if (nameJS.value) {
        outputJS.innerText = nameJS.value;
    }
}

let descriptionElem = document.getElementsByName('description');
let colors = ['red', 'yellow', 'aqua', 'brown', 'orange', 'green'];

for (let i = 0; i < descriptionElem.length; i++){
    descriptionElem[i].style.backgroundColor = colors[i];
}

//querySelector will select JUST the first element.
let headElem = document.querySelector('.head');

headElem.style.backgroundColor = colors[2];

//querySelectorAll will select all the elements
let headElements = document.querySelectorAll('.head');
console.log('headElements:', headElements);
for (let index = 0; index < headElements.length; index++) {
   
    headElements[index].style.backgroundColor = colors[index+2];
    headElements[index].style.color = 'White';
}

let head3 = document.getElementById('heading3');
console.log('head3.id:', head3.id);
console.log('head3.data:', head3.data);
head3.data = 'some new data';//setting from js and listening in JS then we get it.
console.log('head3.data:', head3.data);