// Middleware nằm giữa request và respon (nằm ở giữa 2 layer và của ứng dụng, có nhiệm vụ kết nối 2 layer lại với nhau)

var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');


var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Đọc thông tin dưới dạng json mà người dùng gửi lên 
var jsonParser = bodyParser.json();
//Sử dụng view EJS thì nó sẽ tự tìm thư mục views để dùng

// express.static Tiện ích trung gian
app.use("/assets", express.static(__dirname + "/public")); 
app.use(cookieParser());
app.set("view engine", "ejs");




//Dùng để lắng nghe kết nối đến các đường dẫn
app.use("/", function(req, res, next)
{
    console.log("URL:", req.url);
    req.date = new Date();
   
    next(); //Next: Sau khi sử dụng xong cái hàm này thì có thể dùng thêm được nữa, nhưng chỉ sử dụng được nếu đưa ra 1 đường dẫn cụ thể
});



app.get("/", function(req, res){
    // console.log(req.cookies); //Đặt tên json
    res.render("index.ejs");    

});

app.get("/json", function(req, res){
    var obj = {
        firstName: "Nguyễn",
        lastName: "Trí"
    };
    res.json(obj);
});

app.get("/sum/:id/:idt", function(req, res){
    res.cookie("AD: ", req.params.idt);   //Khó hiểu vãi lìn
        
    var temp = parseInt(req.params.id) + parseInt(req.params.idt);

    //Dùng biến S để đẩy dữ liệu sang view
    res.render("sum.ejs", {S: temp});
});

app.get("/person/:name", function(req, res){
    // truy cap vao queryString: req.query.bala... bala: là một biến để chứa giá trị

    res.render("person.ejs", {value: req.params.name, queryString: req.query.qs});
});


app.post("/login", urlencodedParser, function(req, res)
{
    if(req.body.user == "admin" && req.body.pass == "123")
    {
        res.send(`Xin chào admin`);
        console.log("Đăng nhập thành công");
    }
    else
        res.send(`Đăng nhập không thành công với tài khoản ${req.body.user} và mật khẩu ${req.body.pass}. 
        Vào ${req.date}`);
});

app.post("/loginjson", jsonParser, function(req, res)
{
    console.log("Login JSON");
});

app.listen(88);
