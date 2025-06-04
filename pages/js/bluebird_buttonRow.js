
    function 按钮组(name,event){  
        this.名称 = name;

        this.置样式 = function (index,style){
            var div = document.getElementById(this.名称);
            //var buttons = div.childNodes;
            var buttons = div.getElementsByTagName("button");
            if(index<buttons.length){
                buttons[index].className=style;
            }
        } 
        
        this.取样式 = function (按钮索引){
            var div = document.getElementById(this.名称);
            var buttons = div.getElementsByClassName("mui-btn");
            return buttons[按钮索引].className;
        } 
        
        this.取数量 = function (){
            var div = document.getElementById(this.名称);
            var buttons = div.getElementsByTagName("button");
            return buttons.length
        } 
        
        this.置标题 = function (index,newTitle){
            var div = document.getElementById(this.名称);
            //var buttons = div.childNodes;
            var buttons = div.getElementsByTagName("button");
            if(index<buttons.length){
                buttons[index].innerHTML=newTitle;
            }
        } 

        this.取标题 = function (index){
            var div = document.getElementById(this.名称);
            //var buttons = div.childNodes;
            var buttons = div.getElementsByTagName("button");
            if(index<buttons.length){
                return buttons[index].innerHTML;
            }else{
                return "";
            }
        }  
        
        this.置顶边 = function (top){
            var div = document.getElementById(this.名称);
            
			if (typeof top === "number" || !isNaN(top)) {
				top = top + "px"; // 如果是数字，则直接拼接 'px'
			} 
            div.style.top = top;
        }
        
        this.置加载 = function (index,text,you,yctb){
            if(you==true ){
                mui("#"+this.名称+" button:nth-child("+(index+1)+")")[0].setAttribute("data-loading-icon-position","right");
            }
            if(text != null ){
                mui("#"+this.名称+" button:nth-child("+(index+1)+")")[0].setAttribute("data-loading-text",text);
            }
            if(yctb ==true ){
                mui("#"+this.名称+" button:nth-child("+(index+1)+")")[0].setAttribute("data-loading-icon","");
            }
            mui("#"+this.名称+" button:nth-child("+(index+1)+")").button("loading");
        }
        
        this.取消加载 = function (index){
            mui("#"+this.名称+" button:nth-child("+(index+1)+")").button("reset");
        }  
        
        this.置外边距 = function (top, right, bottom, left){
            var div = document.getElementById(this.名称);
            div.style.margin = `${top}px ${right}px ${bottom}px ${left}px`;
        };

        this.置可视 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称);
                div.style.display="-webkit-flex";                
            }else{
                var div = document.getElementById(this.名称);
                div.style.display="none"; //不占位               
            }
        } 

        this.置可视2 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称);
                div.style.visibility="visible";	                
            }else{
                var div = document.getElementById(this.名称);
                div.style.visibility="hidden"; //占位               
            }
        } 
        
        if(event!=null){
 			mui("#"+this.名称).on("tap", "button",function () {
                var index = this.getAttribute("id");
                event(Number(index));//被单击事件，返回按钮索引
            });       	
        }
    }  


 