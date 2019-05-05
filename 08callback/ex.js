var first = function()
{
    console.log(1);
}


var second = function()
{
    setTimeout(first, 5000); //Callback. Thời gian chờ bao lâu
    console.log(2);
}

second();


//Kiến trúc không đồng bộ
function readData(callback)
{
    var person = { 
        name: "Nguyen Khang"
    }
    callback(person); 
}

//Thực thi ở 2 nơi khác nhau nhưng gọi cùng 1 hàm
readData(function(data)
{
    console.log("A: ", data);
});


//Nơi thực thi thứ 2
readData(function(data)
{
    console.log("B: ", data.name);
});


