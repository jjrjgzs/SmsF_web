var 按钮组1 = new 按钮组("按钮组1",按钮组1_被单击);
var 高级列表框1 = new 高级列表框("高级列表框1",false,true,false,null);
var 高级列表框2 = new 高级列表框("高级列表框2",false,false,false,null);
var 高级列表框3 = new 高级列表框("高级列表框3",false,false,false,null);
var 标签1 = new 标签("标签1",null);
var 编辑框1 = new 编辑框("编辑框1",null,null,null,null,null);
var 标签2 = new 标签("标签2",null);
var 编辑框2 = new 编辑框("编辑框2",null,null,null,null,null);
var 按钮1 = new 按钮("按钮1",按钮1_被单击,null,null);
    window.onload=function(){ 
        设置_创建完毕();
        
    }

	var 当前选中=0;
function 设置_创建完毕(){

	按钮组1.置样式(0,"mui-btn mui-btn-primary");

	标签1.置外边距(10,0,5,0);
	标签2.置外边距(10,0,5,0);
	按钮1.置外边距(10,0,0,0);

	公用模块.显示等待框("读取中...");
	公用模块.发送网络请求(处理设置数据,"/config/query");
}
function 调整组件状态(索引){
	var 状态 = 索引==2 ? true : false;
	标签1.置可视(状态);
	标签2.置可视(状态);
	编辑框1.置可视(状态);
	编辑框2.置可视(状态);
	按钮1.置可视(状态);
}
function 处理设置数据(发送结果,返回信息){
	var 开关状态="";
	公用模块.关闭等待框();
	if(返回信息.code==200 ){
		switch(当前选中){
			case 0 :

				高级列表框1.添加项目("images/xq.png","设备备注",返回信息.data.extra_device_mark,"");
				高级列表框1.添加项目("images/xq.png","SIM1备注",公用模块.子文本替换(返回信息.data.extra_sim1,"\\+86",""),"");
				高级列表框1.添加项目("images/xq.png","SIM2备注",公用模块.子文本替换(返回信息.data.extra_sim2,"\\+86",""),"");
				开关状态=返回信息.data.enable_api_clone?"images/kq.png":"images/wk.png";
				高级列表框3.添加项目(开关状态,"一键换新机");
				开关状态=返回信息.data.enable_api_sms_query?"images/kq.png":"images/wk.png";
				高级列表框3.添加项目(开关状态,"远程查短信");
				开关状态=返回信息.data.enable_api_sms_send?"images/kq.png":"images/wk.png";
				高级列表框3.添加项目(开关状态,"远程发短信");
				开关状态=返回信息.data.enable_api_call_query?"images/kq.png":"images/wk.png";
				高级列表框3.添加项目(开关状态,"远程查通话");
				开关状态=返回信息.data.enable_api_contact_query?"images/kq.png":"images/wk.png";
				高级列表框3.添加项目(开关状态,"远程查话簿");
				开关状态=返回信息.data.enable_api_contact_add?"images/kq.png":"images/wk.png";
				高级列表框3.添加项目(开关状态,"远程加话簿");
				开关状态=返回信息.data.enable_api_wol?"images/kq.png":"images/wk.png";
				高级列表框3.添加项目(开关状态,"远程WOL");
				开关状态=返回信息.data.enable_api_location?"images/kq.png":"images/wk.png";
				高级列表框3.添加项目(开关状态,"远程找手机");
				开关状态=返回信息.data.enable_api_battery_query?"images/kq.png":"images/wk.png";
				高级列表框3.添加项目(开关状态,"远程查电量");
			break;
			case 1 :

				高级列表框2.添加项目("images/dc.png","剩余电量∶"+返回信息.data.level,"");
				高级列表框2.添加项目("images/dc.png","充满电量∶"+返回信息.data.scale,"");
				高级列表框2.添加项目("images/dc.png","当前电压∶"+返回信息.data.voltage,"");
				高级列表框2.添加项目("images/dc.png","当前温度∶"+返回信息.data.temperature,"");
				高级列表框2.添加项目("images/dc.png","电池状态∶"+返回信息.data.status,"");
				高级列表框2.添加项目("images/dc.png","健康度∶"+返回信息.data.health,"");
				高级列表框2.添加项目("images/dc.png","充电器∶"+返回信息.data.plugged,"");
			break;
			case 2 :
				公用模块.弹出提示("发送成功");
			break;
		}

		}else{
		高级列表框1.清空项目();
	    高级列表框2.清空项目();
	    高级列表框3.清空项目();
		公用模块.弹出提示("服务器连接失败");
	}
}
function 按钮1_被单击(){
	var 接口= {"data": {"mac": 编辑框1.取内容(),"ip": 编辑框2.取内容() }}
	公用模块.显示等待框("发送中...");
	公用模块.发送网络请求(处理设置数据,"/wol/send",接口);
}
function 按钮组1_被单击(按钮索引){
	按钮组1.置样式(0,"mui-btn mui-btn-primary mui-btn-outlined");
	按钮组1.置样式(1,"mui-btn mui-btn-primary mui-btn-outlined");
	按钮组1.置样式(2,"mui-btn mui-btn-primary mui-btn-outlined");
	按钮组1.置样式(按钮索引,"mui-btn mui-btn-primary");
	当前选中=按钮索引;
	高级列表框1.清空项目();
	高级列表框2.清空项目();
	高级列表框3.清空项目();
	调整组件状态(按钮索引);
	switch(按钮索引){
		case 0 :
			公用模块.显示等待框("读取中...");
			公用模块.发送网络请求(处理设置数据,"/config/query");
		break;
		case 1 :
			公用模块.显示等待框("读取中...");
			公用模块.发送网络请求(处理设置数据,"/battery/query");
		break;
	}
}