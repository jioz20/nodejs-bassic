
// Phần 2 - Đối tượng


var person = { 
    firstName : "Nguyễn",
    lastName : " Trí",
    sayHello : function()
    {
        console.log("Hello " + this.firstName + this.lastName);
    }
}

person.sayHello();
console.log("Tên là: " + person.firstName);

var keyName = "lastName"; 
console.log("Họ là: " + person[keyName]);