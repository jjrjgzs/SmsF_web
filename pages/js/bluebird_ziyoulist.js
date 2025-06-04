    function 自由列表框(name,event1,event2){
        
        //组件内部属性，仅供组件内部使用：
        this.名称 = name;
		
		//组件命令：
		this.添加项目 = function (自由面板,卡片边框,项目标记){
			var panel = document.querySelector("#"+自由面板);
			var height = panel.style.height;
			var div = document.createElement("div");//创建一个卡片节点
			if(卡片边框==true){
				div.className = "mui-card bluebirdkapian";//设置类名,显示卡片边框
			}else{
				div.className = "bluebirdkapian";//设置类名,不显示卡片边框
			}
			var card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
			var index = 0;
            if(card==null){
                index = 0;
            }else{
                index = card.length;
            }
			div.setAttribute("index",index);//设置项目索引
			div.setAttribute("tag",项目标记);//设置项目标记
			var html代码 = document.getElementById(自由面板).innerHTML;
			div.innerHTML = //设置项目结构
                "<ul class='mui-table-view'>\n"+               
                "	<li class='mui-table-view-cell mui-media'>\n"+	
				"		<div class='mui-input-row' style='margin:-10px -10px -10px -15px;display:-webkit-flex;width:110%;height:"+height+";'>\n"+				
                			html代码+"\n"+ 
				"		</div>\n"+	     
                "    </li>\n"+
                "</ul>\n";
            var root = document.getElementById(this.名称);
			root.appendChild(div);//将卡片节点添加到卡片列表根节点
		}
		
		//组件命令：
        this.删除项目=function(index){
            var card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
            if(card==null){
                return;
            }
            if(card.length<=index){
                return;
            }
            card[index].parentNode.removeChild(card[index]); 
			card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
			for(var i = 0;i < card.length; i++){
				card[i].setAttribute("index",i);//刷新全部项目索引
			}
        }
		
		//组件命令：
        this.清空项目=function(){
			var root = document.getElementById(this.名称);
		    while(root.hasChildNodes()){
				root.removeChild(root.firstChild);
			}
		}
		
		//组件命令：
        this.取项目总数=function(){
            var card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
            if(card==null){
                return 0;
            }else{
                return card.length;
            }
        }
		
		//组件命令：
        this.取项目标记=function(index){
            var card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
            if(card==null){
                return "";
            }
            if(card.length<=index){
                return "";
            }            
            return card[index].getAttribute("tag");
        }
		
		//组件命令：
        this.置项目标记=function(index,tag){
            var card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
            if(card==null){
                return;
            }
            if(card.length<=index){
                return;
            }            
            return card[index].setAttribute("tag",tag);
        }

        this.置背景颜色 = function (r,g,b,a){
			var div = document.getElementById(this.名称);	
			div.style.setProperty("background-color", "rgba(" + r + "," + g + "," + b + "," + a + ")");			
		}

        this.置项目颜色 = function (a,b){
            var styleElement = document.createElement("style");
            styleElement.type = "text/css";
            document.getElementsByTagName("head")[0].appendChild(styleElement);
            styleElement.appendChild(document.createTextNode("#"+this.名称+" .mui-table-view-cell{background-color: "+a+" !important;}")); 
            styleElement.appendChild(document.createTextNode("#"+this.名称+" .mui-table-view-cell.mui-active{background-color: "+b+" !important;}")); 
		} 

		//组件命令：
        this.取图片框图片=function(index,name_img){
            var card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
            if(card==null){
                return "";
            }
            if(card.length<=index){
                return "";
            } 
            var value = "";           
            var imgs = card[index].getElementsByTagName("img");
            for(var i = 0;i < imgs.length; i++){
                if(imgs[i].id==name_img){
                    value = imgs[i].src;
                    break;
                } 
            }
            return value;
        }

		//组件命令：
        this.置图片框图片=function(index,name_img,value){
            var card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
            if(card==null){
                return "";
            }
            if(card.length<=index){
                return "";
            }          
            var imgs = card[index].getElementsByTagName("img");
            for(var i = 0;i < imgs.length; i++){
                if(imgs[i].id==name_img){
                    imgs[i].src = value;
                    break;
                } 
            }
        }

		//组件命令：
        this.取标签标题=function(index,name_label){
            var card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
            if(card==null){
                return "";
            }
            if(card.length<=index){
                return "";
            } 
            var value = "";           
            var labels = card[index].getElementsByTagName("label");
            for(var i = 0;i < labels.length; i++){
                if(labels[i].id==name_label){
                    value = labels[i].innerText;
                    break;
                } 
            }
            return value;
        }

		//组件命令：
        this.置标签标题=function(index,name_label,value){
            var card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
            if(card==null){
                return "";
            }
            if(card.length<=index){
                return "";
            }          
            var labels = card[index].getElementsByTagName("label");
            for(var i = 0;i < labels.length; i++){
                if(labels[i].id==name_label){
                    labels[i].innerText = value;
                    break;
                } 
            }
        }

		//组件命令：
        this.取按钮标题=function(index,name_button){
            var card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
            if(card==null){
                return "";
            }
            if(card.length<=index){
                return "";
            } 
            var value = "";           
            var buttons = card[index].getElementsByTagName("button");
            for(var i = 0;i < buttons.length; i++){
                if(buttons[i].id==name_button){
                    value = buttons[i].innerHTML;
                    break;
                } 
            }
            return value;
        }

		//组件命令：
        this.置按钮标题=function(index,name_button,value){
            var card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
            if(card==null){
                return "";
            }
            if(card.length<=index){
                return "";
            }          
            var buttons = card[index].getElementsByTagName("button");
            for(var i = 0;i < buttons.length; i++){
                if(buttons[i].id==name_button){
                    buttons[i].innerHTML = value;
                    break;
                } 
            }
        }

		//组件命令：
        this.置按钮样式=function(index,name_button,value){
            var card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
            if(card==null){
                return "";
            }
            if(card.length<=index){
                return "";
            }          
            var buttons = card[index].getElementsByTagName("button");
            for(var i = 0;i < buttons.length; i++){
                if(buttons[i].id==name_button){
                    buttons[i].className = value;
                    break;
                } 
            }
        }

		//组件命令：
        this.取编辑框内容=function(index,name_input){
            var card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
            if(card==null){
                return "";
            }
            if(card.length<=index){
                return "";
            } 
            var value = "";           
            var inputs = card[index].getElementsByTagName("input");
            for(var i = 0;i < inputs.length; i++){
                if(inputs[i].id==name_input){
                    value = inputs[i].value;
                    break;
                } 
            }
            return value;
        }

		//组件命令：
        this.置编辑框内容=function(index,name_input,value){
            var card = document.getElementById(this.名称).getElementsByClassName("bluebirdkapian");
            if(card==null){
                return "";
            }
            if(card.length<=index){
                return "";
            }          
            var inputs = card[index].getElementsByTagName("input");
            for(var i = 0;i < inputs.length; i++){
                if(inputs[i].id==name_input){
                    inputs[i].value = value;
                    break;
                } 
            }
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

        this.按钮被单击=false;

        function getState(){
            return this.按钮被单击;
        }

        function setState(value){
            this.按钮被单击=value;
        }
        
        //组件事件
        if(event1!=null){		  						
			mui("#"+this.名称).on("tap", ".bluebirdkapian", function() {
		    	var index = this.getAttribute("index");	
                if(getState()==true){
                    setState(false); 
                }else{
                   event1(index,this.getAttribute("tag"));//触发组件的相关事件，这里的是"表项被单击"事件,返回表项的索引
                }					
            });   	
        }
		
		//组件事件
		if(event2!=null){	
        	mui("#"+this.名称).on("tap", "button", function(e) {
				setState(true);
				var index = this.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("index");		
            	event2(index,this.id);//触发组件的相关事件，这里的是"按钮被单击"事件,返回表项的索引
        	});   		
       	}	
		
    }