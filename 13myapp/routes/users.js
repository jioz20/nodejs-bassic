var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('sum', {soA:'', soB: '', tong: ''});
});


router.post("/sum", function(req, res, next){
  var temp = parseInt(req.body.soA) + parseInt(req.body.soB);
  res.render('sum', {soA: req.body.soA, soB: req.body.soB, tong: temp});
});


router.get('/personss/:name', function(req, res, next) {
  res.send(`<h1>Hello ${req.params.name}</h1>`);
});

router.get('/person', function(req, res, next){
  res.send(`<h1>Khởi tạo thành công</h1>`);
});
module.exports = router;
