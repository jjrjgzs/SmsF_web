function 标签(name,functionName){  
    this.名称 = name;
    
    this.置标题 = function (newTitle){
        //document.getElementById(this.名称).innerText=newTitle;
        document.getElementById(this.名称).innerHTML=newTitle;
    } 

    this.取标题 = function (){
       //return document.getElementById(this.名称).innerText;
       return document.getElementById(this.名称).innerHTML;
    }
    
    this.置字体大小 = function (Size){
        var div = document.getElementById(this.名称);
        div.style.fontSize = Size+"px";
    } 
    
    this.置行距 = function (height){
        var label = document.getElementById(this.名称);
        label.style.lineHeight = height+ "em";     
    }  
    
    this.置外边距 = function (top, right, bottom, left){
        var label = document.getElementById(this.名称);
        label.style.margin = `${top}px ${right}px ${bottom}px ${left}px`;
    };
    
    this.置内边距 = function (top, right, bottom, left){
        var label = document.getElementById(this.名称);
        label.style.padding = `${top}px ${right}px ${bottom}px ${left}px`;
    };

    this.置背景颜色 = function (color){
        document.getElementById(this.名称).style.background=color;
    }

    this.置字体颜色 = function (color){
        document.getElementById(this.名称).style.color=color;
    }

    this.置缩略显示 = function (){
        var div = document.getElementById(this.名称);
        div.style.setProperty("white-space", "nowrap");	
        div.style.setProperty("overflow", "hidden");	
        div.style.setProperty("text-overflow", "ellipsis");	
    }

    this.置竖排显示 = function (height){
        document.getElementById(this.名称).style.writingMode = "vertical-lr";
        this.置高度(height);
    }

    this.置横排显示 = function (height){
        document.getElementById(this.名称).style.writingMode = "inherit";
        this.置高度(height);            
    }

    this.置高度 =function (value){
        var div = document.querySelector("#"+this.名称);
        if(div.parentNode.className!="mui-content"){
            if(div.parentNode.getAttribute("tag")=="自由面板" || div.parentNode.parentNode.getAttribute("tag")=="自由面板"){
                //自由面板上的组件
                div.parentNode.style.height = value;
            }else{
                //面板上的组件
                div.style.height = value;
            }
        }else{
            div.style.height = value;
        }            
    }    

    this.置可视 = function (value){
        if(value==true){
            var div = document.getElementById(this.名称).parentNode;
            div.style.display="";	                
        }else{
            var div = document.getElementById(this.名称).parentNode;
            div.style.display="none"; //不占位               
        }
    } 

    this.置可视2 = function (value){
        if(value==true){
            var div = document.getElementById(this.名称).parentNode;
            div.style.visibility="visible";	                
        }else{
            var div = document.getElementById(this.名称).parentNode;
            div.style.visibility="hidden"; //占位               
        }
    } 
    
    if(functionName!=null){
        document.getElementById(this.名称).addEventListener("tap", function () {
            functionName();//被单击事件
        });       	
    }
}  