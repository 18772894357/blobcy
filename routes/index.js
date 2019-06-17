var express = require('express');
var router = express.Router();
const listCtrl = require('../controller/listCtrl.js');

// 获取博客列表
router.get('/api/getReadList', listCtrl);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
