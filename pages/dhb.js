var 编辑框1 = new 编辑框("编辑框1",null,null,编辑框1_内容被改变,null,null);
var 自由面板2 = new 自由面板("自由面板2","64px");
var 弹出面板1 = new 弹出面板("弹出面板1",null,null,null,null);
var 图片框1 = new 图片框("图片框1",null,null);
var 标签4 = new 标签("标签4",null);
var 标签5 = new 标签("标签5",null);
var 自由列表框1 = new 自由列表框("自由列表框1",null,自由列表框1_按钮被单击);
var 按钮3 = new 按钮("按钮3",null,null,null);
var 按钮4 = new 按钮("按钮4",null,null,null);
var 标签1 = new 标签("标签1",null);
var 标签2 = new 标签("标签2",null);
var 编辑框2 = new 编辑框("编辑框2",null,null,null,null,null);
var 标签3 = new 标签("标签3",null);
var 编辑框3 = new 编辑框("编辑框3",null,null,null,null,null);
var 按钮组1 = new 按钮组("按钮组1",按钮组1_被单击);
    window.onload=function(){ 
        电话簿_创建完毕();
        document.getElementsByClassName("mui-content")[0].style.display="";
    }

	var 接口={}
    const canvas = document.createElement("canvas");
    canvas.width = 48;
    canvas.height = 48;
    const ctx = canvas.getContext("2d");
function 电话簿_创建完毕(){

	窗口操作.置组件圆角("编辑框1","5px");
	窗口操作.置组件圆角("图片框1","100px");
	窗口操作.置组件左边("按钮4","" +窗口操作.取窗口宽度()-90+"px");
	窗口操作.置组件左边("按钮3","" +窗口操作.取窗口宽度()-160+"px");

	弹出面板1.初始化(""+(窗口操作.取窗口宽度()/2-155)+"px",""+(窗口操作.取窗口高度()/2-125)+"px","310px","250px");
	弹出面板1.添加组件("标签1");
	弹出面板1.添加组件("标签2");
	弹出面板1.添加组件("编辑框2");
	弹出面板1.添加组件("标签3");
	弹出面板1.添加组件("编辑框3");
	弹出面板1.添加组件("按钮组1");
	按钮组1.置样式(0,"mui-btn mui-btn-danger");
	标签1.置外边距(5,0,5,0);
	标签2.置外边距(0,0,5,0);
	标签3.置外边距(10,0,5,0);
	按钮组1.置外边距(10,5,0,5);


	开始刷新数据();
}
function 开始刷新数据(){
	自由列表框1.清空项目();
	接口={"data": {"phone_number": "","name": ""}}
	公用模块.显示等待框("读取中...");
	公用模块.发送网络请求(处理电话簿,"/contact/query",接口);
}
function 添加列表框(头像,名字,号码){
	图片框1.置图片(头像);
	标签4.置标题(名字);
	标签5.置标题(号码);
	自由列表框1.添加项目("自由面板2",true,"");
}
function 处理电话簿(发送结果,返回信息){
	var 计次=0;
	var 头像="";

	公用模块.关闭等待框();

	if(返回信息.code==200 ){
		if(返回信息.data != "success" ){
			自由列表框1.清空项目();
			while(计次<公用模块.取数组成员数(返回信息.data)){
				头像=生成文字图片(返回信息.data[计次].name);
				添加列表框(头像,返回信息.data[计次].name,返回信息.data[计次].phone_number);
				计次=计次+1;
			}
			}else{
			头像=生成文字图片(编辑框2.取内容());
			添加列表框(头像,编辑框2.取内容(),编辑框3.取内容(),"");
			编辑框2.置内容("");
			编辑框3.置内容("");
		    公用模块.弹出提示("号码添加成功");
		}

		}else{

		公用模块.弹出提示("服务器连接失败");
	}
	window.parent.设置角标(2,自由列表框1.取项目总数());
}
function 生成文字图片(text){
	const firstChar = text.charAt(0);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 生成随机颜色();
	ctx.fillRect(0, 0, canvas.width, canvas.height);


	ctx.fillStyle = "#FFFFFF";
	ctx.font = "bold 20px Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";


	ctx.fillText(firstChar, canvas.width / 2, canvas.height / 2);

	return canvas.toDataURL("image/png");

}
function 生成随机颜色(){
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
function 编辑框1_内容被改变(内容){
	if(内容=="" ){

		接口 ={"data": {"phone_number": "","name": ""}}
		}else{

		if(公用模块.是否为数字(内容)==true ){
			接口={"data": {"phone_number": 内容,"name": ""}}
			}else{
			接口={"data": {"phone_number": "","name": 内容}}
		}
	}
	公用模块.发送网络请求(处理电话簿,"/contact/query",接口);
}
function 右侧图标被单击(){
	弹出面板1.显示();
}
function 左侧图标被单击(){
	开始刷新数据();
}
function 标题栏被双击(){
	窗口操作.滚动到顶部();
}
function 自由列表框1_按钮被单击(项目索引,按钮名称){
	switch(按钮名称){
		case "按钮4" :
			window.parent.置剪贴板(自由列表框1.取标签标题(项目索引,"标签5"));
			公用模块.弹出提示("号码已复制");
		break;
		case "按钮3" :
			window.parent.跳转页面("fj.html?sjr="+自由列表框1.取标签标题(项目索引,"标签5")+"&ly=dhb.html");
		break;
	}
}
function 按钮组1_被单击(按钮索引){
	if(按钮索引==0 ){
		弹出面板1.隐藏();
		}else{
		接口={"data": {"phone_number": 编辑框3.取内容(),"name": 编辑框2.取内容()}}
		公用模块.显示等待框("添加中...");
		公用模块.发送网络请求(处理电话簿,"/contact/add",接口);
	}
}