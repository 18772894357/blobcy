const {TABLE, connection} = require('../service/mysql_start.js');
const SQL = 'insert into ' + TABLE + '(title, content, time) values(?,?,?)'
const SQL2 = (params) => {
  return `update ${TABLE} set title='${params.title}',content='${params.content}',time='${params.time}' where id = '${params.id}'`
}

module.exports = (req, res, next) => {
  let body = req.body;
  let params = [body.title, body.content, body.time];
  let sql = '';
  let requestbody = [];
  if (body.id) {
    sql = SQL2(body);
    requestbody = [sql];
    console.log(sql);
  } else {
    sql = SQL;
    requestbody = [sql, params]
  }
  connection(...requestbody).then(data => {
    res.send({
      code: 0,
      data: {success: true}
    })
  }).catch(e => {
    console.log('log1:' + e);
    res.send({code: 1, message: '当前请求错误，请联系管理员！'});
  });;
}