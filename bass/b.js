const express = require("express");
const app = express();

app.use("/", (req, res, next)=>{
	next();
})

app.use("/add", (req, res, next)=>{
	res.send(`<h1>You want to buy website ?</h1>`)
});

app.use("/edit", (req, res, next)=>{
	res.send(`<h1>Do you want to delete website ?</h1>`)
});

app.use("/", (req, res, next)=>{
	res.send(`<h1>Welcome to my website</h1>`)
});





app.listen(3000);