var greet = require("./language.json");
var say = function()
{ 
    console.log(greet.en);
}

module.exports = say;