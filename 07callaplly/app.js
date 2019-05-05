var obj = {
    name: "Mai Hoa",
    sayNo : function (value1, value2){
        console.log("No noo " + this.name + " " + value1 + " " + value2);
    }
}

obj.sayNo(1, 2);

obj.sayNo.apply({}); //undefine


obj.sayNo.apply({name : "Lan Hương" }, [3, 4]); // Truyền vào tham số là một mảng các giá trị

obj.sayNo.call({name:"Bích Phương"}, 5, 6); // truyền theo thứ tự từng phần