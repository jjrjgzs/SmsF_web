(function (){ 
window["公用模块"] = {}
	var JS = document.createElement("script");
    JS.src = "js/cryptojs.js";
    document.getElementsByTagName("body").item(0).appendChild(JS);
	var mytoast={}
function 发送网络请求(回调函数,访问网址,发送数据){
	var 签名="";
	var 数据="";
	var 秘钥=读取设置("秘钥");
	var 接口=读取设置("服务器");
	var 时间戳=到文本(取时间戳(取当前日期时间()));

	if(!秘钥 || !接口 ){
		return;
	}

	签名 = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(时间戳 + "\n" + 秘钥, 秘钥));
	签名 = encodeURIComponent(签名);
	发送数据 = 发送数据 || { "data": {}}
	发送数据.timestamp = 时间戳;
	发送数据.sign = 签名;

	数据=JSON.stringify(发送数据);
	
    访问网址=接口+访问网址
    mui.ajax(访问网址, {
        crossDomain:true,
        type: "post",                        
        headers:{"content-type": "application/json;charset=UTF-8"},
        dataType: "json",
        data: 数据,
        timeout: 5000,
        charset_accept:"utf-8",
        
        success: function(response,textStatus,xhr) {
            回调函数(true,response);
        },
        
        error: function(xhr,type,errorThrown) {
            回调函数(false,type);
        }
    });
}
function 弹出提示(信息){
	mui.toast(信息,{type:"div"});
}
function 信息框(标题,信息){
	mui.alert(信息, 标题, function(){},"div");
}
function 询问框(标题,信息,确认按钮标题,取消按钮标题,回调函数){
	var btnArray = [确认按钮标题,取消按钮标题];
        mui.confirm(信息, 标题, btnArray, function(e) {
        if(回调函数!=null){
            回调函数(e.index);
       }
    },"div");
}
function 显示等待框(信息){
	关闭等待框();
	mytoast = document.createElement("div");
    mytoast.classList.add("mui-toast-container");
    mytoast.style.bottom = "200px";
    mytoast.innerHTML = "<div class=\"mui-toast-message\"><a class=\"mui-icon mui-spinner\"></a><br>" + 信息 + "</div>";
    document.body.appendChild(mytoast);   
    mytoast.classList.add("mui-active");
}
function 关闭等待框(){
	try {
        if (mytoast && mytoast.parentNode) {
            mytoast.classList.remove("mui-active");
            mytoast.parentNode.removeChild(mytoast);
            mytoast = null;
        }
    } catch (e) {
        console.error(e);
    }
}
function 保存设置(名称,内容){
	名称="SmsF"+名称;
	window.localStorage.setItem(名称,内容);
}
function 读取设置(名称){
	名称="SmsF"+名称;
	return window.localStorage.getItem(名称);
}
function 删除设置(名称){
	window.localStorage.removeItem(名称);
}
function 到文本(数字){
	return String(数字);
}
function 到数值(文本){
	return Number(文本);
}
function 文本转json(json文本){

    try {
        return JSON.parse(json文本);
    } catch (e) {
        return null;
    }
}
function json转文本(json对象){
	return JSON.stringify(json对象);
}
function 是否为数字(value){
	return !isNaN(value);
}
function 取现行日期(){
	var date = new Date();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + "/" + month + "/" + strDate;
    return currentdate;
}
function 时间到文本(date){
	var month = date.getMonth()+1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + "/" + month + "/" + strDate; 
    
    var getHours = date.getHours();
    var getMinutes = date.getMinutes();
    var getSeconds = date.getSeconds();
    if (getHours >= 0 && getHours <= 9) {
        getHours = "0" + getHours;
    }
    if (getMinutes >= 0 && getMinutes <= 9) {
        getMinutes = "0" + getMinutes;
    }
    if (getSeconds >= 0 && getSeconds <= 9) {
        getSeconds = "0" + getSeconds;
    }
    var currenttime = getHours + ":" + getMinutes + ":" + getSeconds;     
    
    return currentdate + " " + currenttime;
}
function 时间戳到时间(时间戳){
	return new Date(时间戳);
}
function 取时间戳(){
	return Date.parse(取当前日期时间());
}
function 取当前日期时间(){
	return new Date();
}
function 取时间间隔(a,b){
	return a.getTime()-b.getTime();
}
function 取数组成员数(arr){
	if(arr!=null ){
		return arr.length;
		}else{
		return 0;
	}
}
function 分割文本(str,separator){
    if(str==null || separator==null){
        return null;
    }         
    return str.split(separator);
}
function 取文本左边(str,len){
	return str.substr(0,len);
}
function 子文本替换(str,searchValue,newValue){
	const regex = new RegExp(searchValue, "g");
	return str.replace(regex,newValue);
}
window["公用模块"]["发送网络请求"]=发送网络请求;
window["公用模块"]["弹出提示"]=弹出提示;
window["公用模块"]["信息框"]=信息框;
window["公用模块"]["询问框"]=询问框;
window["公用模块"]["显示等待框"]=显示等待框;
window["公用模块"]["关闭等待框"]=关闭等待框;
window["公用模块"]["保存设置"]=保存设置;
window["公用模块"]["读取设置"]=读取设置;
window["公用模块"]["删除设置"]=删除设置;
window["公用模块"]["到文本"]=到文本;
window["公用模块"]["到数值"]=到数值;
window["公用模块"]["文本转json"]=文本转json;
window["公用模块"]["json转文本"]=json转文本;
window["公用模块"]["是否为数字"]=是否为数字;
window["公用模块"]["取现行日期"]=取现行日期;
window["公用模块"]["时间到文本"]=时间到文本;
window["公用模块"]["时间戳到时间"]=时间戳到时间;
window["公用模块"]["取时间戳"]=取时间戳;
window["公用模块"]["取当前日期时间"]=取当前日期时间;
window["公用模块"]["取时间间隔"]=取时间间隔;
window["公用模块"]["取数组成员数"]=取数组成员数;
window["公用模块"]["分割文本"]=分割文本;
window["公用模块"]["取文本左边"]=取文本左边;
window["公用模块"]["子文本替换"]=子文本替换;
})();