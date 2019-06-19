const {connection, TABLE} = require('../service/mysql_start.js')
const SQL = 'select title,id from ' + TABLE

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
