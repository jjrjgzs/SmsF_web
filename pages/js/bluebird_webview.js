    function 浏览框(name,event){   
        //name表示组件在被创建时的名称，event表示组件拥有的事件
        //如果组件有多个事件，可以在后面继续填写这些事件名称
        //例如：function 浏览框(name,event1,event2,event3){
        
        //组件内部属性，仅供组件内部使用：
        this.名称 = name;
        
        //组件命令：
        this.置尺寸 = function (顶边,下边){
            var web = document.getElementById(this.名称+"_iframe")
            web.style.cssText="top: "+顶边+"; bottom: "+下边;
        } 

        //组件命令：
        this.取地址 = function (){
           return document.getElementById(this.名称).contentWindow.location.href;
        }  

        //组件命令：
        this.取源码 = function (){
		   return document.getElementById(this.名称).contentWindow.document.getElementsByTagName("html")[0].innerHTML;
        } 

        //组件命令：
        this.取标题 = function (){
           return document.getElementById(this.名称).contentWindow.document.getElementsByTagName("title")[0].innerText;
        } 

        //组件命令：
        this.滚动到顶部 = function (){
			var a = document.getElementById(this.名称).contentWindow.document;
			a.body.scrollTop = 0;
		}

        //组件命令：
        this.滚动到底部 = function (){
			var a = document.getElementById(this.名称).contentWindow.document;
			a.body.scrollTop = a.body.scrollHeight;
		}
		
        //组件命令：
        this.跳转 = function (url){
           document.getElementById(this.名称).src=url;
        }

        //组件命令：
        this.刷新 = function (){
           document.getElementById(this.名称).contentWindow.location.reload(); 
        }

        //组件命令：
        this.后退 = function (){
           document.getElementById(this.名称).contentWindow.history.back(); 
        }

        //组件命令：
        this.前进 = function (){
           document.getElementById(this.名称).contentWindow.history.forward(); 
        }
       
        //组件命令：
        this.置可视 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称);
                div.style.display="";//显示，也可以设置为block	                
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
        if(event!=null){
 			document.getElementById(this.名称).addEventListener("load", function () {
                event();//触发组件的相关事件，这里演示的是onload加载完毕事件
            });       	
        }
    }