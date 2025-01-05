function output1(result) {
    let o1 = document.getElementById('output1');
    o1.innerText = result;
}

function output2(result) {
    let o2 = document.getElementById('output2');
    o2.innerText = result;
}

//producing code.
let pr = new Promise(function prFunction(success, error) {
    //call the producing code (coming from salesforce or apex)

    let i = 200;

    //200 is success code
    if (i == 200) {
        success('successfully posted')
    } else {
        error('Error in posting');
    }
})


//consuming
pr.then(
    //success function
    (val) => output1(val),
    //error function
    (val) => output2(val)
)

// pr.then(
//     //success function
//     function (val) { output1(val); },
//     //error function
//     function (val) { output2(val); }
// )