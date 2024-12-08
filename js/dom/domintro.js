function redcolor() {
    debugger;
    document.body.style.color = 'red';
    document.body.innerHTML = '<h1>DOM is easy.<h1>';
}

setTimeout(redcolor, 3000);