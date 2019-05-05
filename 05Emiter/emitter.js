// Emiiter Event
function Emitter()
{
    this.events = {}; // Lưu giữ sự kiện bổ sung
}
Emitter.prototype.on = function (type, listener)
{
    //Type : kiểu, listener: gọi lại khi sự kiện kích hoạt
    this.events[type] = this.events[type]  || []; // Có thể push giá trị vào or mảng rỗng
    this.events[type].push(listener);
}

// Hàm kích hoạt

Emitter.prototype.emit = function(type){
    if(this.events[type])
    {
        this.events[type].forEach(function(listener){
            listener(); // Duyệt và gọi mảng
        });
    }
}


// Xuất hàm 
module.exports = Emitter;