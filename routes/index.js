const express = require('express');
const router = express.Router();
const ueditor = require('../ueditor');
const path = require('path');
const listCtrl = require('../controller/listCtrl.js');
const uploadFileCtrl = require('../controller/uploadFile.js');
const createBlobCtrl = require('../controller/createBlob.js');
const bolbDetailCtrl = require('../controller/blobDetail.js');

// 获取博客列表
router.get('/api/getReadList', listCtrl);
// 博客ueditor上传图片相关
router.use('/api/uploadFile', ueditor(path.join(__dirname, '../public'), uploadFileCtrl));
// 新增博客相关
router.post('/api/create_blob', createBlobCtrl);
// 查看文章
router.get('/api/get_detail', bolbDetailCtrl);
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
