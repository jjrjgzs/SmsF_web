    function 卡片列表框(name,event1,event2){   
        //name表示组件在被创建时的名称，event表示组件拥有的事件
        //如果组件有多个事件，可以在后面继续填写这些事件名称
        //例如：function 卡片列表框(name,event1,event2,event3){
        
		//注意：在工程数据-设置-属性中,添加了用于创建组件的HTML代码
		
        //组件内部属性，仅供组件内部使用：
        this.名称 = name;
        this.项目总数 = 0;
		
        //组件命令：
        this.添加项目 = function (头像,昵称,时间,图片数组,内容,左侧按钮图标,左侧按钮标题,右侧按钮图标,右侧按钮标题,项目标记,反向添加){
			var div = document.createElement("div");//创建一个卡片节点
			div.className = "mui-card";//设置类名
			if(反向添加==true){
				div.setAttribute("index","0");//设置项目索引
			}else{
				div.setAttribute("index",""+this.项目总数);//设置项目索引
			}
			this.项目总数 = this.项目总数+1;
			div.setAttribute("tag",项目标记);//设置项目标记
			//分析图片的个数
			var 图片代码 = "";
			if(图片数组.length>1){
				for(var i=0;i<图片数组.length;i++){
					if(i%2==0){
						图片代码 = 图片代码 + "<img src=\""+图片数组[i]+"\" width=\"45%\"/>"
					}else{
						图片代码 = 图片代码+ "\n" + "<img src=\""+图片数组[i]+"\" width=\"45%\"/>"
					}
				}
			}else if(图片数组.length==1){
				图片代码 = "<img src=\""+图片数组[0]+"\" width=\"100%\"/>"
			}
			//设置html结构
			div.innerHTML = "<div class=\"mui-card-header mui-card-media\">\n"+
					"<img src="+头像+" />\n"+
					"<div class=\"mui-media-body\">"+
						昵称+
						"<p>"+时间+"</p>"+
					"</div>"+
				"</div>"+
				"<div class=\"mui-card-content\">"+
                    "<div style=\"text-align:center\">"+
                        图片代码+
					"</div>"+					
					"<div class=\"mui-card-content-inner\">"+
						内容+
					"</div>"+					
				"</div>"+
				"<div class=\"mui-card-footer\">"+
					"<a class=\""+左侧按钮图标+"\" style=\"font-size:14px;\" index=\"0\">"+左侧按钮标题+"</a>"+
					"<a class=\""+右侧按钮图标+"\" style=\"font-size:14px;\" index=\"1\">"+右侧按钮标题+"</a>"+
				"</div>"
            var root = document.getElementById(this.名称);
			//root.appendChild(div);//将卡片节点添加到卡片列表根节点的末尾
			if(反向添加==true){
				if(this.项目总数>1){
                	root.insertBefore(div,root.childNodes[0]);//将卡片节点添加到卡片列表根节点的开头
				    var card2 = document.getElementById(this.名称).getElementsByClassName("mui-card");
				    for(var i = 0;i < card2.length; i++){
				        card2[i].setAttribute("index",i);//刷新全部项目索引
				    }					
				}else{
                	root.appendChild(div);//将卡片节点添加到卡片列表根节点的末尾
				}
			}else{
				root.appendChild(div);//将卡片节点添加到卡片列表根节点的末尾
			}
        } 

		//组件命令：
		this.取项目标记 = function(index){
			var card = document.getElementById(this.名称).getElementsByClassName("mui-card");
			if(card.length>index){
				return card[index].getAttribute("tag");
			}else{
				return "";
			}
		}
		
		this.取项目总数 = function(){
			return this.项目总数;
		}
        
		//组件命令：
		this.删除项目 = function(index){
            var card = document.getElementById(this.名称).getElementsByClassName("mui-card");
			if(index<card.length){
				   this.项目总数 = this.项目总数-1;
			       var root = card[index].parentNode;
				   root.removeChild(card[index]);//删除这个卡片节点
				   var card2 = document.getElementById(this.名称).getElementsByClassName("mui-card");
				   for(var i = 0;i < card2.length; i++){
				          card2[i].setAttribute("index",i);//刷新全部项目索引
				   }
			}			
		}

		//组件命令：
        this.清空表项 = function (){
			var root = document.getElementById(this.名称);
		    while(root.hasChildNodes()){
				root.removeChild(root.firstChild);
			}
			this.项目总数 = 0;
		}
		
        //组件命令：
        this.置可视 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称);
                div.style.display="block";//显示	                
            }else{
                var div = document.getElementById(this.名称);
                div.style.display="none"; //不占位隐藏               
            }
        } 
        
        //组件命令：
        this.置可视2 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称);
                div.style.visibility="visible";//显示	                
            }else{
                var div = document.getElementById(this.名称);
                div.style.visibility="hidden"; //占位隐藏               
            }
        } 
        
        //组件事件
        if(event1!=null){
			//mui("#"+组件ID).on(事件名称, 标签名称或类名称, function() {
 			mui("#"+this.名称).on("tap", ".mui-card-content", function() {
				var index = this.parentNode.getAttribute("index");
                event1(Number(index));//触发组件的相关事件，这里的是"表项内容被单击"事件
            });       	
        }
		
        //组件事件
        if(event2!=null){
			//mui("#"+组件ID).on(事件名称, 标签名称或类名称, function() {
 			mui("#"+this.名称).on("tap", "a", function() {
				var index1 = this.parentNode.parentNode.getAttribute("index");
				var index2 = this.getAttribute("index");
                event2(Number(index1),Number(index2));//触发组件的相关事件，这里的是"表项按钮被单击"事件
            });       	
        }		
		
    }