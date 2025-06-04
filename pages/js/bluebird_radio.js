
    function 单选框(name,functionName){  
        this.名称 = name;
        
        this.置标题 = function (newTitle){
            var radio = document.getElementById(this.名称);
            var label = radio.getElementsByTagName("label");
            label[0].innerHTML = newTitle;
        } 

        this.取标题 = function (){
            var radio = document.getElementById(this.名称);
            var label = radio.getElementsByTagName("label");        
           return label[0].innerHTML;
        }  

        this.置分组 = function (group){
            document.getElementById(this.名称).getElementsByTagName("input")[0].name = group;
        } 

        this.取分组 = function (){
            return document.getElementById(this.名称).getElementsByTagName("input")[0].name;
        } 

        this.置选中状态 = function (state){
            var radio = document.getElementById(this.名称);
            var input = radio.getElementsByTagName("input");        
            input[0].checked=state;
        } 

        this.取选中状态 = function (){
            var radio = document.getElementById(this.名称);
            var input = radio.getElementsByTagName("input");        
            return input[0].checked;
        } 

        this.置可视 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称);
                div.style.display="";	                
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
        
        if(functionName!=null){
 			document.getElementById(this.名称).addEventListener("tap", function () {
                functionName();//被单击事件
            });       	
        }
    }  


 