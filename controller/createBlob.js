const mysql = require('mysql');
const DATABASE = 'blobBase';
const TABLE = 'contentTable';
const SQL = 'insert into ' + TABLE + '(title, content, time) values(?,?,?)'
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
  let body = req.body;
  let params = [body.title, body.content, body.time];
  connection.query(SQL, params, (err, data) => {
    if (err) {
      res.send({
        code: 1,
        message: '当前保存失败，请联系管理员！'
      });
    } else {
      res.send({
        code: 0,
        data: {
          success: true
        }
      });
    }
  })
}