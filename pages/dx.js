var 按钮组1 = new 按钮组("按钮组1",按钮组1_被单击);
var 编辑框1 = new 编辑框("编辑框1",null,null,编辑框1_内容被改变,null,null);
var 卡片列表框1 = new 卡片列表框("卡片列表框1",null,卡片列表框1_表项按钮被单击);
var 标签1 = new 标签("标签1",null);
var 按钮1 = new 按钮("按钮1",按钮1_被单击,null,null);
    window.onload=function(){ 
        短信列表_创建完毕();
        
    }

	var 页数=1;
	var 顶部选项=0;
	var 是否搜索=false;
	var 是否最后=false;
function 短信列表_创建完毕(){

	窗口操作.置组件圆角("编辑框1","5px");
	按钮组1.置样式(0,"mui-btn mui-btn-primary");

	开始刷新数据(true);
}
function 处理短信列表(发送结果,返回信息){
	var 成员=公用模块.取数组成员数(返回信息.data);
	var 计次=0;
	公用模块.关闭等待框();

	if(成员<10 ){
		是否最后=true;
		}else{
		是否最后=false;
	}

	按钮1.置可视(!是否最后);
	标签1.置可视(是否最后);


	if(返回信息.code==200 ){
		while(计次<成员){
			添加项目(返回信息.data[计次]);
			计次=计次+1;
		}

		}else{

		是否最后=true;
		卡片列表框1.清空表项();
		公用模块.弹出提示("服务器连接失败");
	}
	window.parent.设置角标(3,卡片列表框1.取项目总数());
}
function 添加项目(json){
	var 姓名=json.name;
	var 号码=json.number;
	var 内容=json.content;
	var 时间=公用模块.时间到文本(公用模块.时间戳到时间(公用模块.到数值(json.date)));
	var 类型=json.type;
	var 卡槽=json.sim_id;
	var 头像="";
	姓名=姓名=="未知号码" ? 号码 : "<span class='mui-badge mui-badge-primary'>"+姓名+"</span>&nbsp;"+号码;
	if(类型==1 ){
		头像="images/sjx.png";
		if(卡槽==0 ){
			头像="images/sj1.png";
		}else if(卡槽==1 ){
			头像="images/sj2.png";
		}

		}else{

		头像="images/fjx.png";
		if(卡槽==0 ){
			头像="images/fj1.png";
		}else if(卡槽==1 ){
			头像="images/fj2.png";
		}
	}

	卡片列表框1.添加项目(头像,姓名,时间,[""],内容,"mui-icon mui-icon-chatboxes","复制","mui-icon mui-icon-chatbubble","回复",号码+"&&"+内容);
}
function 按钮组1_被单击(按钮索引){
	按钮组1.置样式(0,"mui-btn mui-btn-primary mui-btn-outlined");
	按钮组1.置样式(1,"mui-btn mui-btn-primary mui-btn-outlined");
	按钮组1.置样式(按钮索引,"mui-btn mui-btn-primary");

	顶部选项=按钮索引;
	开始刷新数据(true);
	公用模块.显示等待框("读取中...");
}
function 开始刷新数据(刷新){
	var 接口={}
	if(刷新==true ){
		页数=1;
		是否最后=false;
		卡片列表框1.清空表项();
	}
	按钮1.置可视(false);
	标签1.置可视(false);
	if(是否搜索==true ){
		接口={"data": {"type": 顶部选项+1,"page_num": 页数,"page_size": 10,"keyword":  编辑框1.取内容() }}
		}else{
		接口={"data": {"type": 顶部选项+1,"page_num": 页数,"page_size": 10,"keyword": "" }}
	}

	公用模块.发送网络请求(处理短信列表,"/sms/query",接口);
}
function 卡片列表框1_表项按钮被单击(项目索引,按钮索引){
	var 类型;
	类型=公用模块.分割文本(卡片列表框1.取项目标记(项目索引),"&&");
	switch(按钮索引){
		case 0 :
			window.parent.置剪贴板(类型[1]);
			公用模块.弹出提示("短信内容已复制");
		break;
		case 1 :
			window.parent.跳转页面("fj.html?sjr="+类型[0]+"&ly=dx.html");
		break;
	}
}
function 编辑框1_内容被改变(内容){
	if(内容=="" ){
		是否搜索=false;
		}else{
		是否搜索=true;
	}
	开始刷新数据(true);
}
function 标题栏被双击(){
	窗口操作.滚动到顶部();
}
function 右侧图标被单击(){
	window.parent.跳转页面("fj.html?ly=dx.html");
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