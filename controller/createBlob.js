const {TABLE, connection} = require('../service/mysql_start.js');
const SQL = 'insert into ' + TABLE + '(title, content, time) values(?,?,?)'

module.exports = (req, res, next) => {
  let body = req.body;
  let params = [body.title, body.content, body.time];
  connection(SQL, params).then(data => {
    res.send({
      code: 0,
      data: {success: true}
    }).catch(e => {
      console.log('log1:' + e);
      res.send({code: 1, message: '当前请求错误，请联系管理员！'});
    });
  });
}