const multer = require('multer');//引入multer
const upload = multer({dest: 'uploads/'});//设置上传文件存储地址
var urllib = require('url');
const uploadFileCtrl = {
  multer: () => {
    upload.single('file')
  },
  callBack: (req, res, next) => {
    console.log(11111)
    let file = req.file;
    if (file) {
      console.log(file);
    }
    // res.send({code: 0, message: 'success'})
    res.send({
      "state": "SUCCESS",
      "url": "upload/demo.jpg",
      "title": "demo.jpg",
      "original": "demo.jpg"
    })
  }
}
module.exports = uploadFileCtrl
