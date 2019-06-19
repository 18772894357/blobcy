const mysql = require('mysql');
const DATABASE = 'blobBase';
const TABLE = 'contentTable';

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

module.exports = {
	connection,
  TABLE
}