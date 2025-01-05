function displayWrong() {
    console.log('dw');
    let pr1 = new Promise(function (success) {
        //fake timeout. 
        setTimeout(() => { success('Fake Timeout JS') }, 3000);
    })
    let o2 = document.getElementById('output2');
    o2.innerText = pr1;
}





async function display() {
    console.log('d');
    let pr1 = new Promise(function (success) {
        //fake timeout. 
        setTimeout(() => { success('Fake Timeout JS') }, 3000);
    })
    let o2 = document.getElementById('output1');
    o2.innerText = await pr1;
}

console.log('a');
displayWrong();
display();
console.log('b');