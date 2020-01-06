//获取Miniui datagrid列名
function getColumns(columns) {
	var cols = [];
	for (var i = 0; i < columns.length; i++) {
		var column = columns[i];
		if (column.visible) {
			var col = {
				header : column.header,
				field : column.field,
				type : column.type
			};
			if (column.columns) {
				col.columns = getColumns(column.columns);
			}
			cols.push(col);
		}

	}
	return cols;
}
//提示
function showMsg(text, state, time, x, y, callback) {
	mini.showTips({
		content : text,
		state : state,
		x : x,
		y : y,
		timeout : time
	});
	if (callback) {
		setTimeout(callback, time);
	}
}
//根据itemCode从localStorage中获得数据字典表
function getDict(itemCode) {
	var storage = window.localStorage;
	var json = storage.getItem("dictData");
	var jsonObj = JSON.parse(json);
	var jsonstr = "[]";
	var jsonArray = eval('(' + jsonstr + ')');
	$.each(jsonObj, function(key, val) {
		if (val.itemCode == itemCode) {
			var jsonTemp = {
				"id" : val.dictValue,
				"text" : val.dictCode,
				"sort" : val.sort
			};
			jsonArray.push(jsonTemp);
		}
	});
	return jsonArray;
}

//根据itemCode,dictValue从localStorage中获得数据字典表
function getDictName(itemCode, dictValue) {
	var storage = window.localStorage;
	var json = storage.getItem("dictData");
	var jsonObj = JSON.parse(json);
	var jsonstr = "";
	$.each(jsonObj, function(key, val) {
		if (val.itemCode == itemCode && val.dictValue == dictValue) {
			jsonstr = val.dictCode;
		}
	});
	return jsonstr;
}

//获取当前年份向前推10年的数据集合，由近到远的排序
function getYearCombox(npl) {
	if (!npl || null == npl) {
		npl = 10;
	}
	var yearArray = new Array();
	var currentyear = new Date().getFullYear();//获取当前年份
	for (var i = currentyear; i >= currentyear - npl; i--) {
		var yearObj = new Object();
		yearObj.id = i;
		yearObj.text = i + "年";
		yearArray.push(yearObj);
	}
	return yearArray;
}

//获取省份，每次调用getProvNameByCode(provCode)需首先，加载此函数
var data = null;
var provArr = null;
function getProvName() {
	provArr = new Array();
	$.ajax({
		url : basePath + "org/provincelist",
		type : "post",
		async : false,
		success : function(text) {
			data = JSON.parse(text);
			data = data.map(function(item) {
				provArr.push(item.orgCode + "," + item.orgName);
				//provArr.push(item.orgName);
			});
		}
	});
}
//省份编码转换为省份
function getProvNameByCode(provCode) {
	var prov = JSON.stringify(provArr);
	var pro = JSON.parse(prov);
	var orgCode = "";
	var province = "";
	var provinceArr = new Array();
	//alert(provCode.length);
	if (provCode.length > 2) {
		var proStr = provCode.split(",");
	} else {
		orgCode = provCode + "0000";
	}
	//alert(proStr);
	if (proStr != null) {
		for (var j = 0; j < proStr.length; j++) {
			orgCode = proStr[j] + "0000";
			for (var i = 0; i < pro.length; i++) {
				var provv = pro[i].split(",");//分割从redis
				if (provv[0] == orgCode) {
					provinceArr.push(provv[1]);
				}
			}
		}
		return provinceArr;

	} else {
		for (var i = 0; i < pro.length; i++) {
			var provv = pro[i].split(",");//分割从redis 	
			if (provv[0] == orgCode) {
				return provv[1];
			}
		}
	}

	/*for(var i=0;i<pro.length;i++){
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
		
	}*/
}
//格式化金钱
function formatNumber(str) {
	  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
//点击div区域防止冒泡调用
function stopPropagation(e) { 
	  if (e.stopPropagation) 
	  	e.stopPropagation(); 
	  else 
	  	e.cancelBubble = true; 
} 

//桩号转换
function stakeTransformation(stakeValue) {
	if(typeof(stakeValue) == "undefined" ){
		return "";
	}
	if(typeof(stakeValue) != "number" && stakeValue == ""){
		return "";
	}
	var mile = parseFloat(stakeValue);
	var s = mile.toFixed(3).toString();
	var a = s.split(".");
	if (null == a || a.length == 0) {
		return "";
	} else if (a.length == 1) {
		var zs = a[0];
		return zs;
	} else if (a.length == 2) {
		var zs1 = a[0];
		var xs = a[1];
		var rs = zs1 + "+" + xs;
		return 'K' + rs;
	}
	return "";
}

jQuery.fn.maxLength = function(max){  
    this.each(function(){  
        var type = this.tagName.toLowerCase();  
        var inputType = this.type? this.type.toLowerCase() : null;  
        if(type == "input" && inputType == "text" || inputType == "password"){  
            //Apply the standard maxLength  
            this.maxLength = max;  
        }  
        else if(type == "textarea"){  
            this.onkeypress = function(e){  
                var ob = e || event;  
                var keyCode = ob.keyCode;  
                var hasSelection = document.selection? document.selection.createRange().text.length > 0 : this.selectionStart != this.selectionEnd;  
                return !(this.value.length >= max && (keyCode > 50 || keyCode == 32 || keyCode == 0 || keyCode == 13) && !ob.ctrlKey && !ob.altKey && !hasSelection);  
            };  
            this.onkeyup = function(){  
                if(this.value.length > max){  
                    this.value = this.value.substring(0,max);  
                }  
            };  
        }  
    });  
};
/**
 * 特殊文本框长度设置
 * @returns
 */
function specialInputLengthSet(){
	//限制input框 最多输入50个字符
	$('input').maxLength(50);  
	//备注信息最多140个字符
	$('textarea').maxLength(140);
	//配置地址栏最多输入300字符
	$("input[name='moduleLink']").maxLength(300);
}

$(function() {
	specialInputLengthSet();
	/*miniui初始化后的按钮样式事件*/
	$(".mini-button-icon-text").each(function() {
		//查询
		if ($(this).find("span").hasClass("icon-search")) {
			$(this).css("background", "#1D9DE1");
/*			$(this).css("border-radius", "2px");//添加圆角属性
*/			$(this).find("span").css("color", "#fff");
		}
		/*else if($(this).find("span").hasClass("icon-save")){
			$(this).css("background", "#1D9DEE");
			$(this).find("span").css("color", "#ffffff");
		}*/

	});
	/*miniui初始化前的按钮样式事件*/
	$(".mini-button").each(function() {
		var icoonCls = $(this).attr("iconCls");
		//查询
		if (icoonCls == "icon-search") {
			$(this).css("background", "#1D9DE1");
			$(this).css("color", "#ffffff");
			$(this).attr("iconCls", "fa fa-search");
		}
		/*else if(icoonCls == "icon-save") {
			$(this).css("background", "#1D9DEE");
			$(this).css("color", "#ffffff");
			$(this).attr("iconCls", "fa fa-save");
		}*/

	});
});
