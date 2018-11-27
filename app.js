var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var db = require('./bin/db/db');

//循环运行数据库同步测试
var schedule = require('node-schedule');

var db2=require("./bin/db/db2");


var rule = new schedule.RecurrenceRule();
var times = [];
for(var i=1; i<60; i++){
　　times.push(i);
}
rule.minute = times;
//var c=0;
var j = schedule.scheduleJob(rule, function(){
	
	
	db2.sql('select * from comproduct a,(select PKValue from comChangeLog where changetime<=GETDATE() and  changetime>= DATEADD(hour,-1, GETDATE())) b where a.ProdID=b.PKValue',function(err,result){
		if (err) {
			console.log(err);
			return;
		}
		console.log('result :',result);
		
//		res.send(result);
		
	});
//   　　 c++;
//    　　console.log(c);
});
//---------------------------

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));//去掉打印加载信息 方便调试
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret :  'secret', // 对session id 相关的cookie 进行签名
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 10000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
    },
}));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
