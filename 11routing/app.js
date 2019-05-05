// API: Nhận hoặc trả dữ liệu bằng cách gọi URL
// URL: Là một điểm cuối endpoint dùng các giao thức POST, GET, DELETE để thực hiện chương trình

var http = require("http");
var fs = require("fs");

http.createServer(function(req, res)
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url == "/" || req.url == "/index.html")
    {        
        fs.createReadStream(__dirname + "/index.html").pipe(res);
    }
    else if(req.url == "/json")
    {
        res.writeHead(200, {'Content-Type': 'application/json'});
        var obj = {
            firstName: "Nguyễn",
            lastName: "Trí"
        }
        res.end(JSON.stringify(obj));
    }
    else 
    {
        res.end("Not found");
    }


    
}).listen(88, function(){
    console.log("Started Server");
});