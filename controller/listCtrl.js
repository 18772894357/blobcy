const {TABLE, connection} = require('../service/mysql_start.js');
const SQL = 'select title,id,time from ' + TABLE + ' order by cast(time as datetime) desc'
module.exports = (req, res, next) => {
  connection(SQL).then(data => {
    res.send({code: 0, data: data});
  }).catch((e) => {
    console.log('log1:' + e);
    res.send({code: 1, message: '当前请求错误，请联系管理员！'});
  });
}