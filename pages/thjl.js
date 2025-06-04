var 按钮组1 = new 按钮组("按钮组1",按钮组1_被单击);
var 编辑框1 = new 编辑框("编辑框1",null,null,编辑框1_内容被改变,null,null);
var 自由面板1 = new 自由面板("自由面板1","64px");
var 图片框1 = new 图片框("图片框1",null,null);
var 标签1 = new 标签("标签1",null);
var 标签2 = new 标签("标签2",null);
var 标签3 = new 标签("标签3",null);
var 标签4 = new 标签("标签4",null);
var 图片框2 = new 图片框("图片框2",null,null);
var 自由列表框1 = new 自由列表框("自由列表框1",自由列表框1_表项被单击,null);
var 菜单1 = new 菜单("菜单1",菜单1_菜单项被单击);
var 标签5 = new 标签("标签5",null);
var 按钮1 = new 按钮("按钮1",按钮1_被单击,null,null);
    window.onload=function(){ 
        通话记录_创建完毕();
        
    }

	var 页数=1;
	var 顶部选项=0;
	var 是否搜索=false;
	var 当前表项=0;
	var 是否最后=false;
function 通话记录_创建完毕(){

	窗口操作.置组件圆角("编辑框1","5px");
	按钮组1.置样式(0,"mui-btn mui-btn-primary");

	菜单1.添加菜单项("发送短信");
	菜单1.添加菜单项("复制号码");
	窗口操作.置组件宽度("标签1","100%");
	窗口操作.置组件宽度("标签2","100%");
	窗口操作.置组件宽度("标签3","100%");
	窗口操作.置组件宽度("标签4","100%");

	窗口操作.置组件左边("标签3","52%");
	窗口操作.置组件左边("标签4","52%");
	窗口操作.置组件左边("图片框2","91%");

	开始刷新数据(true);
}
function 处理通话记录(发送结果,返回信息){
	var 成员=公用模块.取数组成员数(返回信息.data);
	公用模块.关闭等待框();

	if(成员<10 ){
		是否最后=true;
		}else{
		是否最后=false;
	}

	按钮1.置可视(!是否最后);
	标签5.置可视(是否最后);

	if(返回信息.code==200 ){
		读取通话记录(返回信息);

		}else{

		自由列表框1.清空项目();
		是否最后=true;
		公用模块.弹出提示("服务器连接失败");
	}

}
function 秒到时间(秒){
	var 文本="";
	var 时间_秒=0;
	var 时间_分=0;
	时间_秒=公用模块.到数值(秒);
	if(时间_秒<60 ){
		文本=秒+"秒";
		}else{
		while(时间_秒 >= 60){
			时间_秒=时间_秒-60;
			时间_分=时间_分+1;
		}
		if(时间_秒>0 ){
			文本=时间_分+"分"+时间_秒+"秒";
			}else{
			文本=时间_分+"分";
		}

	}
	return(文本);
}
function 添加列表框(头像,json){
	var 卡槽="images/simx.png";
	if(json.sim_id==0 ){
		卡槽="images/sim1.png";
	}else if(json.sim_id==1 ){
		卡槽="images/sim2.png";
	}
	图片框1.置图片(头像);
	图片框2.置图片(卡槽);
	标签1.置标题(json.name);
	标签2.置标题(json.number);
	标签3.置标题(公用模块.时间到文本(公用模块.时间戳到时间(公用模块.到数值(json.dateLong))));
	标签4.置标题("通话时间:"+秒到时间(json.duration));
	自由列表框1.添加项目("自由面板1",true,"");
}
function 读取通话记录(json){
	var 成员=公用模块.取数组成员数(json.data);
	var 计次=0;
	var 类型=0;
	var 图标="";
	var 图标路径= {1: "images/hr.png",2: "images/hc.png",3: "images/wj.png"}

	while(计次<成员){
		类型=json.data[计次].type;
		图标=图标路径[类型];
		if(!图标 ){
			图标 = "images/wz.png";
		}
		添加列表框(图标,json.data[计次]);
		计次=计次+1;
	}
	window.parent.设置角标(1,自由列表框1.取项目总数());
}
function 按钮组1_被单击(按钮索引){
	for(var 计次=0;计次<4;计次++){
		按钮组1.置样式(计次,"mui-btn mui-btn-primary mui-btn-outlined");
	}
	按钮组1.置样式(按钮索引,"mui-btn mui-btn-primary");
	顶部选项=按钮索引;
	开始刷新数据(true);
	公用模块.显示等待框("读取中...");
}
function 开始刷新数据(刷新){
	var 接口={}
	if(刷新==true ){
		是否最后=false;
		页数=1;
		自由列表框1.清空项目();
	}
	按钮1.置可视(false);
	标签5.置可视(false);
	if(是否搜索==true ){
		接口={"data": {"type": 顶部选项,"page_num": 页数,"page_size": 10,"phone_number": 编辑框1.取内容()}}
		}else{
		接口={"data": {"type": 顶部选项,"page_num": 页数,"page_size": 10,"phone_number": ""}}
	}

	公用模块.发送网络请求(处理通话记录,"/call/query",接口);
}
function 编辑框1_内容被改变(内容){
	if(编辑框1.取内容()=="" ){
		是否搜索=false;
		}else{
		是否搜索=true;
	}
	开始刷新数据(true);
}
function 菜单1_菜单项被单击(菜单项标题,索引,标记){
	if(菜单项标题=="复制号码" ){
		window.parent.置剪贴板(自由列表框1.取标签标题(当前表项,"标签2"));
		公用模块.弹出提示("号码已复制");
	}else if(菜单项标题=="发送短信" ){
		window.parent.跳转页面("fj.html?sjr="+自由列表框1.取标签标题(当前表项,"标签2")+"&ly=thjl.html");
	}
}
function 自由列表框1_表项被单击(项目索引,项目标记){
	当前表项=项目索引;
	菜单1.显示菜单();
}
function 标题栏被双击(){
	窗口操作.滚动到顶部();
}
function 左侧图标被单击(){
	开始刷新数据(true);
	公用模块.显示等待框("刷新中...");
}
function 按钮1_被单击(){
	if(是否最后==false ){
		页数=页数+1;
	   开始刷新数据();
	   公用模块.显示等待框("加载中...");
    }
}