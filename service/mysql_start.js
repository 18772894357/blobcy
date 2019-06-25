const mysql = require('mysql');
const DATABASE = 'blobBase';
const TABLE = 'contentTable';

// const connection = mysql.createConnection({
//   host: '47.111.116.91',
//   user: 'root',
//   password: 'blobcymysql',
//   port: '3306',
//   database: DATABASE,
//   useConnectionPooling: true
// });
// connection.connect(function(err){
//   if(err){
//     console.log('[query] - :' + err);
//     return;
//   }
//   console.log('[connection connect]  succeed!');
// });
// connection.on('error', (err) => {
//   console.log('log2:' + err);
// });

// module.exports = {
// 	connection,
//   TABLE
// }

const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '47.111.116.91',
  port            : '3306',
  user            : 'root',
  password        : 'blobcymysql',
  database        :  DATABASE
});

const connection = function () {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) reject(err);
      connection.query(...arguments, (err, result, fields) => {
        connection.release();
        if (err) reject(err);
        resolve(result);
      })
    });
  });
}

module.exports = {
  TABLE,
  connection
};