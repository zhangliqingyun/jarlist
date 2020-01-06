//获取Miniui datagrid列名
function getColumns(columns) {
	    var cols = [];
	    for (var i = 0; i < columns.length; i++) {
	        var column = columns[i];
			if(column.visible){
		        var col = { header: column.header, field: column.field, type: column.type };
		        if (column.columns) {
		            col.columns = getColumns(column.columns);
		        }
		        cols.push(col);
			}

	    }
	    return cols;
	}
//提示
function showMsg(text,state,time,x,y,callback){
	 	mini.showTips({
            	content: text,
           	    state: state,
                x: x,
                y: y,
                timeout: time
        });
        if(callback){
        	setTimeout(callback,time);
        }
}
//根据itemCode从localStorage中获得数据字典表
function getDict(itemCode){
	   var storage=window.localStorage;
	   var json=storage.getItem("dictData");
    var jsonObj=JSON.parse(json);
	   var jsonstr = "[]";
    var jsonArray = eval('('+jsonstr+')');
	   $.each(jsonObj, function(key, val) {      
		      if(val.itemCode==itemCode){
		    	  var jsonTemp = {"id":val.dictValue,"text":val.dictCode,"sort":val.sort};
		    	  jsonArray.push(jsonTemp);
		      }
	   });
 return jsonArray;
}

//根据itemCode,dictValue从localStorage中获得数据字典表
function getDictName(itemCode,dictValue){
	   var storage=window.localStorage;
	   var json=storage.getItem("dictData");
    var jsonObj=JSON.parse(json);
	   var jsonstr = "";
	   $.each(jsonObj, function(key, val) {      
		      if(val.itemCode==itemCode&&val.dictValue==dictValue){
		    	  jsonstr=val.dictCode; 
		      }
	   });
 return jsonstr;
}


//获取当前年份向前推10年的数据集合，由近到远的排序
function getYearCombox(npl){
	if(!npl || null  == npl){
		npl = 10;
	}
	var yearArray = new Array();  
	var currentyear=new Date().getFullYear();//获取当前年份
	for(var i= currentyear;i>=currentyear-npl;i--){
	  var yearObj = new Object();
	  yearObj.id=i;
	  yearObj.text= i+"年";  
	  yearArray.push(yearObj);
	}  
	return yearArray;
}  

//获取省份，每次调用getProvNameByCode(provCode)需首先，加载此函数
var data = null;
var provArr = null;
 function getProvName(){
	   provArr = new Array();
	   $.ajax({
		   url:basePath+"org/provincelist",
	   	   type:"post",
	   	   async:false,
	   	   success: function (text) {
	   		 data =  JSON.parse(text);
	   		 data = data.map(function(item){
	   			provArr.push(item.orgCode+","+item.orgName);
	   		 });	   		
     	 } 		   
	   });
 }
//省份编码转换为省份
 function getProvNameByCode(provCode){
	   var prov = JSON.stringify(provArr);
	   var pro = JSON.parse(prov);
	   var orgCode = "";
	   var province = "";
	   //alert(provCode.length);
	   if(provCode.length>2){
		   var proStr = provCode.split(",");	   
	   }else{
		   orgCode = provCode+"0000";
	   }
	 	for(var i=0;i<pro.length;i++){
	 		var provv = pro[i].split(",");//分割从redis 	
	 		if(proStr!=null){
	 			for(var j=0;j<proStr.length;j++){
	 				orgCode = proStr[j]+"0000";
	 				if(provv[0] == orgCode){
	 					//province+=provv[1]+",";
	 					return provv[1];
			 		}
	 				//return province;
	 			}
	 			
	 		}else{
	 			if(provv[0] == orgCode){
		 			return provv[1];
		 		}
	 		}
	 		
	 	}
 }