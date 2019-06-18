const multer = require('multer');//引入multer
const upload = multer({dest: 'uploads/'});//设置上传文件存储地址
var urllib = require('url');
const fs = require('fs');
const uploadFileCtrl = {
  multer: () => {
    upload.single('file')
  },
  callBack: (req, res, next) => {
    let file = req.file;
    if (file) {
      console.log(file);
    }
    let data = {
      "imageUrl": "http://localhost:3000/api/uploadFile?action=uploadimage",
      "imagePath": "./imageStorage/",
      "imageFieldName": "upfile",
      "imageMaxSize": 2048,
      "imageAllowFiles": [".png", ".jpg", ".jpeg", ".gif", ".bmp"]
    };
    let params = urllib.parse(req.url, true);
    if (params.query && params.query.callback) {
      var str =  params.query.callback + '(' + JSON.stringify(data) + ')';//jsonp  
      res.end(str);  
    } else {  
      res.end(JSON.stringify(data));//普通的json  
    }       
    // res.send({code: 0, message: 'success'})
  }
}
module.exports = uploadFileCtrl
