
    function 导航栏(name,event1,event2,event3){  
        this.名称 = name;
        this.项目 = "";

        this.添加项目 = function (iconClass,iconName,title,target,badge,size=24){
            var item = "";
            if(this.项目 == ""){
                item = "<a class='mui-tab-item mui-active' href='" + target + "'>";
            }else{
                item = "<a class='mui-tab-item' href='" + target + "'>";
            }
            
            if(iconClass=="svg"){
                item = item + "<svg class='mui-icon icon' aria-hidden='true'><use xlink:href='#" + iconName + "' />"
                if(badge>0){
                    item = item + "<span class='mui-badge'>" + badge + "</span>";
                }  
                item = item + "</svg>";	              
            }else{
                if(iconClass=="mui-icon"){
                    item = item + "<span class='mui-icon " + iconName + "' style='font-size: " + size + "px;'></span>";
                }else if(iconClass!=""){
                    item = item + "<span class='mui-icon " + iconClass + " " + iconName + "' style='font-size: " + size + "px;'></span>";
                }
                if(iconClass!="" && badge>0){
                    item = item + "<span class='mui-badge'>" + badge + "</span>";
                }
                if(iconClass!=""){	        
                    item = item + "</span>";	
                }	
			}
			
			item = item + "<span class='mui-tab-label'>" + title + "</span>";
			item = item + "</a>";	    
            this.项目 = this.项目 + item;
        } 

        this.添加完毕 = function (){
            var element = document.createElement("div");
            element.innerHTML = this.项目;
            var bar = document.getElementById(this.名称);
            bar.appendChild(element);   
            if(event1!=null){
                mui(".mui-bar-tab").on("tap", "a", function(e) {
                    var target = this.getAttribute("href");
                    var title = this.querySelector(".mui-tab-label").innerHTML;   
                    
                    var items = document.querySelectorAll('.mui-tab-item');// 获取所有导航链接
                    var clickedIndex = Array.prototype.indexOf.call(items, this);// 获取被点击项的索引          
                    event1(title,target,clickedIndex);//项目被单击事件
                });   	
            }

            if(event2!=null){
                mui(".mui-bar-tab").on("doubletap", "a", function(e) {
                    var target = this.getAttribute("href");
                    var title = this.querySelector(".mui-tab-label").innerHTML;             
                    event2(title,target);//项目被双击事件
                });   	
            }

            if(event3!=null){
                mui(".mui-bar-tab").on("longtap", "a", function(e) {
                    var target = this.getAttribute("href");
                    var title = this.querySelector(".mui-tab-label").innerHTML;             
                    event3(title,target);//项目被长按事件
                });   	
            }           
        }

        this.取项目总数 = function (){
            var tabbar = document.querySelector("#" + this.名称);  
            var tabitem = tabbar.getElementsByTagName("a");
            return tabitem.length;        
        }

        this.取项目标题 = function (index){
            var tabbar = document.querySelector("#" + this.名称);  
            var tabitem = tabbar.getElementsByTagName("a");
            if(tabitem.length>index){
                return tabitem[index].querySelector(".mui-tab-label").innerHTML;
            }else{
                return "";
            }
        } 
       
        this.置项目标题 = function (index,newTitle){
            var tabbar = document.querySelector("#"+this.名称);  
            var tabitem = tabbar.getElementsByTagName("a");  
            if(tabitem.length>index){
                tabitem[index].querySelector(".mui-tab-label").innerHTML=newTitle;
            }                
        }        

        this.取项目角标 = function (index){
            var tabbar = document.querySelector("#" + this.名称);  
            var tabitem = tabbar.getElementsByTagName("a");
            if(tabitem.length>index){
                var badge = tabitem[index].querySelector(".mui-badge");
                if(badge!=null){
                    return Number(badge.innerHTML);
                }else{
                    return 0;
                }
            }else{
                return 0;
            }
        } 

        this.置项目角标 = function (index,value){
            var tabbar = document.querySelector("#"+this.名称);  
            var tabitem = tabbar.getElementsByTagName("a");  
            var icon;
            if(tabitem.length>index){
                var badge = tabitem[index].querySelector(".mui-badge");
                if(badge!=null){
                    if(value>0){
                        badge.innerHTML = "" + value;
                    }else{
                        icon = tabitem[index].querySelector(".mui-icon");
                        icon.removeChild(icon.firstChild);
                    }
                }else{
                    icon = tabitem[index].querySelector(".mui-icon");
                    if(icon!=null){
                        if(value>0){
                            var newBadge = document.createElement("span");
                            newBadge.innerHTML = "<span class='mui-badge'>" + value + "</span>";
                            icon.appendChild(newBadge);
                        }
                    }
                    
                }                
            }                
        } 

        this.取项目激活状态 = function (index){
            var tabbar = document.querySelector("#"+this.名称);  
            var tabitem = tabbar.getElementsByTagName("a");  
            if(tabitem.length>index){
                return tabitem[index].classList.contains("mui-active");
            }else{
                return false;
            }                
        } 

        this.置项目激活状态 = function (index,value){
            var tabbar = document.querySelector("#"+this.名称);  
            var tabitem = tabbar.getElementsByTagName("a");  
            if(tabitem.length>index){
                if(value==true){
                    if(!tabitem[index].classList.contains("mui-active")){
                        tabitem[index].classList.add("mui-active");
                    }
                }else{
                    tabitem[index].classList.remove("mui-active");
                }
            }                
        } 

        this.置激活项目背景色 = function (color){
            var nod = document.createElement("style"); //创建<style>
            str = ".mui-bar-tab .mui-tab-item.mui-active{background:"+color+";}";  
            nod.type="text/css";
            if(nod.styleSheet){         //ie下  
                nod.styleSheet.cssText = str;  
            }else{  
                nod.innerHTML = str;       //或者写成 nod.appendChild(document.createTextNode(str))  
            }  
            document.getElementsByTagName("head")[0].appendChild(nod);//将<style>添加到<head>里         
        } 

        this.置项目背景色 = function (index,color){
            var tabbar = document.querySelector("#"+this.名称);  
            var tabitem = tabbar.getElementsByTagName("a");  
            if(tabitem.length>index){
                tabitem[index].style.background=color;
            }                
        } 
        
        this.置顶边 = function (index){
            // 获取导航栏元素
            var navBar = document.getElementById(this.名称);

            // 设置导航栏的顶边位置
            navBar.style.top = index+"px";               
        }
        
        this.取顶边 = function (index){
            // 获取导航栏元素
            var navBar = document.getElementById(this.名称);
            var top=parseFloat(navBar.style.top);//只取数字部分
            
            return  top || 0;               
        }
        
        this.置可视 = function (value){
            if(value==true){
                var div = document.getElementById(this.名称);
                div.style.display="";	 
                var div2 = document.getElementsByClassName("mui-content")[0];     
                div2.style.padding="";                                      
            }else{
                var div = document.getElementById(this.名称);
                div.style.display="none"; //不占位    
                var div2 = document.getElementsByClassName("mui-content")[0];     
                div2.style.padding="0px";                             
            }
        } 

    }  


 