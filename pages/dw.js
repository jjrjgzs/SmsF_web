var 按钮1 = new 按钮("按钮1",按钮1_被单击,null,null);
var 标签1 = new 标签("标签1",null);
var 浏览框1 = new 浏览框("浏览框1",null);
    window.onload=function(){ 
        远程定位_创建完毕();
        
    }

function 远程定位_创建完毕(){

	浏览框1.置尺寸("110px","10px");

	公用模块.显示等待框("地图加载中...");
	公用模块.发送网络请求(处理手机定位,"/location/query");

}
function 处理手机定位(发送结果,返回信息){
	var 经度=0;
	var 纬度=0;
	var 位置="";
    公用模块.关闭等待框();
	if(返回信息.code==200 ){
		经度=返回信息.data.longitude;
		纬度=返回信息.data.latitude;
		位置=返回信息.data.address!=""?"位置∶ "+返回信息.data.address:"";
		标签1.置标题(位置 + "<br>经度∶ "+经度+"<br>纬度∶ "+纬度);
		if(经度>0 || 纬度>0 ){
			位置=经度+","+纬度;
			浏览框1.跳转("https://uri.amap.com/marker?position="+位置+"&name=手机当前位置&src=mypage&coordinate=gaode&callnative=0");
			}else{
			公用模块.弹出提示("手机端未正确获取定位");
		}
		}else{
		标签1.置标题("");
		公用模块.弹出提示("获取定位失败");
	}

}
function 按钮1_被单击(){
	公用模块.显示等待框("地图加载中...");
	公用模块.发送网络请求(处理手机定位,"/location/query");
}