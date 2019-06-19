const express = require('express');
const router = express.Router();
const listCtrl = require('../controller/listCtrl.js');
const ueditor = require('../ueditor');
const path = require('path');
const uploadFileCtrl = require('../controller/uploadFile.js');

// 获取博客列表
router.get('/api/getReadList', listCtrl);
// 博客ueditor上传图片相关
router.use("/api/uploadFile", ueditor(path.join(__dirname, '../public'), uploadFileCtrl));
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
