let employee = {
    empId: '111',
    firstName: 'John',
    lastName: 'Wick',
    baseSalary: 10000,
    taxRate: 0.10,

    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },

    netSalary: function () {
        let taxAmount = this.baseSalary * this.taxRate;
        return this.baseSalary - taxAmount;
    }
}

console.log('employee:', employee);

console.log('employee.fullName():', employee.fullName());
console.log('employee.netSalary():', employee.netSalary());

let employee2 = {
    empId: '222',
    firstName: 'Wick',
    lastName: 'Wilson',
    baseSalary: 20000, //20000*0.2 = 4000
                    //20000-4000 => 16k
    taxRate: 0.20
}

console.log(employee2);
console.log(employee.fullName.call(employee2));
console.log(employee.netSalary.call(employee2));

console.log(employee2);
console.log('employee2 fullname using apply: ', employee.fullName.apply(employee2));
console.log('employee2 netSalary using apply: ', employee.netSalary.apply(employee2));

let employee3 = {
    empId: '222',
    firstName: 'John',
    lastName: 'Wilson',
    baseSalary: 15000,
    taxRate: 0.15
}

console.log(employee3);
console.log(employee.fullName.call(employee3));
console.log(employee.netSalary.call(employee3));

let emp3Salary = employee.netSalary.bind(employee3);

console.log('emp3Salary()', emp3Salary());

console.log('========APPLY=========');

let Emp = {
    empId: '111',
    firstName: 'John',
    lastName: 'Wick',
    baseSalary: 10000,
    taxRate: 0.10,

    fullName: function (city, country) {
        return this.firstName + ' ' + this.lastName + ' (' + city + ', ' + country + ')';
    }
}

console.log('EMP fullname: ', Emp.fullName('Boston', 'USA'));

//in call we directly pass parameters comma separated.
console.log('Employee2 ', Emp.fullName.call(employee2, 'Paris', 'France'));
//in apply we pass Array of parameters.
console.log('Employee2 ', Emp.fullName.apply(employee2, ['Paris', 'France']));


console.log('----------- BIND -------------');

let EmpBind = {
    empId: '111',
    firstName: 'John',
    lastName: 'Wick',

    fullName: function () {
        let ouput = document.getElementById('output');
        let msg = this.firstName + ' ' + this.lastName;
        //ouput.innerText = msg;
        return msg;
    }
}

setTimeout(() => {
     let ouput = document.getElementById('output');
     ouput.innerText = EmpBind.fullName();
}, 3000);

let display = EmpBind.fullName.bind(EmpBind);
setTimeout(() => {
    let ouput = document.getElementById('output');
    ouput.innerText = display();
}, 2500);