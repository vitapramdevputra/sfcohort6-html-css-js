//write the code to create an array with first name of everybody who is in session.
let arrayNames = ['Vitap', 'Sean', 'Firuza', 'Sara', 'Zahir', 'Merve'];
console.log('arrayNames:', arrayNames);

arrayNames.push('Diora');//adding element to the end of array.
console.log('*** arrayNames (push): ', arrayNames);


arrayNames.pop(); //remove from end
console.log('arrayNames (pop) ', arrayNames);

arrayNames.push('Diora');//adding element to the end of array.
console.log('arrayNames (again): ', arrayNames);

arrayNames.shift(); //remove from start
console.log('arrayNames (shift) ', arrayNames);

arrayNames.unshift('Vitap');//add element at 0 position
console.log('arrayNames (unshift): ', arrayNames);


/*
    ADDING => Push (END), Unshift (START)
    REMOVING => Pop (END), Shift (START)
    
    Shift start remove
    Pop end remove
    Push end add
    Unshift start add
*/


let names1 = arrayNames.slice(0, 3); //from 0 index to 2 index
console.log('names1:', names1); 
let names2 = arrayNames.slice(3, 7);
console.log('names2:', names2);

let names3 = arrayNames.slice(-5, -1);
console.log('names3:', names3);

            //.splice(index, numberOfElementsToRemove, 'add1', 'add2')
let names4 = arrayNames.splice(2, 2, 'Salesforce');//removing elements from original array
console.log('names4 (splice):', arrayNames);

let names5 = arrayNames.splice(5, 0, 'Yoll', 'HTML');
console.log('names5 (splice):', arrayNames);


let arr1 = ['a', 'b'];
let arr2 = ['c', 'd', 5, 10];
console.log('arr1:', arr1);
console.log('arr2:', arr2);

let arr3 = arr1.concat(arr2);//firstArray.concat(secondArray)
let arr4 = arr2.concat(arr1);

console.log('arr3:', arr3);//arr3: (6) ['a', 'b', 'c', 'd', 5, 10]
console.log('arr4:', arr4);//arr4: (6) ['c', 'd', 5, 10, 'a', 'b']




console.log('-----------------');


let arrayNames2 = ['Vitap', 'Sean', 'Firuza', 'Sara', 'Zahir', 'Merve'];

let result1 = arrayNames2.includes('Sean');
console.log('result1:', result1); //true. Because 'Sean' is present in arrayName2 array

let result2 = arrayNames2.includes('John');
console.log('result2: ', result2);

let result3 = arrayNames2.includes('merve');
console.log('result3: ', result3); //false. because case sensitive.


let indexSean = arrayNames2.indexOf('Sean');
console.log('indexSean:', indexSean); //1

let indexSara = arrayNames2.indexOf('Sara');
console.log('indexSara:', indexSara); //3

let indexfiruza = arrayNames2.indexOf('firuza'); //case sensitive -- no such element present. So -1
console.log('indexfiruza:', indexfiruza);


//--------------------------
console.log('-----------------');

let array7 = [20, 50, 70, 90];
console.log(array7);

//another way to create an array
    //new ClassName() -> this means we are USING a constructor.
let array8 = new Array(200, 500, 700, 'Hundreds', 'Thousands');
console.log('array8:', array8);

//--------------------------
console.log('-----------------');

let array9 = ['noodles', 'fried rice', 'samosa'];
let array9K = array9.keys();
let array9E = array9.entries();

console.log('array9k:', array9K);
console.log('array9E:', array9E);

//for loop
for (let eachKey of array9K) {
    console.log('eachKey:', eachKey);
}
for (let eachEntry of array9E) {
    console.log('eachEntry: ', eachEntry);
}



//--------------------------
console.log('-----------------');


function greet(name) {
    console.log('Hello ' + name);
}

greet('Plus');

function welcome(name) {
    let s = 'Welcome ' + name + ', to JavaScript Session';
    return s; //return the value form this function.
    //return should be written at the END of function.
}

let w2 = welcome('Tom');
console.log('w2:', w2);


function add5(num) {
    let x = num + 5;
    return x;
}


let num10 = add5(10);
console.log('num10:', num10);

//we pass a number -> return True is number is greater than 5 else return false
function greaterThan5(num) {
    return (num > 5); //10 > 5 => true. 4 > 5 => false
}


let array51 = [-2, 4, 3, 5, 15, 10, 11, 0, 1, 7];
//find the values from this array which are greater than 5.
let a = array51.find(greaterThan5);//find(functionName)
console.log('a:', a);

let b = array51.find(greaterThan5);
console.log('b:', b);

//every
let evr = array51.every(greaterThan5); //check each element. If all of them are true, then FINAL value is TRUE. Any one of them is false then the answer will be false.
console.log('evr:', evr);

//--------------------------
console.log('-----------------');

function greaterThan100(num) {
    return (num > 100);
}


let array60 = [50, 25, 200, 500];
let array70 = [300, 600, 800, 900, 750];

let p = array60.every(greaterThan100);//p will be TRUE if all the elements of array60 are greater than 100. Else it will be false.
console.log('p:', p);//false


let q = array70.every(greaterThan100);
console.log('q:', q);//true -> since all the elements in array70 is greater than 100.
