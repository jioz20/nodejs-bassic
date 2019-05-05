// fs
var fs = require("fs");


//Đọc file đồng bộ: có nghĩa là xử lý tuần tự
var content = fs.readFileSync(__dirname + "/readme.txt", "utf8");

console.log(content);



//Đọc file bất đồng bộ: có nghĩa là xử lý không tuần tự

var content2 = fs.readFile(__dirname + "/readme.txt", "utf8", function (err, data)
{
    console.log(data + err);
});
