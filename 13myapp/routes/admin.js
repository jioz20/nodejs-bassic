var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");


mongoose.connect("mongodb://nodetest:nguyentri1998@ds129233.mlab.com:29233/nguyentri1998", { useNewUrlParser: true });

var Schema = mongoose.Schema;
var personSchema = new Schema({
  firstName : String,
  lastName : String,
  address : String
});

var Person = mongoose.model("Person", personSchema);



/* GET admin listing. */
router.get('/', function (req, res, next) {
  // var hoa = Person({
  //   firstName: "Mai",
  //   lastName : "Hoa",
  //   address : "Ninh Thuận"
  // });
// hoa.save(function(err){
//     if(err) throw err;
//     console.log("Hoa created ...");
//   });

  res.send(`<h1>Trang này của admin</h1>`);
});


router.get('/dangky', function(req, res, next){
  res.render('info', {title: "ĐĂNG KÝ THÔNG TIN"});
});

router.post('/infox', function(req, res, next){
  var name  = Person({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.addr
  });

  name.save(function(err){
    if(err) throw err;
    console.log("Created success");
  });

  var tt = `ĐĂNG KÝ THÀNH CÔNG ${req.body.firstName} ${req.body.lastName}`;
  res.render('info', {title: tt})
});

router.get('/test/:name', function(req, res, next){
  res.send(`Đây là admin ${req.params.name}`)
});



module.exports = router;