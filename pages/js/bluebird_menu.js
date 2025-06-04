function 菜单(name,eventName){  
	this.名称 = name;
	
	this.添加菜单项 = function (菜单项标题,标记){
		var table = document.getElementById(this.名称).getElementsByTagName("ul")[0];
		var liArr = table.getElementsByClassName("mui-table-view-cell");
		var li = document.createElement('li');
		li.className = 'mui-table-view-cell';
		li.index = liArr.length;
		li.tag = 标记;
		li.innerHTML = "<a href="+"'#"+this.名称+"'>"+菜单项标题+"</a>";
		table.appendChild(li);				
	} 
	
	this.修改菜单项 = function (索引, newTitle) {
		var table = document.getElementById(this.名称).getElementsByTagName("ul")[0];
		var liArr = table.getElementsByClassName("mui-table-view-cell");
		var li = liArr[索引];
		li.getElementsByTagName('a')[0].innerText = newTitle;
	}

	this.清空菜单项 = function (){
		var table = document.getElementById(this.名称).getElementsByTagName("ul")[0];
		while(table.hasChildNodes()){
			table.removeChild(table.firstChild);
		}
	} 

	this.显示菜单 = function (){
		mui('#'+this.名称).popover('show');
	} 

	this.隐藏菜单 = function (){
		mui('#'+this.名称).popover('hide');
	} 

	if(eventName!=null){
		mui('#'+this.名称).on('tap', '.mui-popover-action li>a', function() {
			mui('#'+name).popover('hide');//隐藏菜单
			eventName(this.innerText,this.parentNode.index,this.parentNode.tag);//菜单项被单击事件，返回菜单项标题
		});
	}
}  


 