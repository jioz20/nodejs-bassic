function sayNamMoi()
{
    console.log("Chúc mừng năm mới.");
}

function saying(fn)
{
    fn();
    console.log(" Năm mới đầy vui vẻ");
}

var sayingnot = function(fn)
{
    fn(sayNamMoi);
    console.log("Good bye");
}


// sayingnot(saying);


sayingnot(function()
{
    console.log("Hello nodejs");
});


function cong(a,b)
{
    return a + b;
}

var kq = function congThem()
{
    return cong(2,4) + 4;
}

console.log(kq());



/* Phần 1*/
var tem = require("./hello");

console.log(tem(4,5));
