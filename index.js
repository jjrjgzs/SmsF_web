mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 标题栏1 = new 标题栏("标题栏1",标题栏1_被双击,标题栏1_右侧图标被单击,标题栏1_左侧图标被单击);
var 导航栏1 = new 导航栏("导航栏1",导航栏1_项目被单击,null,null);
var 浏览框1 = new 浏览框("浏览框1",浏览框1_加载完毕);
if(mui.os.plus){
    mui.plusReady(function() {
        主窗口_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        主窗口_创建完毕();
        
    }
}

function 主窗口_创建完毕(){
	if(窗口操作.是否在APP内运行()==true ){
		窗口操作.设置状态栏颜色("#F7F7F7");
		窗口操作.设置状态栏字体颜色("dark");
	}
	导航栏1.添加项目("mui-icon","mui-icon-home","首页","zj.html",0);
	导航栏1.添加项目("mui-icon","mui-icon-phone","通话","thjl.html",0);
	导航栏1.添加项目("mui-icon","mui-icon-person","话簿","dhb.html",0);
	导航栏1.添加项目("mui-icon","mui-icon-chatbubble","短信","dx.html",0);
	导航栏1.添加项目("mui-icon","mui-icon-location","定位","dw.html",0);
	导航栏1.添加项目("mui-icon","mui-icon-gear","设置","sz.html",0);
	导航栏1.添加完毕();

	标题栏1.置右侧图标("mui-icon","mui-icon-plus");
	标题栏1.置左侧图标("mui-icon","mui-icon-help");

	浏览框1.跳转("pages/zj.html");
	window.跳转页面=全局跳转页面;
	window.设置角标=全局设置角标;
	window.置剪贴板=全局置剪贴板;
}
function 全局跳转页面(url){
	document.getElementById("浏览框1").src="pages/"+url;
}
function 全局设置角标(index,value){
	var tabbar = document.querySelector("#导航栏1");  
    var tabitem = tabbar.getElementsByTagName("a");  
    var icon;
    if(tabitem.length>index){
        var badge = tabitem[index].querySelector(".mui-badge");
        if(badge!=null){
            if(value>0){
                badge.innerHTML = "" + value;
            }else{
                icon = tabitem[index].querySelector(".mui-icon");
                icon.removeChild(icon.firstChild);
            }
        }else{
            icon = tabitem[index].querySelector(".mui-icon");
            if(icon!=null){
                if(value>0){
                    var newBadge = document.createElement("span");
                    newBadge.innerHTML = "<span class='mui-badge'>" + value + "</span>";
                    icon.appendChild(newBadge);
                }
            }
            
        }                
    }
}
function 导航栏1_项目被单击(项目标题,目标名称,项目索引){
	if(window.localStorage.getItem("SmsF服务器") ){
		浏览框1.跳转("pages/"+目标名称);
		for (var 计次=0;计次<4;计次++){
			导航栏1.置项目角标(计次,0);
		}
		}else{
		mui.toast("请先连接",{type:"div"});
		setTimeout(() => {
			导航栏1.置项目激活状态(项目索引, false);
			导航栏1.置项目激活状态(0, true);
		}, 200);
	}
}
function 标题栏1_右侧图标被单击(){
	var iframe=document.getElementById("浏览框1");
	iframe.contentWindow.右侧图标被单击();
}
function 标题栏1_左侧图标被单击(){
	var iframe=document.getElementById("浏览框1");
	iframe.contentWindow.左侧图标被单击();
}
function 标题栏1_被双击(){
	var iframe=document.getElementById("浏览框1");
	iframe.contentWindow.标题栏被双击();
}
function 浏览框1_加载完毕(){
	切换图标状态(浏览框1.取标题());
}
function 切换图标状态(项目标题){
	var 左边="";
	var 右边="";
	switch(项目标题){
		case "主机列表" :
			左边="mui-icon-help";
			右边="mui-icon-plus";
		break;
		case "电话簿" :
			左边="mui-icon-loop";
			右边="mui-icon-plus";
		break;
		case "短信列表" :
			左边="mui-icon-loop";
			右边="mui-icon-plus";
		break;
		case "远程发短信" :
			左边="mui-icon-back";
		break;
		case "通话记录" :
			左边="mui-icon-loop";
		break;
	}
	标题栏1.置标题(项目标题);
	标题栏1.置左侧图标("mui-icon",左边);
	标题栏1.置右侧图标("mui-icon",右边);
}
function 全局置剪贴板(内容){
	try {
		if (mui.os.plus) {
			if (plus.os.name == "Android") {
				置安卓(内容);
			} else {
				置苹果(内容);
			}
		} else {
			置网页(内容);
		}
	} catch (error) {
		console.error("设置剪贴板内容时出错:", error);
	}
}
function 置安卓(内容){
	var Context = plus.android.importClass("android.content.Context");
	var main = plus.android.runtimeMainActivity();
	var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
	plus.android.invoke(clip, "setText", 内容);
}
function 置苹果(内容){
	var UIPasteboard  = plus.ios.importClass("UIPasteboard");
	var generalPasteboard = UIPasteboard.generalPasteboard();
	generalPasteboard.plusCallMethod({ setValue: 内容, forPasteboardType: "public.utf8-plain-text" });
}
function 置网页(内容){
	if (navigator.clipboard) {
		navigator.clipboard.writeText(内容).catch(err => {
			console.error("无法复制到剪贴板:", err);
		});
	} else {
		if (window.clipboardData) {
			window.clipboardData.setData("text", 内容);
		} else {
			(function(内容) {
				document.oncopy = function(e) {
					e.clipboardData.setData("text", 内容);
					e.preventDefault();
					document.oncopy = null;
				}
			})(内容);
			document.execCommand("Copy");
		}
	}
}
