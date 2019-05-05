var util = require("util");
var name = "Hoa";
var message = util.format("Hello %s", name); //Xuất ra dạng thông tin có thời gian

util.log(message);

console.log(message);

var a = {};

// var a = new Array(); || a = [];
if(util.isArray(a))
    console.log("Có tổn tại");
else
    console.log("Không tồn tại");


// ES6
var arr = [4,5,1,2,5];
for(var item of arr)
{
     if(item[3] === 1)
        console.log(item[3]);   //Không tồn tại
}


var a = 7   ;
console.log(a, a == 7); //True

if(arr[0] == 4)
    console.log("Đúng");
else 
    console.log("Sai");




    //Template Literal
var Person = { 
    name : "Trí",
    old : "20" 
}

console.log(`Tôi tên là ${Person.name} năm nay tôi ${Person.old} tuổi và có cả dấu "nháy đôi nè" + luôn 
xuống dòng`);