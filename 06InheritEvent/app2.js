var Emit = require("events");
var Util = require("util");

function Person()
{
     this.Name = "Nguyễn Trí";
}

//Person kế thừa hàm Emit
Util.inherits(Person, Emit);

Person.prototype.GetMessage = function (data)
{
    this.emit("ChaoDiNe", data ); //Phát sự kiện
    // console.log(this);
    console.log(data + " " + this.Name);
    
}

var ps = new Person();

// Bắt sự kiện
ps.on("ChaoDiNe", function(data){
    console.log("Hello Everyone !", data);
});

ps.GetMessage("Noo Noo");
