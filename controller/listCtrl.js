const mysql = require('mysql');
const DATABASE = 'blobBase';
const TABLE = 'contentTable';
const SQL = 'select * from ' + TABLE
const connection = mysql.createConnection({
  host: '47.111.116.91',
  user: 'root',
  password: 'blobcymysql',
  port: '3306',
  database: DATABASE
});
connection.connect(function(err){
  if(err){
    console.log('[query] - :' + err);
    return;
  }
  console.log('[connection connect]  succeed!');
});

module.exports = (req, res, next) => {
  connection.query(SQL, (err, data) => {
    if (err) {
      console.log('log1: 当前读取博客内容出现错误==' + err);
      res.send({code: 1, message: '当前读取内容出错，请联系管理员！'});
    } else {
      res.send({code: 0, data: data});
    }
  })
}
