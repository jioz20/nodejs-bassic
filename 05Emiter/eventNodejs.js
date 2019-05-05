var Emitter = require("events");
var eventConfig = require("./config").event;

var emt = new Emitter();

//Bắt sự kiện là dùng on
emt.on(eventConfig.BAD_SCORE, function(){
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
        emt.emit(eventConfig.BAD_SCORE); //Phát sự kiện
    }
    else
    {
        emt.emit(eventConfig.GOOD_SCORE);
    }
}