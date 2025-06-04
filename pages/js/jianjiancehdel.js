function 渐渐侧滑删除(name,event1,event2,event3,event4){   
		
		//组件内部属性，仅供组件内部使用：
		this.名称 = name;
		this.项目总数 = 0;
		
		//组件命令：
		this.取项目总数 = function (){
			return document.getElementById(this.名称).getElementsByClassName("mui-table-view-cell").length;
		}
		
		this.置项目标记 = function (表项索引,标记){
			document.getElementById("jianjiancehdelbiaoti" + 表项索引).setAttribute("tag",标记);
		}
		
		this.取项目标记 = function(表项索引){
			return document.getElementById("jianjiancehdelbiaoti" + 表项索引).getAttribute("tag");
		}
		
		//组件命令：
		this.置可视 = function (value){
			if(value==true){
				var div = document.getElementById(this.名称).parentNode;
				div.style.display="block";//显示	                
				}else{
				var div = document.getElementById(this.名称).parentNode;
				div.style.display="none"; //不占位隐藏               
			}
		} 
		
		//组件命令：
		this.置可视2 = function (value){
			if(value==true){
				var div = document.getElementById(this.名称).parentNode;
				div.style.visibility="visible";//显示	                
				}else{
				var div = document.getElementById(this.名称).parentNode;
				div.style.visibility="hidden"; //占位隐藏               
			}
		}
		
		this.添加项目 = function (标题,标题颜色,项目消息,消息颜色,项目时间,时间颜色,角标数值,项目图片,侧滑按钮标题1,侧滑按钮标题2,侧滑按钮标题3,标记){
			var classeses = "";
			var shijianyanse = "";
			var yanse = "";
			var xiaoxiyanse = "";
			var 项目 = 0;
			var div = document.createElement("li");//创建一个卡片节点
			div.id = "divHOBBESCell"+this.项目总数;
			div.className = "mui-table-view-cell";//设置类名
			div.setAttribute("index",""+this.项目总数);//设置项目索引
			this.项目总数 = this.项目总数+1;
			项目 = this.项目总数-1;
			if(角标数值 != ""){
				classeses = "mui-badge mui-badge-primary"
				}else{
				classeses = ""
			}
			if(标题颜色 !=""){
				yanse = "color:" + 标题颜色 + ";";
				div.setAttribute("yanse1",标题颜色);//设置项目索引
				}else{
				yanse = "color:#000000;";
				div.setAttribute("yanse1","#000000");//设置项目索引
			}
			if(时间颜色 !=""){
				shijianyanse = "color:" + 时间颜色 + ";";
				div.setAttribute("yanse2",时间颜色);//设置项目索引
				}else{
				shijianyanse = "color:#C0C0C0;";
				div.setAttribute("yanse2","#C0C0C0");//设置项目索引
			}
			if(消息颜色 !=""){
				xiaoxiyanse = "color:" + 消息颜色 + ";";
				div.setAttribute("yanse2",消息颜色);//设置项目索引
				}else{
				xiaoxiyanse = "color:#C0C0C0;";
				div.setAttribute("yanse2","#C0C0C0");//设置项目索引
			}	
			div.innerHTML = "		<div class=\"mui-slider-right mui-disabled\">\n"+
			"			<a id=\"jianjiancehdelhuadong"+项目+"\" class=\"mui-btn mui-btn-primary\">"+侧滑按钮标题1+"</a>\n"+
			"			<a id=\"jianjiancehdelhuadongi"+项目+"\" class=\"mui-btn mui-btn-warning\">"+侧滑按钮标题2+"</a>\n"+
			"			<a id=\"jianjiancehdelhuadongii"+项目+"\" class=\"mui-btn mui-btn-red\">"+侧滑按钮标题3+"</a>\n"+
			"		</div>\n"+
			"           <div class=\"mui-slider-handle\">\n"+
			"               <img id=\"jianjiancehdeltouxiang"+项目+"\" style=\"width:40px;height:40px;border-radius:40px;\" index=\""+项目+"\" class=\"mui-media-object mui-pull-left top\" src=\""+项目图片+"\" />\n"+
			"               <li><a id=\"jianjiancehdelbiaoti"+项目+"\" style=\""+yanse+"\" tag=\""+标记+"\" class=\"mui-ellipsis\">"+标题+"</a><p class='mui-ellipsis' style=\"float:right;\"><a id=\"jianjiancehdelshijian"+项目+"\" style=\""+shijianyanse+"\">"+项目时间+"</a></p><br><span id=\"jianjiancehdeljiaobiao"+项目+"\" class=\""+classeses+"\" style=\"float:right;\">"+角标数值+"</span><p class='mui-ellipsis'><a id=\"jianjiancehdelxiaoxi"+项目+"\" class=\"mui-ellipsis\" style=\""+xiaoxiyanse+"\">"+项目消息+"</a></p></li>\n"+
			"           </div>\n"+
			"	</li>"
			var root = document.getElementById(this.名称);
			root.appendChild(div);//将卡片节点添加到卡片列表根节点
		}
		
		this.置角标 = function(表项索引,角标){
			var a=document.getElementById("jianjiancehdeljiaobiao" + 表项索引);
			a.className = "mui-badge mui-badge-primary";
			a.innerHTML = 角标;
		}
		
		this.删除角标 = function(表项索引){
			var a=document.getElementById("jianjiancehdeljiaobiao" + 表项索引);
			a.className = "";
			a.innerHTML = "";
		}
		
		this.修改标题 = function(表项索引,标题){
			var a=document.getElementById("jianjiancehdelbiaoti" + 表项索引);
			a.innerHTML = 标题;	
		}
		
		this.修改图片 = function(表项索引,图片){
			var a=document.getElementById("jianjiancehdeltouxiang" + 表项索引);
			a.src = 图片;
		}
		
		this.修改时间 = function(表项索引,时间){
			var a=document.getElementById("jianjiancehdelshijian" + 表项索引);
			a.innerHTML = 时间;	
		}
		
		this.修改消息 = function(表项索引,消息){
			var a=document.getElementById("jianjiancehdelxiaoxi" + 表项索引);
			a.innerHTML = 消息;	
		}
		
		this.修改颜色 = function(表项索引,标题颜色,消息颜色,时间颜色){
			document.getElementById("jianjiancehdelbiaoti" + 表项索引).style.color = 标题颜色;
			document.getElementById("jianjiancehdelxiaoxi" + 表项索引).style.color = 消息颜色;
			document.getElementById("jianjiancehdelshijian" + 表项索引).style.color = 时间颜色;
		}
		
		this.清空项目 = function(){
			var root = document.getElementById(this.名称);
			while(root.hasChildNodes()){
				root.removeChild(root.firstChild);
				this.项目总数 = 0;
			}
		}
		
		this.删除项目 = function(表项索引){
			var item = document.getElementById("divHOBBESCell"+表项索引);
			if (item == null){
				return;
			}
			item.parentNode.removeChild(item);//删除项目节点
			this.项目总数 = this.项目总数 - 1;
			item = document.getElementById(this.名称).getElementsByClassName("mui-table-view-cell");
			for(var i = 0;i < item.length; i++){//刷新全部项目索引				
				item[i].setAttribute("id","divHOBBESCell"+i);
				item[i].setAttribute("index",i);
				
				var slider = item[i].getElementsByClassName("mui-slider-right");
				var button = slider[0].getElementsByTagName("a");
				button[0].setAttribute("id","jianjiancehdelhuadong"+i);
				button[1].setAttribute("id","jianjiancehdelhuadongi"+i);
				button[2].setAttribute("id","jianjiancehdelhuadongii"+i);
				
				var handle = item[i].getElementsByClassName("mui-slider-handle");
				var image = handle[0].getElementsByTagName("img");
				image[0].setAttribute("id","jianjiancehdeltouxiang"+i);
				image[0].setAttribute("index",i);
				
				var li = handle[0].getElementsByTagName("li");
				var a = li[0].getElementsByTagName("a");
				a[0].setAttribute("id","jianjiancehdelbiaoti"+i);
				a[1].setAttribute("id","jianjiancehdelshijian"+i);
				a[2].setAttribute("id","jianjiancehdelxiaoxi"+i);				
				var span = li[0].getElementsByTagName("span");
				span[0].setAttribute("id","jianjiancehdeljiaobiao"+i);				
			}			
		}
		
		this.取项目标题 = function(表项索引){
			var a=document.getElementById("jianjiancehdelbiaoti" + 表项索引);
			return a.innerHTML;
		}
		
		this.取项目图片 = function(表项索引){
			var a=document.getElementById("jianjiancehdeltouxiang" + 表项索引);
			return a.src;
		}
		
		this.取项目时间 = function(表项索引){
			var a=document.getElementById("jianjiancehdelshijian" + 表项索引);
			return a.innerHTML;
		}
		
		this.取项目消息 = function(表项索引){
			var a=document.getElementById("jianjiancehdelxiaoxi" + 表项索引);
			return a.innerHTML;
		}
		
		this.取项目角标 = function(表项索引){
			var a=document.getElementById("jianjiancehdeljiaobiao" + 表项索引);
			return a.innerHTML;
		}
		
		this.取项目颜色 = function(表项索引,参数){
			var 颜色 = "";
			if(参数 = 0){
				//标题颜色
				颜色 = "yanse";
				}else if(参数 = 1){
				//时间颜色
				颜色 = "yanse1";
				}else if(参数 = 2){
				//消息颜色
				颜色 = "yanse2";
			}
			
			var card = document.getElementById(this.名称).getElementsByClassName("mui-table-view-cell");
			if(card.length>表项索引){
				return card[表项索引].getAttribute(颜色);
				}else{
				return "";
			}			
			
		}
		
		this.取滑动按钮1标题 = function (表项索引){
			var a=document.getElementById("jianjiancehdelhuadong" + 表项索引);
			return a.innerHTML;
		}
		
		this.取滑动按钮2标题 = function (表项索引){
			var a=document.getElementById("jianjiancehdelhuadongi" + 表项索引);
			return a.innerHTML;
		}
		
		this.取滑动按钮3标题 = function (表项索引){
			var a=document.getElementById("jianjiancehdelhuadongii" + 表项索引);
			return a.innerHTML;
		}
		
		this.恢复滑动位置 = function(表项索引){
			// 获取所有带有 style 属性的 div 元素
			const liElement = document.getElementById("divHOBBESCell"+表项索引);
			// 获取所有 class 为 mui-slider-right.mui-disabled.mui-selected 的元素
			const sliderRightElements = liElement.querySelectorAll('.mui-slider-right.mui-disabled.mui-selected a');

			// 获取所有 class 为 mui-slider-handle 的元素
			const sliderHandleElements = liElement.querySelectorAll('.mui-slider-handle');

			// 遍历每个 mui-slider-right 元素，将 transform 属性设置为 'translate(0px, 0px)'
			sliderRightElements.forEach(function(element) {
				element.style.transform = "translate(0px, 0px)";
			});

			// 遍历每个 mui-slider-handle 元素，将 transform 属性设置为 'translate(0px, 0px)'
			sliderHandleElements.forEach(function(element) {
				element.style.transform = "translate(0px, 0px)";
			});

			// 修改该元素的 class
			liElement.className = 'mui-table-view-cell';

			// 获取该 li 元素内部的 mui-slider-right div 元素
			const sliderRightDiv = liElement.querySelector('.mui-slider-right');

			// 修改该元素的 class
			if (sliderRightDiv) {
				// 移除 mui-selected 类
				sliderRightDiv.classList.remove('mui-selected');
			}
		}
		
		var 取项目标题 = function(表项索引){
			var a=document.getElementById("jianjiancehdelbiaoti" + 表项索引);
			return a.innerHTML;
		}
		
		var 取项目标记 = function(表项索引){
			return document.getElementById("jianjiancehdelbiaoti" + 表项索引).getAttribute("tag");
		}
		
		var 取项目图片 = function(表项索引){
			var a=document.getElementById("jianjiancehdeltouxiang" + 表项索引);
			return a.src;
		}
		
		var 取项目时间 = function(表项索引){
			var a=document.getElementById("jianjiancehdelshijian" + 表项索引);
			return a.innerHTML;
		}
		
		var 取项目消息 = function(表项索引){
			var a=document.getElementById("jianjiancehdelxiaoxi" + 表项索引);
			return a.innerHTML;
		}
		
		var 取项目角标 = function(表项索引){
			var a=document.getElementById("jianjiancehdeljiaobiao" + 表项索引);
			return a.innerHTML;
		}
		
		var 取滑动按钮1标题 = function (表项索引){
			var a=document.getElementById("jianjiancehdelhuadong" + 表项索引);
			return a.innerHTML;
		}
		
		var 取滑动按钮2标题 = function (表项索引){
			var a=document.getElementById("jianjiancehdelhuadongi" + 表项索引);
			return a.innerHTML;
		}
		
		var 取滑动按钮3标题 = function (表项索引){
			var a=document.getElementById("jianjiancehdelhuadongii" + 表项索引);
			return a.innerHTML;
		}
		
		this.置顶项目 = function (表项索引){
			var 标题 = 取项目标题(表项索引);
			var 项目标记 = 取项目标记(表项索引);
			var 项目消息 = 取项目消息(表项索引);
			var 项目时间 = 取项目时间(表项索引);
			var 角标数值 = 取项目角标(表项索引);
			var 项目图片 = 取项目图片(表项索引);
			var 侧滑按钮标题1 = 取滑动按钮1标题(表项索引);
			var 侧滑按钮标题2 = 取滑动按钮2标题(表项索引);
			var 侧滑按钮标题3 = 取滑动按钮3标题(表项索引);
			var 标题颜色 = "";
			var 消息颜色 = "";
			var 时间颜色 = "";
			var classeses = "";
			var shijianyanse = "";
			var yanse = "";
			var xiaoxiyanse = "";
			var 项目 = 0;
			var div = document.createElement("li");//创建一个卡片节点
			div.id = "divHOBBESCell"+this.项目总数;
			div.className = "mui-table-view-cell";//设置类名
			div.setAttribute("index",""+this.项目总数);//设置项目索引
			this.项目总数 = this.项目总数+1;
			项目 = this.项目总数-1;
			if(角标数值 != ""){
				classeses = "mui-badge mui-badge-primary"
				}else{
				classeses = ""
			}
			if(标题颜色 !=""){
				yanse = "color:" + 标题颜色 + ";";
				}else{
				yanse = "color:#000000;";
			}
			if(时间颜色 !=""){
				shijianyanse = "color:" + 时间颜色 + ";";
				}else{
				shijianyanse = "color:#C0C0C0;";
			}
			if(消息颜色 !=""){
				xiaoxiyanse = "color:" + 消息颜色 + ";";
				}else{
				xiaoxiyanse = "color:#C0C0C0;";
			}	
			div.innerHTML = "		<div class=\"mui-slider-right mui-disabled\">\n"+
			"			<a id=\"jianjiancehdelhuadong"+项目+"\" class=\"mui-btn mui-btn-primary\">"+侧滑按钮标题1+"</a>\n"+
			"			<a id=\"jianjiancehdelhuadongi"+项目+"\" class=\"mui-btn mui-btn-warning\">"+侧滑按钮标题2+"</a>\n"+
			"			<a id=\"jianjiancehdelhuadongii"+项目+"\" class=\"mui-btn mui-btn-red\">"+侧滑按钮标题3+"</a>\n"+
			"		</div>\n"+
			"           <div class=\"mui-slider-handle\">\n"+
			"               <img id=\"jianjiancehdeltouxiang"+项目+"\" style=\"width:40px;height:40px;border-radius:40px;\" index=\""+项目+"\" class=\"mui-media-object mui-pull-left top\" src=\""+项目图片+"\" />\n"+
			"               <li><a id=\"jianjiancehdelbiaoti"+项目+"\" style=\""+yanse+"\" tag=\""+项目标记+"\" class=\"mui-ellipsis\">"+标题+"</a><p class='mui-ellipsis' style=\"float:right;\"><a id=\"jianjiancehdelshijian"+项目+"\" style=\""+shijianyanse+"\">"+项目时间+"</a></p><br><span id=\"jianjiancehdeljiaobiao"+项目+"\" class=\""+classeses+"\" style=\"float:right;\">"+角标数值+"</span><p class='mui-ellipsis'><a id=\"jianjiancehdelxiaoxi"+项目+"\" class=\"mui-ellipsis\" style=\""+xiaoxiyanse+"\">"+项目消息+"</a></p></li>\n"+
			"           </div>\n"+
			"	</li>"
			var root = document.getElementById(this.名称);
			var aLi=root.getElementsByTagName('li');//获取所有的li
			root.insertBefore(div,aLi[0]);//将卡片节点添加到卡片列表根节点
			var my = document.getElementById("divHOBBESCell"+表项索引);
			if (my != null)
			my.parentNode.removeChild(my);
		}
				
		//组件事件
		if(event1!=null){
			//mui("#"+组件ID).on(事件名称, 标签名称或类名称, function() {
			mui("#"+this.名称).on("tap", ".mui-table-view-cell", function() {
				var index1 = this.parentNode.parentNode.getAttribute("index");
				var index2 = this.getAttribute("index");
				event1(Number(index2));//触发组件的相关事件，这里的是"表项按钮被单击"事件
			});
        }
		
		//组件事件	
        if(event2!=null){
			//mui("#"+组件ID).on(事件名称, 标签名称或类名称, function() {
			mui("#"+this.名称).on("tap", ".mui-btn.mui-btn-primary", function() {
				var index1 = this.parentNode.parentNode.getAttribute("index");
				var index2 = this.getAttribute("index");
				event2(Number(index1));//触发组件的相关事件，这里的是"表项按钮被单击"事件
            });
		}
		
		//组件事件			
		if(event3!=null){
			//mui("#"+组件ID).on(事件名称, 标签名称或类名称, function() {
			mui("#"+this.名称).on("tap", ".mui-btn.mui-btn-warning", function() {
				var index1 = this.parentNode.parentNode.getAttribute("index");
				var index2 = this.getAttribute("index");
                event3(Number(index1));//触发组件的相关事件，这里的是"表项按钮被单击"事件
			});
		}
		
		//组件事件			
		if(event4!=null){
			//mui("#"+组件ID).on(事件名称, 标签名称或类名称, function() {
			mui("#"+this.名称).on("tap", ".mui-btn.mui-btn-red", function() {
				var index1 = this.parentNode.parentNode.getAttribute("index");
				var index2 = this.getAttribute("index");
				event4(Number(index1));//触发组件的相关事件，这里的是"表项按钮被单击"事件
			});
		}
							
}
						
												