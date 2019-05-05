var Emitter = require("./emitter");

var emt = new Emitter();

//Bắt sự kiện là dùng on
emt.on("bad", function(){
    console.log("Lêu lêu bị điểm kém");
});

emt.on("good", function(){
    console.log("Giỏi quá, điểm cao ghê");
});

//Gia tri 
var bangDiem = [5, 4, 1];

for(d of bangDiem)
{
    if(d < 5)
    {
        console.log("%s điểm nè!", d);
        emt.emit("bad"); //Phát sự kiện
    }
    else
    {
        emt.emit("good");
    }
}