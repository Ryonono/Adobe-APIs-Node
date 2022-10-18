const fs = require('fs');

let rawdata = fs.readFileSync('data/data.json');
let papers = JSON.parse(rawdata);

// 初め、Unexpected end of JSON input
//     at JSON.parse (<anonymous>)
//     at Object.<anonymous> (/Users/nonogakiryo/Desktop/pdf-app/routes/index.js:4:19)
// というエラーが出ていて何かと思ったが、data.jsonにあらかじめデータを入れておく必要があった

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', { title: 'Embedding PDF', papers: papers });
});

module.exports = router;
