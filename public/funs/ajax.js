function ajaxget(url,data,callback){

    function callback(data){
        // alert(data);
        return data;
    }

    $.ajax({
        url:url, //后台查询的ACTION
        type:'get',//POST方式传递参数从前端到后台
        dataType:'json',//数据类型为JSON
        data:data,//传输的数据
        success:function(res){

        },
        error:function(){//这里是AJAX发生错误的处理代码
            alert("系统异常！",'error');
        }
    });

    return callback(data);

}


function ajaxpost(url,data,callback){



   function callback(res){
        // alert(JSON.stringify(res));
        return res;
    }

    $.ajax({
        url:url, //后台查询的ACTION
        type:'post',//POST方式传递参数从前端到后台
        dataType:'json',//数据类型为JSON
        data:data,//传输的数据
        success:function(res){

            // alert(JSON.stringify(res));
            callback(res);

            // alert(res[0].ID);
            // if(res.success==0){
            //     //后台代码处理成功你的业务逻辑代码
            //     //这里是给ID为"dls_name"的输入框赋值
            //     //该值来自于后台的查询结果
            //     $("#dls_name").html(res.dlsName);
            // }else{
            //     //后台代码执行异常了你的业务逻辑代码
            //     //这里是选择把后台异常信息以弹窗的形式展示给用户
            //     alert(res.msg);
            // }
        },
        error:function(){//这里是AJAX发生错误的处理代码
            alert("系统异常！",'error');
        }
    });
    return callback(res);



}




