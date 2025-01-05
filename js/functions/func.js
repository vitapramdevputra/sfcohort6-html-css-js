console.log('trying to use a function even before writing it.')
grreetings();

function grreetings() {
    console.log('hello hello:');
}

//function as expression
    //assigning function to a variable
let greety = function () {
    console.log('Welcome to developer session');
}

greety();
grreetings();


let i = 99;

console.log('i:', i);

//hoisting: use it before wrting it

//welcome(); //cannot use function expression before writing it.

let welcome = function () {
    console.log('0000 :')
}

let welcome2 = function (name) {
    console.log('welcome ' + name + ' to dev session');
}

welcome();
welcome2('Tom');


setTimeout(function (param) {
    console.log('this will be called after 2000 milliseconds... ' + param);
}, 2000, 'COHORT 6');

    (function (msg) {
        console.log('immediate invoked...' + msg);
    })('this is IMP message');

//iife
(function () {
    console.log('normal function')
})();


//normal
function greet1(name) {
    return 'Hello ' + name +', from greet1'
}
//expression
let greet2 = function (name) {
    return 'Hello ' + name + ', from greet2'
}

//arrow
let greet4 = (name) => 'Hello ' + name + ', from greet4';


console.log(greet1('Tom'));
console.log(greet2('Tom Tom'));
console.log(greet4('Tom Tom Tom'));