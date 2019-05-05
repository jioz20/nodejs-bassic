var person = {
    firstName : "",
    lastName: " ",
    getFullName : function()
    {
        return this.firstName + " " + this.lastName;
    }
}

var forMe = Object.create(person); 
forMe.firstName = "Nguyễn";
forMe.lastName = "Trí";
console.log(forMe.getFullName());