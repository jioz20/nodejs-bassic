var http = require("http");
var fs = require("fs");

//Khởi tạo server
http.createServer(function(req, res)
{
    //Trả về mã lỗi và hiển thị dạng văn bản
    res.writeHead(200, {'Content-Type': 'text/html'});

    //Đọc file bất đồng bộ
    var file = fs.readFile(__dirname + "/index.html", "utf8", function (err, data){

        var name = "Nguyễn Trí";

    
        //Đưa dữ liệu vào trong html
            data = data.replace("{NAME}", name);
       

        res.end(data);
    });
  
    // res.end("Hello World !!!");

    

}).listen(88);