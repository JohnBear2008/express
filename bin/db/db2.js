/*2016年7月14日17:02:15
 QQ: 452076103
 意外金喜
 mssql模块简单封装
*/
var mssql = require('mssql');
var db2 = {};
var config = {
  user: 'sa',
  password: 'techDG2218',
  server: '192.168.0.2', 
  database: 'CHIComp99',
  port:1433,
//  options: {
//    encrypt: true // Use this if you're on Windows Azure
//  },
  pool: {
    min: 0,
    max: 10,
    idleTimeoutMillis: 3000
  }
};
 
//执行sql,返回数据.
db2.sql = function (sql, callBack) {
	
	
  var connection = new mssql.connect(config, function (err) {
	  
	
    if (err) {
      console.log(err);
      return;
    }
    var ps = new mssql.PreparedStatement(connection);
    ps.prepare(sql, function (err) {
      if (err){
        console.log(err);
        return;
      }
      ps.execute('', function (err, result) {
    	  
    	 
      	if (err){
          console.log(err);
          return;
        }
 
        ps.unprepare(function (err) {
          if (err){
            console.log(err);
            callback(err,null);
            return;
          }
          
          mssql.close();//关闭sql 数据库链接
        	callBack(err, result);
        	
        });
      });
    });
  });
};
 
module.exports = db2;
