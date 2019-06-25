const {TABLE, connection} = require('../service/mysql_start.js');
module.exports = (req, res, next) => {
  const SQL = 'select * from ' + TABLE + ' where id = ' + req.query.id;
  connection(SQL).then(data => {
    res.send({code: 0, data: data[0]});
  }).catch(e => {
  	console.log('log1:' + e);
    res.send({code: 1, message: '当前请求错误，请联系管理员！'});
  });
};