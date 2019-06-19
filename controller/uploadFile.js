const ueditor = require('../ueditor');
const ueConfig = require('../public/ueditor/nodejs/config.js');
var urllib = require('url');

module.exports = (req, res, next) => {
  //客户端上传文件设置
  let imgDir = '/img/ueditor/'
  let ActionType = req.query.action;
  if (ActionType === 'uploadimage' || ActionType === 'uploadfile' || ActionType === 'uploadvideo') {
    let file_url = imgDir;//默认图片上传地址
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
    let dir_url = imgDir;
    res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
  }
  // 客户端发起其它请求
  else {
    let params = urllib.parse(req.url, true);
    if (params.query && params.query.callback) {
      let str =  params.query.callback + '(' + JSON.stringify(ueConfig) + ')';//jsonp
      res.send(str);
    } else {
      res.send(JSON.stringify(ueConfig));//普通的json
    }
  }
};
