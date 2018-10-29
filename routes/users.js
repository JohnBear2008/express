var express = require('express');
var router = express.Router();
var db=require("../bin/db/db");
/* GET users listing. */
router.get('/', function(req, res, next) {

    // console.log('get请求参数对象 :',req.query);
    // console.log('post请求参数对象 :',req.body);
    // console.log('post请求参数对象 :',req.session);
    // console.log('url的值为 :',req.query.url);

    if(req.session.UID==""){
        // console.log("无session!");
        res.render('login',{title:'登陆页面'});

    }else{
        // console.log("有session!");
        var url=req.query.url;
        var treeID=req.query.treeID;
        if(url){
            res.render('layout',{title:'我的首页',pagename:url,treechoose:treeID});

        }else{
            res.render('layout',{title:'我的首页',pagename:"index"});
        }
    }
});


router.get('/?url', function(req, res, next) {

    var urlget=req.query.url;

    // var treeID=req.query.treeID;
    // console.log(req.query);
    // res.send(name)
        res.render('layout',{title:'我的首页',pagename:urlget});//传入参数index，表示在模板页面引入index.ejs文件
    //     // res.redirect('url');
    //     // res.send('respond with a resource');


});


module.exports = router;
