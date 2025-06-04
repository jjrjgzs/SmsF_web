    function 自由面板(name,height){   
        
        //组件内部属性，仅供组件内部使用：
        this.名称 = name;
		//this.面板高度 = "40px";
		this.面板高度 = height;
		
        //组件命令：
        this.置背景颜色 = function (color){
			var panel = document.getElementById(this.名称);
			panel.style.background = color;
		}

        //组件命令：
        this.置边框颜色 = function (position,width,color){
			var panel = document.getElementById(this.名称);
			switch(position){
				case 1:
					panel.style.borderTop="solid "+width+" "+color;
					break;					
				case 2:
					panel.style.borderRight="solid "+width+" "+color;			
					break;					
				case 3:
					panel.style.borderBottom="solid "+width+" "+color;
					break;
				case 4:
					panel.style.borderLeft="solid "+width+" "+color;
					break;	
				case 5:
					panel.style.border="solid "+width+" "+color;
					break;															
			}
		}

        //组件命令：
        this.置边框阴影 = function (blur,spread,color){
			var panel = document.getElementById(this.名称);
			panel.style.boxShadow="0px 0px "+blur+" "+spread+" "+color;
		}

        //组件命令：
        this.置宽度 = function (value){
			var panel = document.getElementById(this.名称);
			panel.style.width = value;
		}

        //组件命令：
        this.置高度 = function (value){
			var panel = document.getElementById(this.名称);
			panel.style.height = value;
			this.面板高度 = value;
		}

        //组件命令：
        this.置外边距 = function (top,right,bottom,left){
			var panel = document.getElementById(this.名称);
			panel.style.margin = top+" "+right+" "+bottom+" "+left;
		}

        //组件命令：
        this.置内边距 = function (top,right,bottom,left){
			var panel = document.getElementById(this.名称);
			panel.style.padding = top+" "+right+" "+bottom+" "+left;
		}

        //组件命令：
        this.固定在顶部 = function (){
			//var body = document.getElementsByTagName("body")[0];		
			var content = document.getElementsByClassName("mui-content")[0];
			var body = content.parentNode;
			var headers = body.getElementsByTagName("header");
			var header;
			if(headers==null || headers.length==0){
				header = document.createElement("header");
				body.insertBefore(header,content);
				header.className="mui-bar";
				header.style.padding = "0px 0px";
				header.style.height = this.面板高度;
			}else{
				header = headers[0]; 
			}
			var panel = document.getElementById(this.名称);
            var parent = panel.parentNode;
			parent.removeChild(panel);
			header.appendChild(panel);	
			content.style.paddingTop=this.面板高度;			
		}

        //组件命令：
        this.固定在底部 = function (){
			//var body = document.getElementsByTagName("body")[0];			
			var content = document.getElementsByClassName("mui-content")[0];
			var body = content.parentNode;
			var footers = body.getElementsByTagName("footer");
			var footer;
			if(footers==null || footers.length==0){
				footer = document.createElement("footer");				
				body.insertBefore(footer, content.nextSibling);
				footer.style.position = "fixed";
				footer.style.bottom = "0px";
				footer.style.width = "100%"
				footer.style.setProperty("z-index",10000);
			}else{
				footer = footers[0]; 
			}
			var panel = document.getElementById(this.名称);
            var parent = panel.parentNode;
			parent.removeChild(panel);
			footer.appendChild(panel);
			content.style.paddingBottom=this.面板高度;				
		}
        
        //组件命令：
        this.置可视 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称);
                div.style.display="-webkit-flex";//显示	                
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
        
    }