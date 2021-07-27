var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile("/public/index.html");
});

router.get('/favicon.ico', function(req, res, next) {
  res.sendFile("/resource/favicon.ico");
});


router.get('/process_tickets', function(req, res, next) {
  var file = path.join(__dirname, '../data/tickets.json');
  fs.readFile(file, 'utf-8', function(err, data) {
    if (err) {
      console.log('文件读取失败：' + file);
    } else {
      res.send(data);
    }
  })
})

router.get('/process_exhibitions', function(req, res, next) {
  var file = path.join(__dirname, '../data/exhibition.json');
  fs.readFile(file, 'utf-8', function(err, data) {
    if (err) {
      console.log('文件读取失败：' + file);
    } else {
      res.send(data);
    }
  })
})


module.exports = router;
