const express = require('express');
const router = express.Router();
const listCtrl = require('../controller/listCtrl.js');
// const ueditor = require("ueditor");
const ueditor = require('../ueditor');
var path = require('path');
const uploadFileCtrl = require('../controller/uploadFile.js');
const postFileCtrl = require('../controller/postFileCtrl.js');
const ueConfig = require('../public/ueditor/nodejs/config.js')
var urllib = require('url');
// 获取博客列表
router.get('/api/getReadList', listCtrl);
// 写博客的时候需要做的上传文件
// router.post('/api/uploadFile', postFileCtrl.multer, postFileCtrl.callBack);
// router.get('/api/uploadFile', uploadFileCtrl.callBack);
/* GET home page. */
router.use("/api/uploadFile", ueditor(path.join(__dirname, 'public'), function (req, res, next) {
    //客户端上传文件设置
    var imgDir = '/img/ueditor/'
     var ActionType = req.query.action;
    if (ActionType === 'uploadimage' || ActionType === 'uploadfile' || ActionType === 'uploadvideo') {
        console.log(111111111)
        var file_url = imgDir;//默认图片上传地址
        /*其他上传格式的地址*/
        if (ActionType === 'uploadfile') {
            file_url = '/file/ueditor/'; //附件
        }
        if (ActionType === 'uploadvideo') {
            file_url = '/video/ueditor/'; //视频
        }
        res.ue_up(file_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
        res.setHeader('Content-Type', 'text/html');
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = imgDir;
        res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
    }
    // 客户端发起其它请求
    else {
        var params = urllib.parse(req.url, true);
        // console.log('config.json')
        // res.setHeader('Content-Type', 'application/json');
        // res.redirect('/ueditor/nodejs/config.json');
        // res.send(ueConfig)
        // res.send()
        if (params.query && params.query.callback) {
            //console.log(params.query.callback);
            var str =  params.query.callback + '(' + JSON.stringify(ueConfig) + ')';//jsonp
            res.send(str);
        } else {
            res.send(JSON.stringify(ueConfig));//普通的json
        }
    }
}));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
