function Person(){
    this.message = "Hello Three";
    this.sayThree = function()
    {
        console.log(this.message);
    }
}

//Xuất ra dạng hàm.
module.exports = new Person();