const {connection, TABLE} = require('../service/mysql_start.js')
module.exports = (req, res, next) => {
  const SQL = 'select * from ' + TABLE + ' where id = ' + req.query.id;
  connection.query(SQL, (err, data) => {
    res.send({
      code: 0,
      data: data && data[0]
    })
  });
};