

//校验Mac地址格式
function checkMac(macaddr){
    var reg1 = /^[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}$/;
    var reg2 = /^[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}$/;
    if (reg1.test(macaddr)) {
        return true;
    } else if (reg2.test(macaddr)) {
        return true;
    } else {

        alert("你输入的MAC地址不正确,请检查,按照参考格式输入!");
        return false;
    }
}

//格式化网卡
function FM(textMac){
    textMac=textMac.replace(/-/g, "");
    textMac=textMac.replace(/:/g, "");
    return textMac;
}

//加密函数

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('2 7(3){1 4=0.d.9.a(i);1 6=0.h.g(3,4,{5:0.5.f,e:0.o.n});8 6.q.p()}2 k(){1 b=j($("#m").l());1 c=7(0.d.9.a(b));8 c}',27,27,'CryptoJS|var|function|message|keyHex|mode|encrypted|encryptByDESModeEBC|return|Utf8|parse|source|cc|enc|padding|ECB|encrypt|DES|SNKey|FM|encryptMac|val|textMac|Pkcs7|pad|toString|ciphertext'.split('|'),0,{}))