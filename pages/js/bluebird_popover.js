function 弹出面板(name,event1,event2){   
        //name表示组件在被创建时的名称，event表示组件拥有的事件
        //如果组件有多个事件，可以在后面继续填写这些事件名称
        //例如：function 弹出面板(name,event1,event2,event3){
        
        //组件内部属性，仅供组件内部使用：
        this.名称 = name;
        
        //组件命令：
        this.初始化 = function (left,top,width,height){
            //初始化滚动条
            mui(".mui-scroll-wrapper").scroll();
			var div = document.getElementById(this.名称);
			//设置弹出面板的位置和尺寸
			div.style.setProperty("position", "fixed");
			div.style.setProperty("left", left);
			div.style.setProperty("top", top);
			div.style.setProperty("width", width);
			div.style.setProperty("height", height);
			//将弹出面板移动到body最底部，防止被侧滑面板遮盖
			div.parentNode.removeChild(div);
			document.body.appendChild(div);
        } 
        
        //组件命令：
        this.置组件排列方向 = function (style){
		    var div = document.getElementById(this.名称);
			var scroll = div.getElementsByClassName("mui-scroll")[0];
			if(style==1){//纵向排列
			    scroll.style.cssText="";
			}else{//横向排列
			    scroll.style.cssText="margin:5px;display:-webkit-flex;text-align:center;justify-content:center;";
			}
		}
		
        //组件命令：
        this.添加组件 = function (组件名称){
			var child = document.getElementById(组件名称);//获取组件元素
            var parent = child.parentNode;//获取组件的父元素
			var panel = document.getElementById(this.名称);
			var scroll = panel.getElementsByClassName("mui-scroll")[0];  
			if(parent.className!="mui-content"){
				parent.parentNode.removeChild(parent);
				scroll.appendChild(parent);
			}else{
				child.parentNode.removeChild(child);
				scroll.appendChild(child);				
			}			          
        } 
        
        this.添加组件到外层 = function (组件名称){
			var child = document.getElementById(组件名称);//获取组件元素
            var parent = child.parentNode;//获取组件的父元素
			var panel = document.getElementById(this.名称); 
			if(parent.className!="mui-content"){
				parent.parentNode.removeChild(parent);
				parent.style.zIndex = 10;
				panel.appendChild(parent);
			}else{
				child.parentNode.removeChild(child);
				child.style.zIndex = 10;
				panel.appendChild(child);				
			}			          
        }
		
        //组件命令：
        this.显示 = function (){
            mui("#"+this.名称).popover("show");
        } 
        
        //组件命令：
        this.隐藏 = function (){
           mui("#"+this.名称).popover("hide");
        }  

        //组件命令：
        this.切换 = function (){
           mui("#"+this.名称).popover("toggle");
        }  
       
        //组件事件
        if(event1!=null){
 			document.getElementById(this.名称).addEventListener("shown", function () {
                event1();//触发组件的被显示事件
            });       	
        }
		
        //组件事件
        if(event2!=null){
 			document.getElementById(this.名称).addEventListener("hidden", function () {
                event2();//触发组件的被隐藏事件
            });       	
        }		
}