var util = require("util");

function Person()
{
    this.firstName = "Nguyễn";
    this.lastName = "Trí";
}
Person.prototype.sayName = function()
{
    console.log("Hello " + this.firstName + " " + this.lastName);
}
util.inherits(Student, Person);


function Student()
{
    // console.log(this); hàm này rỗng

    Person.call(this); //Lấy tất cả các giá trị thuộc về person
    //Sau khi dùng call thì các giá trị trong this có giá trị
    console.log(this);


    this.idStudent = "123";
}



var st = new Student(); 
st.sayName();