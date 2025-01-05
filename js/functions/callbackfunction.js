// function print1(result) {
//     //print the answer in output 1
//     let o1 = document.getElementById('output1');
//     o1.innerText = 'Output1: ' + result;
// }

function print2(result) {
    //print the answer in output 1
    let o2 = document.getElementById('output2');
    o2.innerText = 'Output2: ' + result;
}

//number, number, function
function sum(num1, num2, callback) {
    let r = num1 + num2;
    callback(r);
}


//in third parameter (which is expecting a function) we are passing an actual function called 'print2'
sum(5, 15, print2);
//sum(50, 150, print1);

//we can pass arrow function in third parameter (which is expecting a function)
sum(500, 200, (x) => {
    let o1 = document.getElementById('output1');
    o1.innerText = 'Output1: ' + x;
});


 