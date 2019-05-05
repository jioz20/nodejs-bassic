//Phần 3 - Prototype

function Person (name, old)
{
    this.name = name; 
    this.old = old;
}

Person.prototype.getName = function()
{
    return this.name;
}

Person.prototype.getOld = function()
{
    return this.old;
}

Person.prototype.getPass = function()
{
    return this.pass;
}
Person.prototype.pass = "123456";

//Chỉ lấy giá trị name chứ không lấy giá trị pass nên giá trị pass sẽ là undefine
function User(name)
{
    return this.name = name;
}

User.prototype = new Person();
var person = new Person("Tri", "20");
var user = new User("Tu", "21");

console.log(user.getName());
console.log(user.getOld());
console.log(user.getPass());


Date.prototype.ClockVN = function()
{
    var yyyy = this.getFullYear();
    var mm = this.getMonth() + 1;
    var dd = this.getDate();
    return dd + "/" + mm + "/" + yyyy;
}

var now = new Date();
var holiday = new Date(2019, 1, 24)


console.log(now.ClockVN());

console.log(holiday.ClockVN());