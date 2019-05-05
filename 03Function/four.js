function Person()
{
    this.message = "Hello Four";
    this.sayFour = function()
    {
        console.log(this.message);
    }
}

//Xuất ra dạng đối tượng
module.exports = Person;