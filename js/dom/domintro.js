function redcolor() {
    debugger;
    document.body.style.color = 'red';
    document.body.innerHTML = '<h1>DOM is easy.<h1>';
}

function bgcolor() {
    document.body.style.background = 'black';
}

setTimeout(redcolor, 4000);//4000 milliseconds
setTimeout(bgcolor, 3000);