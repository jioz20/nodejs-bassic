var http = require("http");
var fs = require("fs");

//Khởi tạo server
http.createServer(function(req, res)
{
    //Trả về mã lỗi và hiển thị dạng văn bản
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    
    fs.createReadStream(__dirname + "/index.html").pipe(res);
    
}).listen(88);