let o2 = document.getElementById('output');
o2.innerHTML = 'Hello 1 <br>';
o2.innerHTML += 'Hello 2 <br>';
setTimeout(hello, 1000); //wait for given time and then call the function

//setInterval(hellooo, 2000);
o2.innerHTML += 'Hello 3 <br>';



function hello() {
    let o3 = document.getElementById('output');
    o3.innerHTML += 'Hello a <br>';
    o3.innerHTML += 'Hello b <br>';
    console.log('Hello a');
    console.log('Hello b');
}

function hellooo() {
    let o3 = document.getElementById('output');
    o3.innerHTML += 'Hellooo x <br>';
    o3.innerHTML += 'Hellooo y <br>';
}

//first (sync)
//1
//2
//a
//b
//3

//second (async)
//1
//2
//3
//a
//b

//clock();
setInterval(clock, 1000);
function clock() {
    let divClock = document.getElementById('clock');

    let todayDate = new Date();
    //console.log(todayDate);

    let h = todayDate.getHours();
    let m = todayDate.getMinutes();
    let s = todayDate.getSeconds();

    divClock.innerText = h + ":" + m + ':' + s;
    
}