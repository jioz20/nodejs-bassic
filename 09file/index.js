var fs = require("fs");

//Doc file du lieu
var readable = fs.createReadStream(__dirname + "/readme.txt",
{
    encoding: "utf8",
    highWaterMark: 1024 //byte
});


//Khởi tạo file 
var writable = fs.createWriteStream(__dirname + "/readonlycp.txt");



//Chunk là một đoạn mảnh dữ liệu được truyền qua stream
readable.on("data", function(chunk)
{
    console.log(chunk.length);


    writable.write(chunk); //Viết giá trị vào file
});



//PIPE: là cơ chế kết nối giữa 2 stream
var writable2 = fs.createWriteStream(__dirname + "/readonlycpp.txt");
readable.pipe(writable2);


var zlib = require("zlib");
var compress = fs.createWriteStream(__dirname + "/readmeCopy.txt.rar");
var gzip= zlib.createGzip();

readable.pipe(gzip).pipe(compress);