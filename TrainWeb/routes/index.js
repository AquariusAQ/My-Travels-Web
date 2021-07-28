var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();
var recordIP = require('../scripts/recordIP');

/* GET home page. */
router.get('/', function(req, res, next) {
  /*if (recordIP.start == false) {
    recordIP.startRecordIP();
  }
  recordIP.recordIP(req.ip.match(/\d+\.\d+\.\d+\.\d+/)[0]);*/
  res.sendFile(path.join(__dirname, '../public/mainpage.html'));
});

router.get('/maimai', function(req, res, next) {
  /*if (recordIP.start == false) {
    recordIP.startRecordIP();
  }
  recordIP.recordIP(req.ip.match(/\d+\.\d+\.\d+\.\d+/)[0]);*/
  res.sendFile(path.join(__dirname, '../public/maimai/maimai.html'));
});

router.get('/favicon.ico', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../resource/favicon.ico'));
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
