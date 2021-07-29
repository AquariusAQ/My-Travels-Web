var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();
var recordIP = require('../scripts/recordIP');
var record = require('../scripts/recordJson');

/* GET home page. */
router.get('/', function(req, res, next) {
  /*if (recordIP.start == false) {
    recordIP.startRecordIP();
  }
  recordIP.recordIP(req.ip.match(/\d+\.\d+\.\d+\.\d+/)[0]);*/
  res.sendFile(path.join(__dirname, '../public/mainpage.html'));
});

router.get('/maimai', function(req, res, next) {
  // if (record.isRecordStarted == false) {
  //   record.startRecord();
  // }
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
});

router.get('/process_exhibitions', function(req, res, next) {
  var file = path.join(__dirname, '../data/exhibition.json');
  fs.readFile(file, 'utf-8', function(err, data) {
    if (err) {
      console.log('文件读取失败：' + file);
    } else {
      res.send(data);
    }
  })
});

router.get('/maimai/send_user', function(req, res, next) {
  var username = req.query.username;
  console.log(username);
  var st = add(username);
  // record.record({'username': username});
  if (st) {
    res.send({code: 200, text: "ok"});
  } else {
    res.send({code: 300, text: "卡片已满！"});
  }
});

router.get('/maimai/process_user', function(req, res, next) {
  res.send(JSON.stringify(queue.data));
});

var queue = {
  max: 8,
  data: [],
  hasTimer: false,
  timeout: 100000,
}

add = (name) => {
  if (queue.data.length < queue.max) {
    queue.data.push(name);
    if (!queue.hasTimer) {
      setTimer();
    }
    return true;
  } else {
    return false;
  }
},

setTimer = () => {
  queue.hasTimer = true;
  setTimeout(() => {
    queue.data.shift();
    if (queue.data.length == 0) {
      queue.hasTimer = false;
    } else {
      setTimer();
    }
  }, queue.timeout);
}

module.exports = router;
