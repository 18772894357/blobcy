const {connection, TABLE} = require('../service/mysql_start.js')
const SQL = 'insert into ' + TABLE + '(title, content, time) values(?,?,?)'

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