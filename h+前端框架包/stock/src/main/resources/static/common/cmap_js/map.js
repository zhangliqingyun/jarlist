	function clik23() {
		map2.layers.add(layer);
	}
	
	function colornb(nmb) {
		if (nmb < 60) {
			return "5"
		} else if (nmb < 70) {
			return "4"
		} else if (nmb < 80) {
			return "3"
		} else if (nmb < 90) {
			return "2"
		} else if (nmb <= 100) {
			return "1"
		} else {
			return "6"
		}
	}
	
	function creatpoly() {
		var pt6 = new Point({
			x : 130,
			y : 40,
			spatialReference : 4326
		});
		view.center = pt6;
		var point12 = {
			type : "point",
			longitude : 114.97,
			latitude : 41.73
		};
		var markerSymbol12 = {
			type : "simple-marker",
			color : [ 226, 119, 40 ],
			outline : {
				color : [ 200, 255, 255 ],
				width : 4
			}
		};
		var pointGraphic12 = new Graphic({
			geometry : point12,
			symbol : markerSymbol12
		});
		view.graphics.addMany([ pointGraphic12 ]);
	}
	
	function Draw_ALine(aarry) {
		
		valin = new Array();
		for (var i = 0; i < aarry.length; i++) {
			valin.push(aarry[i]);
		}
		docDraw_ALine(layer15);
	}
	
	function Draw_Line(alines) {
		vlines = new Array();
		vcolors = new Array();
		for (var i = 0; i < alines.length; i++) {
			if (alines[i][3].toString() != "") {
				linesize = alines[i][3]
			}
			if (alines[i][2] == 1) {
				vlines.push([ alines[i][0], alines[i][1], [ 120, 224, 57 ],
						linesize, alines[i][4], alines[i][5], alines[i][6],
						alines[i][7], alines[i][8], alines[i][9], alines[i][10],
						alines[i][11], alines[i][12] ]);
			} else if (alines[i][2] == 2) {
				vlines.push([ alines[i][0], alines[i][1], [ 97, 251, 231 ],
						linesize, alines[i][4], alines[i][5], alines[i][6],
						alines[i][7], alines[i][8], alines[i][9], alines[i][10],
						alines[i][11], alines[i][12] ]);
			} else if (alines[i][2] == 3) {
				vlines.push([ alines[i][0], alines[i][1], [ 224, 238, 115 ],
						linesize, alines[i][4], alines[i][5], alines[i][6],
						alines[i][7], alines[i][8], alines[i][9], alines[i][10],
						alines[i][11], alines[i][12] ]);
			} else if (alines[i][2] == 4) {
				vlines.push([ alines[i][0], alines[i][1], [ 255, 170, 82 ],
						linesize, alines[i][4], alines[i][5], alines[i][6],
						alines[i][7], alines[i][8], alines[i][9], alines[i][10],
						alines[i][11], alines[i][12] ]);
			} else if (alines[i][2] == 5) {
				vlines.push([ alines[i][0], alines[i][1], [ 250, 84, 2 ], linesize,
						alines[i][4], alines[i][5], alines[i][6], alines[i][7],
						alines[i][8], alines[i][9], alines[i][10], alines[i][11],
						alines[i][12] ]);
			} else {
				vlines.push([ alines[i][0], alines[i][1], [ 255, 255, 255 ],
						linesize, alines[i][4], alines[i][5], alines[i][6],
						alines[i][7], alines[i][8], alines[i][9], alines[i][10],
						alines[i][11], alines[i][12] ]);
			}
		}
		docDraw_Line(layer15);
	}
	
	function Draw_point(apts) {
		vpoints = new Array();
		for (var i = 0; i < apts.length; i++) {
			vpoints.push(apts[i]);
		}
		docDraw_point(layer15);
	}
	
	function Draw_Position(aPosition) {
		vPosition = aPosition;
		docDraw_Position();
	}
	
	function Draw_clear() {		
		docclearmap(layer11);
		docclearmap(layer12);
		docclearmap(layer13);
		docclearmap(layer14);
		docclearmap(layer15);
		docclearmap(layer17);
		docclearmap(layer17_3);
		docclearmap(layer15_1);
		docclearmap(layer15_2);
		docclearmap(layer15_3);
		docclearmap(layer15_4);
		docclearmap(layer16);
		docclearmap(layer18);
		docclearmap(layer19);
		docremovemap("clusters");
		docMsreClearTool();
		//LySelect('0,0,0,0,0,0,0,0,0');
		if (flg_pienodeTest == 1) {
			DelPieBar("pienodeTest");
		}
		//
	}
	
	function Pro_qry(atext) {
		Draw_clear();
		if (atext != '全国' && atext != '东部' && atext != '中部' && atext != '西部') {
			docmapqry22(atext, url3, layer11);
		} else {
			SetGuanGuo(extMap, vxmin, vymin, vxmax, vymax);
		}
	}
	
	function Dishi_qry(atext) {
		docmapqry22(atext, url4, layer14);
	}
	
	function Xian_qry(atext) {
		docmapqry22(atext, url5, layer14);
	}
	
	function Road_qry(atext, aRoad9) {
		//
		if((WZY_ID=="公路")&&(WZY_ID2=="demand")){
			docmapqry23S(atext, url7, layer14, aRoad9);	
		}else
			if((WZY_ID=="公路")&&(WZY_ID2=="engineer")){
				docmapqry23T(atext, url7, layer14, aRoad9);	
			}else
        {
		docmapqry23(atext, url7, layer14, aRoad9);			
        }
	}
	
	function Road_c() {
		docclearmap(layer14);
		docclearmap(layer15);
	}
	
	function Road_qry1(alxbm, aqdzh, azdzh, aRoad9) {
		
		if((WZY_ID=="公路")&&(WZY_ID2=="demand")){
			docmapqry26S(alxbm, aqdzh, azdzh, url6, layer14, aRoad9);	
		}else
        {
		docmapqry26(alxbm, aqdzh, azdzh, url6, layer14, aRoad9);			
        }
	}
	
	function Road_qry21(alxbm, aqdzh, azdzh, ncolor,aroad) {
		 
		var dataStrArr = ncolor.replace("(", "").replace(")", "").split(",");
		var dataIntArr = dataStrArr.map(function(data) {
			return +data;
		});
		docmapqry35(alxbm, aqdzh, azdzh, url6, layer15, dataIntArr,aroad);
	}
	
	function Road_qry22(alxbm, aqdzh, azdzh, ncolor,aroad) {
		 
		var dataStrArr = ncolor.replace("(", "").replace(")", "").split(",");
		var dataIntArr = dataStrArr.map(function(data) {
			return +data;
		});
		
		docmapqry36(alxbm, aqdzh, azdzh, url6, layer15, dataIntArr,aroad);
	}
	
	function Road_c1() {
		docclearmap(layer15);
	}
	
	function Road_qry2(alxbm, aPro, aRoad9) {
		if((WZY_ID=="公路")&&(WZY_ID2=="demand")){
			
			docmapqry27S(alxbm, getPro(aPro), url25 + "/" + GetLXBMn(alxbm), layer14,aRoad9);
		}else
			if((WZY_ID=="公路")&&(WZY_ID2=="engineer")){
				
				docmapqry27T(alxbm, getPro(aPro), url25 + "/" + GetLXBMn(alxbm), layer14,aRoad9);
			}else
        {
				
		docmapqry27(alxbm, getPro(aPro), url25 + "/" + GetLXBMn(alxbm), layer14,aRoad9);
        }
 
	}
	
	function Road_c2() {
		docclearmap(layer14);
		docclearmap(layer15);
	}
	
	function Point_qry(atext, atext1) {
		docmapqry24(atext, atext1, url3, layer14);
	}
	
	
	function extArcMapcilk(astr) {
		//alert(astr);
	    astr=="2"?docDraw_pointclk(layer19):1;
	    if(astr=="1"&&ToolFlg){		
	    	docmapqry25("", "", url3, layer11);			
	    	//docmapqry37("","",url7,layer11);		
	    	//GetPoint30("G4");		
	    	// ShowMapLX("LXBM='G108' and SID='11'");		
	    	//docDraw_point22(layer15);		
	    	//GetLXBMbyPt();		
	    	Flg_XD == 1?Flg_XD=0:Flg_XD = 1;	    	
	        Toolmark=false;
	    }
	    
	}
	
	function setApoint(evt) {
		Apoint = evt;
		if (Flg_XD == 1) {
			//docDraw_point22(layer15);
		}
	}
	
	function GetPoint30_c() {
		docclearmap(layer14);
	}
	
	function GetPoint30(alxbm) {
		docmapqry32(alxbm, url26 + "/0", layer14);
	}
	
	function GetPoint1026(aLXBM,aType,aYear) {
		Draw_clear();
		//docmapqry32(aLXBM, url27 + "/0", layer14);
		aType=="0"?docmapqry32(aLXBM, url26 + "/0", layer14):docmapqry32_S(aLXBM, url27 + "/0", layer14);
	}
	
	function Bridge_30(aname,aBridge9){
		docmapqry41(aname, url26 + "/" + Getbrn(aname), layer15_2, aBridge9);
	}
	
	function Bridge_qry(aname, aBridge9) {
	     
		docmapqry28(aname, url26 + "/" + Getbrn(aname), layer15_2, aBridge9);
	}
		
	function Bridge_qry3(aname, aBridge9) {
		
		docmapqry281(aname, url26 + "/" + Getbrn(aname), layer15_2, aBridge9);
	}
	
	function Bridge_qry2(aname, aBridge9) {
		 
		docmapqry282(aname, url26 + "/" + Getbrn(aname), layer15_2, aBridge9);
	}
	
	function Bridge_c() {
		
		docclearmap(layer14);
		docclearmap(layer15);
	}
	
	function Tunnel_qry(aname, aTunnel9) {
		
		docmapqry30(aname, url27 + "/" + Gettun(aname), layer15_3, aTunnel9);
	}
	
	function Tunnel_qry3(aname, aTunnel9) {
		   
		docmapqry301(aname, url27 + "/" + Gettun(aname), layer15_3, aTunnel9);
	}
	
	function Tunnel_qry2(aname, aTunnel9) {
		
		docmapqry302(aname, url27 + "/" + Gettun(aname), layer15_3, aTunnel9);
	}
	
	function Tunnel_c() {
		docclearmap(layer14);
		docclearmap(layer15);
	}
	
	function Bridge_qry1(aname, aBridge9) {
		docmapqry29(aname, url26 + "/" + Getbrn(aname), layer15_2, aBridge9);
	}
	
	function Bridge_c1() {
		docclearmap(layer15);
	}
	
	function Tunnel_qry1(aname, aTunnel9) {
		alertShow("Tunnel_qry1");
		docmapqry31(aname, url27 + "/" + Gettun(aname), layer15_3, aTunnel9);
	}
	
	function Tunnel_c1() {
		docclearmap(layer15);
	}
	
	function Provs_c() {//省份
		docclearmap(layer17);
	}
	
	function Provs_qry(aprotxt) {//省份 	
		 
		//   docmapqry33(url3,layer17,aprotxt);
		//   LoadPie(aprotxt); 
		if ((WZY_ID == "公路")) {
			if (WZY_ID2 == "asset") {
				docmapqry33(url3, layer17, aprotxt);
				//LoadPie(aprotxt);		   
			} else if (WZY_ID2 == "indicator") {
				docmapqry331(url3, layer17, aprotxt);
				//LoadPie(aprotxt);			   
			} else if (WZY_ID2 == "demand") {
				docmapqry33(url3, layer17, aprotxt);
				// LoadPie(aprotxt);				 
			} else if (WZY_ID2 == "engineer") {
				docmapqry33(url3, layer17, aprotxt);
			    //LoadPie(aprotxt);					  
			}
		} else if (WZY_ID == "桥梁") {
			if (WZY_ID2 == "asset") {
				docmapqry33(url3, layer17, aprotxt);
				// LoadPie1(aprotxt);			   
			} else if (WZY_ID2 == "indicator") {
				docmapqry33(url3, layer17, aprotxt);
				//docmapqry332(url3, layer17, aprotxt);
				//LoadPie1(aprotxt); 				   
			} else if (WZY_ID2 == "demand") {
				docmapqry33(url3, layer17_3, aprotxt);
				//LoadPie1(aprotxt);					 
			} else if (WZY_ID2 == "engineer") {
				docmapqry33(url3, layer17, aprotxt);
				//LoadPie1(aprotxt);						  
			}
		} else if (WZY_ID == "隧道") {
			if (WZY_ID2 == "asset") {
				docmapqry33(url3, layer17, aprotxt);
				// LoadPie1(aprotxt);				   
			} else if (WZY_ID2 == "indicator") {
				docmapqry33(url3, layer17, aprotxt);
				//docmapqry332(url3, layer17, aprotxt);
				// LoadPie1(aprotxt);	 				   
			} else if (WZY_ID2 == "demand") {
				docmapqry33(url3, layer17_3, aprotxt);
			   //LoadPie1(aprotxt);					 
			} else if (WZY_ID2 == "engineer") {
				docmapqry33(url3, layer17, aprotxt);
				//LoadPie1(aprotxt);							  
			}
		}
		//  flg_pienodeTest=1; 
	
	}
	
	function Provs_qry1(aprotxt) {//省份 	
		docmapqry34(url3, layer17, aprotxt);
	}
	
	function ShowMapMQI9(aData) {
		docmapqry38(aData, url6, layer18);
	}
	
	function ShowMapMQI10(aData) {
		docmapqry40(aData, url6, layer18);
	}
	
	
	function ShowMapMQI11(aData) {
		docmapqry42(aData, url6, layer18);
	}
	
	function SetMapPOS9(aLxbm, aPos, aYear) {
	
		docDraw_point24(layer15_4, aLxbm, aPos);
	}
	
	function showLyA(anum,aflg9){		
		anum==0?aLyVisale(layer9001,aflg9,anum):anum;
		anum==1?aLyVisale(layer9002,aflg9,anum):anum;
		anum==99?aLyVisale(layer9003,aflg9,anum):anum;
		anum==2?aLyVisale(layer9004,aflg9,anum):anum;
		anum==333?aLyVisale(layer9005,aflg9,anum):anum;
		anum==4?aLyVisale(layer9006,aflg9,anum):anum;
		anum==5?aLyVisale(layer9007,aflg9,anum):anum;
		anum==6?aLyVisale(layer9008,aflg9,anum):anum;
		anum==7?aLyVisale(layer9009,aflg9,anum):anum;
		anum==3?aLyVisale(layer9010,aflg9,anum):anum;
	}
	
	function MSureArea(astr){
		docMsreSetTool("area");
	}
	
	function MSureDistance(astr){
        
        docMsreSetTool("distance");
	}
	
	function MSureLocation(astr){
		docMsreSetTool("location");
	}
	
	function returnFloat3(value){
		 var value=Math.round(parseFloat(value)*1000)/1000;
		 var xsd=value.toString().split(".");
		 if(xsd.length==1){
		 value=value.toString()+"+000";
		 return value;
		 }
		 if(xsd.length>1){
			 if(xsd[1].length<2){
				 value=value.toString()+"00";
				 }
			 else
				 if(xsd[1].length<3){
					 value=value.toString()+"0";
					 }
			 value = value.toString().replace(".", "+");
		 return value;
		 }
	}
