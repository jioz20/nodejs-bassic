//ES6 Class

//Bắt buôc phải đúng theo quy luật
'use-strict';

class Person { 
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName()
    {
        console.log(this.firstName + " " + this.lastName);
    }
}

var a = new Person("Nguyễn", "Trí");
var b = new Person("Minh", "Tuân");
a.sayName();


// console.log(a.__proto__);

