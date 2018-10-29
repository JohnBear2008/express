var express = require('express');
var router = express.Router();
var db=require("../bin/db/db");


/* test */
router.get('/1', function(req, res, next) {
    res.render({"name":"1111"});
    // res.render('layout',{title:'我的首页',pagename:"blank"});//传入参数index，表示在模板页面引入index.ejs文件
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'BearAdmin 登陆页面' });
    // res.render('layout',{title:'我的首页',pagename:"blank"});//传入参数index，表示在模板页面引入index.ejs文件
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'BearAdmin 登陆页面' });
    // res.render('layout',{title:'我的首页',pagename:"blank"});//传入参数index，表示在模板页面引入index.ejs文件
});


//定义登出
router.get('/logout', function(req, res, next) {

    req.session.UID="";
    req.session.authlevel="";
    // console.log(req.session);
    // console.log(req.session.UID);
    res.cookie("account",{"account":"","password":"",remember:""},{maxAge:10000*60*60});
    res.render('login', { title: 'BearAdmin 登陆页面' });
    // res.render('layout',{title:'我的首页',pagename:"blank"});//传入参数index，表示在模板页面引入index.ejs文件
});
//定义获取admin跳转页面
router.get('/admin', function(req, res, next) {

    if(req.session.UID!="0"){
        // console.log("无管理员session!");
        res.render('login',{title:'登陆页面'});

    }else{
        res.render('admin/index', { title: 'BearAdmin 管理页面' });
    }

    // res.render('layout',{title:'我的首页',pagename:"blank"});//传入参数index，表示在模板页面引入index.ejs文件
});
//定义获取changePW跳转页面
router.get('/changePW', function(req, res, next) {

    if(req.session.UID==""){
        // console.log("无session!");
        res.render('login',{title:'登陆页面'});

    }else{
        // res.render('admin/index', { title: 'BearAdmin 管理页面' });
        // console.log(req.session.UID);
        res.render('layout',{title:'我的首页',pagename:"changePW"});
    }

    // res.render('layout',{title:'我的首页',pagename:"blank"});//传入参数index，表示在模板页面引入index.ejs文件
});

//增加功能
router.get('/addfun', function(req, res, next) {

    if(req.session.UID!="0"){
        // console.log("无管理员session!");
        res.render('login',{title:'登陆页面'});

    }else{
        res.render('admin/addfun', { title: 'BearAdmin 添加功能' });
    }

    // res.render('layout',{title:'我的首页',pagename:"blank"});//传入参数index，表示在模板页面引入index.ejs文件
});
//更新功能
router.get('/updfun', function(req, res, next) {
    var FID=req.query.FID;

    if(req.session.UID!="0"){
        // console.log("无管理员session!");
        res.render('login',{title:'登陆页面'});

    }else{
        res.render('admin/updfun', { title: 'BearAdmin 添加功能',FID:FID });
    }

    // res.render('layout',{title:'我的首页',pagename:"blank"});//传入参数index，表示在模板页面引入index.ejs文件
});
//删除功能
router.get('/delfun', function(req, res, next) {

    if(req.session.UID!="0"){
        // console.log("无管理员session!");
        res.render('login',{title:'登陆页面'});

    }else{

        var FID=req.query.FID;
        db.query('delete from functions where FID=?',[FID],function(results,fields){
            // res.send(results);
            res.send("<script>alert('删除成功!'); window.location.href='admin';</script>");
        });

    }

    // res.render('layout',{title:'我的首页',pagename:"blank"});//传入参数index，表示在模板页面引入index.ejs文件
});

//加载nav功能数据
router.get('/getfunctions', function(req, res, next) {
    if(req.session.UID!="0"){
        // console.log("无管理员session!");
        res.render('login',{title:'登陆页面'});

    }else{
        db.query('select * from functions ',"",function(results,fields){
            res.send(results);
        });
    }
});
//加载update功能原始数据
router.get('/getupdfun', function(req, res, next) {

    var FID=req.query.FID;
    if(req.session.UID!="0"){
        // console.log("无管理员session!");
        res.render('login',{title:'登陆页面'});

    }else{
        db.query('select * from functions where FID=?',[FID],function(results,fields){
            res.send(results);
        });
    }
});
//增加功能
router.post('/postaddfun', function(req, res, next) {
    // console.log(req.body);

    if(req.session.UID!="0"){
        // console.log("无管理员session!");
        res.render('login',{title:'登陆页面'});

    }else{
        var name=req.body.name;
        var url=req.body.url;
        var withCtree=req.body.withCtree;
        var authlevel=req.body.authlevel;
        var treelevel=req.body.treelevel;
        var treeID=req.body.treeID;
        var FtreeID=req.body.FtreeID;



        db.query('insert ignore into functions ( name,url,withCtree,authlevel,treelevel,treeID,FtreeID) values (?,?,?,?,?,?,?) ',[name,url,withCtree,authlevel,treelevel,treeID,FtreeID],function(results,fields){
            // console.log(results);
            res.send(results);
        });
    }
});

//更新功能
router.post('/postupdfun', function(req, res, next) {
    // console.log(req.body);

    if(req.session.UID!="0"){
        // console.log("无管理员session!");
        res.render('login',{title:'登陆页面'});

    }else{
        var FID=req.body.FID;
        var name=req.body.name;
        var url=req.body.url;
        var withCtree=req.body.withCtree;
        var authlevel=req.body.authlevel;
        var treelevel=req.body.treelevel;
        var treeID=req.body.treeID;
        var FtreeID=req.body.FtreeID;



        db.query('update ignore functions set name=?,url=?,withCtree=?,authlevel=?,treelevel=?,treeID=?,FtreeID=? where FID=? ',[name,url,withCtree,authlevel,treelevel,treeID,FtreeID,FID],function(results,fields){
            // console.log(results);
            res.send(results);
        });
    }
});

//更新功能
router.post('/postchangePW', function(req, res, next) {
    console.log(req.body);

    if(req.session.UID==""){
        // console.log("无session!");
        res.render('login',{title:'登陆页面'});

    }else{
        // console.log(req.session.UID);
        var UID=req.session.UID;
        var PW=req.body.PW;

        db.query('update  users set password=? where UID=? ',[PW,UID],function(results,fields){
            // console.log(results);
            res.send(results);
        });
    }
});

router.post('/postlogin', function(req, res, next) {
    // console.log(req.body);
    // console.log(req.body.account);
   // console.log("cookie:"+req.cookies.account);
    var account=req.body.account;
    var password=req.body.password;
    var remember=req.body.remember;
    var sql='select UID,authlevel from users where account=? and password=?';
    db.query(sql, [account,password],function(results,fields){
        // console.log(results);
        // req.session.account = req.body.account;
        // req.session.UID = results[0].UID;

        if(results !=null  && results !="" ){
            req.session.UID=results[0].UID;
            req.session.authlevel=results[0].authlevel;
            // console.log(req.session);
            // console.log(req.session.UID);

                res.cookie("account",{"account":account,"password":password,remember:remember},{maxAge:10000*60*60});
                res.send(results);


        }else{
            res.send(results);
        }



    });
});



//加载主树
router.get('/getleftnav', function(req, res, next) {
    // var treelevel=req.body.treelevel;
    // var treeID=req.query.treeID;
    var authlevel=req.session.authlevel;

    console.log("req.query=111"+req.query);
    // // console.log(treelevel);
    console.log("权限等级:"+authlevel);
    // db.query('select * from functions where FID=?',[FID],function(results,fields){


    db.query('select * from functions where treelevel=0 and authlevel>=?',[authlevel],function(results,fields){

        res.send(results);
    });
});


//加载子树
router.get('/getsubnav', function(req, res, next) {
    var FtreeID=req.query.FtreeID;
    // var treeID=req.query.treeID;

    // console.log(req.body);
    console.log(FtreeID);
    // console.log(treeID);
    // db.query('select * from functions where FID=?',[FID],function(results,fields){


    db.query('select * from functions where FtreeID=?',[FtreeID],function(results,fields){
        // console.log(results)

        res.send(results);
    });
});


module.exports = router;
