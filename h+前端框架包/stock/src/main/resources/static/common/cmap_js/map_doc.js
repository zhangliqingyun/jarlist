	﻿function viewclearmap(aly) {require(["dojo/ready", "dijit/registry","esri/layers/GraphicsLayer"],function(ready,registry,GraphicsLayer){  
	    ready(function(){aly.clear();});});
	}
	
	﻿function viewremovemap(aly) {require(["esri/map","dojo/ready", "dijit/registry","extras/ClusterLayer","esri/graphic","esri/layers/GraphicsLayer"],function(Map,ready,registry,ClusterLayer,Graphic,GraphicsLayer){  
	    ready(function(){extMap.removeLayer(aly);});});
	}
	
	﻿function viewGetAly(aly) {require(["esri/map","dojo/ready", "dijit/registry","extras/ClusterLayer","esri/graphic","esri/layers/GraphicsLayer"],function(Map,ready,registry,ClusterLayer,Graphic,GraphicsLayer){  
	    ready(function(){if(extMap.graphicsLayerIds[0]==aly){extMap.removeLayer(extMap.getLayer(aly));} });});
	}
	
	function SetGuanGuo(amap, a1, a2, a3, a4){
	    require(["esri/map","dojo/ready","dijit/registry", "esri/SpatialReference", "esri/geometry/Extent"],function(Map,ready, registry, SpatialReference, Extent){ready(function(){   			  
	              amap.setExtent(new Extent(a1,a2,a3,a4,cmap_SpatialReference));   					 
	   		});});
	}
	
	function Tunnel_Pic(aStr){
	    if(typeof(aStr)=="undefined"){
	    	return "";
	    }else
		if(aStr=="一类"){
			return "1";
		}
		else
			if(aStr=="二类"){
				return "2";				
			}
			else
				if(aStr=="三类"){
					return "3";					
				}
				else
					if(aStr=="四类"){
						return "4";						
					}
					else
						if(aStr=="五类"){
							return "5";							
						}
						else
							if(aStr=="六类"){
								return "6";								
							}
							else		
								if(aStr=="七类"){
									return "7";								
							}
							else
								if(aStr=="八类"){
									return "8";									
								}
								else
									if(aStr=="1"){
										return "1";									
									}
									else
										if(aStr=="2"){
											return "2";									
										}
										else
											if(aStr=="3"){
												return "3";									
											}
											else
												if(aStr=="4"){
													return "4";									
												}
												else
													if(aStr=="5"){
														return "5";									
													}
													else
									{
									  return "";									
									}
	}
	
	function docGetUnit(astr){
		var vStr="";
		astr=="area"?vStr= "平方千米":(astr=="distance"?vStr= "公里":vStr);
		return vStr;
	}
	
	function GetLXBMn(aLXBM){
		if(aLXBM.length==4){
			if(aLXBM[0]=="G"){
				return "2";
			}else
				{
				return "3";
				}
		}
		else
			{
			return "1";
			}
		
	}
	
	function Getbrn(aLXBM){	
		return "0";
	}
	
	function Gettun(aLXBM){	
		return "0";
	}
	
	function viewdrawline() {  
	    for (var i = 0; i < vlines.length; i++) {  
	        var polyline1 = new Polyline({
	            paths: [vlines[i][0], vlines[i][1]]
	        });
	        var lineSymbol1 = new SimpleLineSymbol({
	            color: vlines[i][2], 
	            width: vlines[i][3]
	        });
	        var polylineAtt = {
	            Name: "132",
	            Owner: "Tqwr"
	        };
	        var polylineGraphic1 = new Graphic({
	            geometry: polyline1,
	            symbol: lineSymbol1,
	            attributes: polylineAtt
	        });
	        view.graphics.add(polylineGraphic1);       
	    }    
	}
	
	function docMsreClearTool(){
		measurement.clearResult();
		docclearmap(layer16);
		Toolmark = false;
		ToolFlg=true;
		measurement.setTool("location", false);
	}
	
	vMQI_S = new Array();
	vPQI_S = new Array();
	vPCI_S = new Array();
	vRQI_S = new Array();
	vRDI_S = new Array();
	vSRI_S = new Array();
	vPSSI_S = new Array();
	vAADT_S = new Array();
	vYHFA_S = new Array();
	vLine_S = new Array();
	vPoint_S = new Array();
	
	function viewdrawpoint() {
	    for (var i = 0; i < vpoints.length; i++) { 
	        var point = new Point(vpoints[i][0][0], vpoints[i][0][1]);
	        var simpleMarkerSymbol = new SimpleMarkerSymbol();
	        simpleMarkerSymbol.color = vpoints[i][1];
	        simpleMarkerSymbol.outline.color = vpoints[i][2];
	        simpleMarkerSymbol.outline.width = vpoints[i][3];
	        var graphic = new Graphic(point, simpleMarkerSymbol);       
	        layer2.add(graphic);
	    }
	    layer2.visible = true; ;
	}
	
	function viewPosition() {
	    document.getElementById("lbPosition").click();
	    var simpleMarkerSymbol = new SimpleMarkerSymbol();
	    simpleMarkerSymbol.color = [255, 0, 0];
	    simpleMarkerSymbol.outline.color = [255, 0, 0];
	    simpleMarkerSymbol.outline.width = 2;
	    var graphic23 = new Graphic(new Point(vPosition), simpleMarkerSymbol);
	    view.graphics.add(graphic23);  
	    view.center = vPosition;   
	}
	
	function docDraw_ALine(aly){
		  require(["esri/map", "dojo/ready", "extend/ExtArcMap","esri/InfoTemplate","dijit/registry", "dijit/Tooltip","esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/ArcGISTiledMapServiceLayer","esri/layers/GraphicsLayer","esri/geometry/Point","esri/geometry/Polyline","esri/geometry/Polygon","esri/symbols/PictureMarkerSymbol","esri/symbols/LineSymbol", "esri/symbols/MarkerSymbol","esri/symbols/PictureFillSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol",
	          "esri/symbols/SimpleMarkerSymbol","esri/symbols/Symbol","esri/symbols/TextSymbol","esri/symbols/FillSymbol","esri/InfoTemplate","esri/graphic","esri/SpatialReference"],
			    function(Map,ready,ExtArcMap,InfoTemplate,registry,Tooltip,ArcGISDynamicMapServiceLayer,ArcGISTiledMapServiceLayer,GraphicsLayer,Point,Polyline,Polygon,PictureMarkerSymbol,LineSymbol,MarkerSymbol,PictureFillSymbol,
			    		SimpleFillSymbol,SimpleLineSymbol,SimpleMarkerSymbol,Symbol,TextSymbol,FillSymbol,InfoTemplate,graphic,SpatialReference) {  
				ready(function() {
					 aly.add(new esri.Graphic(new Polyline([valin[0]]), new SimpleLineSymbol({color: valin[1],width: valin[2]}),{"name": "单线","id": valin[3]})
					                        .setInfoTemplate(new InfoTemplate("${ID}","<b>序号: </b>${id}<br/>" + "<b>名称: </b>${name}")));
				});			
		  	});	
	}
	
	function docDraw_Line(aly) {
		  require(["esri/map", "dojo/ready", "extend/ExtArcMap","esri/InfoTemplate", "dijit/registry", "dijit/Tooltip", "esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/ArcGISTiledMapServiceLayer","esri/layers/GraphicsLayer","esri/geometry/Point", "esri/geometry/Polyline","esri/geometry/Polygon","esri/symbols/PictureMarkerSymbol","esri/symbols/LineSymbol", "esri/symbols/MarkerSymbol","esri/symbols/PictureFillSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol",
	          "esri/symbols/SimpleMarkerSymbol","esri/symbols/Symbol","esri/symbols/TextSymbol","esri/symbols/FillSymbol","esri/InfoTemplate","esri/graphic","esri/SpatialReference"],
			    function(Map,ready,ExtArcMap,InfoTemplate,registry,Tooltip,ArcGISDynamicMapServiceLayer,ArcGISTiledMapServiceLayer,GraphicsLayer,Point,Polyline,Polygon,PictureMarkerSymbol,LineSymbol,MarkerSymbol,PictureFillSymbol,
			    		SimpleFillSymbol,SimpleLineSymbol,SimpleMarkerSymbol,Symbol,TextSymbol,FillSymbol,InfoTemplate,graphic,SpatialReference) {  
				ready(function() { 
			    	var vvxmin = 180;
				    var vvymin = 90;
				    var vvxmax = 0;
				    var vvymax = 0;							
				    for (var i = 0; i < vlines.length; i++) {   													 
						aly.add(new esri.Graphic(new Polyline([vlines[i][0], vlines[i][1]]), 
								new SimpleLineSymbol({color: vlines[i][2], width: vlines[i][3]}),
								{"name": i,	"id": vlines[i][4],	"doc_sif01": vlines[i][5],"doc_sif02": vlines[i][6],
							          "doc_sif03": vlines[i][7],"doc_sif05": vlines[i][8],"doc_vpos": vlines[i][9],"doc_lpos": vlines[i][10],	
							            "v_MQI_2": vlines[i][11],"doc_nb2": vlines[i][12]})
						                       .setInfoTemplate(new InfoTemplate("${name}","<b>序号: </b>${id}<br/>" + "<b>名称: </b>${name}")));
					} 				 
				});			
		  	});	
	 }
	
	function docDraw_point(aly){
		  require(["esri/map", "dojo/ready", "esri/Color","extend/ExtArcMap", "dijit/registry", "dijit/Tooltip","esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/ArcGISTiledMapServiceLayer","esri/layers/GraphicsLayer","esri/geometry/Point",
		       "esri/geometry/Polyline","esri/geometry/Polygon","esri/symbols/PictureMarkerSymbol","esri/symbols/LineSymbol","esri/symbols/MarkerSymbol","esri/symbols/PictureFillSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol",
	          "esri/symbols/SimpleMarkerSymbol","esri/symbols/Symbol","esri/symbols/TextSymbol","esri/symbols/FillSymbol","esri/InfoTemplate","esri/graphic","esri/SpatialReference"],
			    function(Map,ready,Color,ExtArcMap,registry,Tooltip,ArcGISDynamicMapServiceLayer,ArcGISTiledMapServiceLayer,GraphicsLayer,Point,Polyline,Polygon,PictureMarkerSymbol,LineSymbol,MarkerSymbol,PictureFillSymbol,
			    		SimpleFillSymbol,SimpleLineSymbol,SimpleMarkerSymbol,Symbol,TextSymbol,FillSymbol,InfoTemplate,graphic,SpatialReference) {  
				ready(function() { 
					for (var i = 0; i < vpoints.length; i++) { 
						if (vpoints[i][4].toString() == "") {
							aly.add(new esri.Graphic(new Point([vpoints[i][0][0], vpoints[i][0][1]]), 
									    new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, vpoints[i][5],
											new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
												new Color(vpoints[i][2]), vpoints[i][3]), 
													new Color(vpoints[i][1])),
													{"name": i,"id": vpoints[i][7],"x": vpoints[i][0][0],"y": vpoints[i][0][1]})); 
						} else {
							aly.add(new esri.Graphic(
									  new Point([vpoints[i][0][0], vpoints[i][0][1]]), 
									    new PictureMarkerSymbol(vpoints[i][4].toString(), vpoints[i][5], vpoints[i][6]),
									       {"name": i,"id": vpoints[i][7],"x": vpoints[i][0][0],"y": vpoints[i][0][1]}));
						}					                  					
					}
				});			
		  	});	
	}
	
	function docDraw_point22(aly){
		  require(["esri/map", "dojo/ready", "esri/Color","extend/ExtArcMap", "dijit/registry", "dijit/Tooltip","esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/ArcGISTiledMapServiceLayer","esri/layers/GraphicsLayer","esri/geometry/Point",
		       "esri/geometry/Polyline","esri/geometry/Polygon","esri/symbols/PictureMarkerSymbol","esri/symbols/LineSymbol","esri/symbols/MarkerSymbol","esri/symbols/PictureFillSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol",
	          "esri/symbols/SimpleMarkerSymbol","esri/symbols/Symbol","esri/symbols/TextSymbol","esri/symbols/FillSymbol","esri/InfoTemplate","esri/graphic","esri/SpatialReference"],
			    function(Map,ready,Color,ExtArcMap,registry,Tooltip,ArcGISDynamicMapServiceLayer,ArcGISTiledMapServiceLayer,GraphicsLayer,Point,Polyline,Polygon,PictureMarkerSymbol,LineSymbol,MarkerSymbol,PictureFillSymbol,
			    		SimpleFillSymbol,SimpleLineSymbol,SimpleMarkerSymbol,Symbol,TextSymbol,FillSymbol,InfoTemplate,graphic,SpatialReference) {  
				ready(function() {
					aly.clear();				
					var vpLXBM,vpQDZH,vpPCI;				
					var MvPt = flayer.graphics[0].geometry.getPoint(0, 0);
					flayer.graphics.forEach(function(pghc){
						var grphPt = pghc.geometry.getPoint(0, 0);
						if((Math.abs(Apoint.x-grphPt.x)+ 2*Math.abs(Apoint.y-grphPt.y)) < (Math.abs(MvPt.x-Apoint.x)+ 2*Math.abs(MvPt.y-Apoint.y))){
							MvPt = grphPt;
							vpLXBM = pghc.attributes['LXBM'];
							vpQDZH = pghc.attributes['QDZH']; 
							vpPCI = pghc.attributes['PCI'];
						}
					});
			    	//   extMap.infoWindow.setContent("路线编码："+ event.graphic.attributes['LXBM'] + "<br>"    		            
	  				 //           +"起点桩号："+event.graphic.attributes['QDZH'] + "<br>" +"PCI："+event.graphic.attributes['PCI'] + "<br>");
					//{"name": Polygons.features[i].attributes["QLMC"],"id": Polygons.features[i].attributes["QLMC"]}
					if(Flg_XD==1){
						aly.add(new esri.Graphic(
								MvPt , 
								    new PictureMarkerSymbol("../common/images/navigation/2-1.png", 50, 50),
								    {"LXBM": vpLXBM,"QDZH":vpQDZH,"PCI":vpPCI}
								)
						);
						
					}else{					
							aly.add(new esri.Graphic(
									MvPt , 
									    new PictureMarkerSymbol("../common/images/navigation/2-1.png", 50, 50),
									    {"LXBM": vpLXBM,"QDZH":vpQDZH,"PCI":vpPCI}
									)
							);
					}
			    	   extMap.infoWindow.resize(139, 110);
			    	   extMap.infoWindow.setContent("路线编码："+ vpLXBM + "<br>"    		            
			            +"起点桩号："+vpQDZH + "<br>" +"PCI："+vpPCI + "<br>");
	        	   extMap.infoWindow.show(MvPt);
			    	  
				});			
		  	});	
	}
	
	function docDraw_point23(aly,aLXBM,aZH){
		  require(["esri/map", "dojo/ready", "esri/Color","extend/ExtArcMap", "dijit/registry", "dijit/Tooltip","esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/ArcGISTiledMapServiceLayer","esri/layers/GraphicsLayer","esri/geometry/Point",
		       "esri/geometry/Polyline","esri/geometry/Polygon","esri/symbols/PictureMarkerSymbol","esri/symbols/LineSymbol","esri/symbols/MarkerSymbol","esri/symbols/PictureFillSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol",
	          "esri/symbols/SimpleMarkerSymbol","esri/symbols/Symbol","esri/symbols/TextSymbol","esri/symbols/FillSymbol","esri/InfoTemplate","esri/graphic","esri/SpatialReference"],
			    function(Map,ready,Color,ExtArcMap,registry,Tooltip,ArcGISDynamicMapServiceLayer,ArcGISTiledMapServiceLayer,GraphicsLayer,Point,Polyline,Polygon,PictureMarkerSymbol,LineSymbol,MarkerSymbol,PictureFillSymbol,
			    		SimpleFillSymbol,SimpleLineSymbol,SimpleMarkerSymbol,Symbol,TextSymbol,FillSymbol,InfoTemplate,graphic,SpatialReference) {  
				ready(function() {
					aly.clear();				
					var vpLXBM,vpQDZH,vpPCI;				
					var MvPt = flayer.graphics[0].geometry.getPoint(0, 0);
					flayer.graphics.forEach(function(pghc){
						var grphPt = pghc.geometry.getPoint(0, 0);
						if((Math.abs(Apoint.x-grphPt.x)+ 2*Math.abs(Apoint.y-grphPt.y)) < (Math.abs(MvPt.x-Apoint.x)+ 2*Math.abs(MvPt.y-Apoint.y))){
							MvPt = grphPt;
							vpLXBM = pghc.attributes['LXBM'];
							vpQDZH = pghc.attributes['QDZH']; 
							vpPCI = pghc.attributes['PCI'];
						}
					});
			    	//   extMap.infoWindow.setContent("路线编码："+ event.graphic.attributes['LXBM'] + "<br>"    		            
	  				 //           +"起点桩号："+event.graphic.attributes['QDZH'] + "<br>" +"PCI："+event.graphic.attributes['PCI'] + "<br>");
					//{"name": Polygons.features[i].attributes["QLMC"],"id": Polygons.features[i].attributes["QLMC"]}
					if(Flg_XD==1){
						aly.add(new esri.Graphic(
								MvPt , 
								    new PictureMarkerSymbol("../common/images/navigation/2-1.png", 50, 50),
								    {"LXBM": vpLXBM,"QDZH":vpQDZH,"PCI":vpPCI}
								)
						);					
					}else{
						
							aly.add(new esri.Graphic(
									MvPt , 
									    new PictureMarkerSymbol("../common/images/navigation/2-1.png", 50, 50),
									    {"LXBM": vpLXBM,"QDZH":vpQDZH,"PCI":vpPCI}
									)
							);
					}
			    	   extMap.infoWindow.resize(139, 110);
			    	   extMap.infoWindow.setContent("路线编码："+ vpLXBM + "<br>"    		            
			            +"起点桩号："+vpQDZH + "<br>" +"PCI："+vpPCI + "<br>");		    	   
			    	   extMap.infoWindow.show(MvPt);		    	 
				});			
		  	});	
	}
	
	 
	function docDraw_point24(aly,aLXBM,aZH){
		  require(["esri/map", "dojo/ready", "esri/Color","extend/ExtArcMap", "dijit/registry", "dijit/Tooltip","esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/ArcGISTiledMapServiceLayer","esri/layers/GraphicsLayer","esri/geometry/Point",
		       "esri/geometry/Polyline","esri/geometry/Polygon","esri/symbols/PictureMarkerSymbol","esri/symbols/LineSymbol","esri/symbols/MarkerSymbol","esri/symbols/PictureFillSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol",
	          "esri/symbols/SimpleMarkerSymbol","esri/symbols/Symbol","esri/symbols/TextSymbol","esri/symbols/FillSymbol","esri/InfoTemplate","esri/graphic","esri/SpatialReference"],
			    function(Map,ready,Color,ExtArcMap,registry,Tooltip,ArcGISDynamicMapServiceLayer,ArcGISTiledMapServiceLayer,GraphicsLayer,Point,Polyline,Polygon,PictureMarkerSymbol,LineSymbol,MarkerSymbol,PictureFillSymbol,
			    		SimpleFillSymbol,SimpleLineSymbol,SimpleMarkerSymbol,Symbol,TextSymbol,FillSymbol,InfoTemplate,graphic,SpatialReference) {  
				ready(function(){
					var vpLXBM,vpQDZH,vpPCI;				
					var MvPt = layer18.graphics[0].geometry.getPoint(0, 0);
					layer18.graphics.forEach(function(pghc){
						var grphPt = pghc.geometry.getPoint(0, 0);
							vpLXBM = pghc.attributes['LXBM'];
							vpQDZH = pghc.attributes['POS']; 
							//vpPCI = pghc.attributes['PCI'];
							if(((parseFloat(vpQDZH)<parseFloat(aZH))&&((parseFloat(vpQDZH)+1)>parseFloat(aZH)))||(vpQDZH==aZH)){							
								MvPt = grphPt;							
								if(aMapPos99==vpQDZH){
									/*
									aly.add(new esri.Graphic(
											MvPt , 
											    new PictureMarkerSymbol("../common/images/navigation/2-1.png", 50, 50),
											    {"LXBM": vpLXBM,"POS":aZH}
											)
									);*/								
								}else{
									
									aly.clear();	
									extMap.infoWindow.hide(); 
						    	    extMap.setLevel(aMapPos_level);
									aly.add(new esri.Graphic(
												MvPt , 
												    new PictureMarkerSymbol("../common/images/navigation/2-1.png", 50, 50),
												    {"LXBM": vpLXBM,"POS":vpQDZH}
												)
										);
						    	   extMap.infoWindow.resize(139, 110);
						    	   extMap.infoWindow.setContent("路线编码："+ vpLXBM + "<br>"    		            
						            +"起点桩号："+vpQDZH + "<br>" );
						    	   extMap.centerAt(MvPt);
				        	       //extMap.infoWindow.show(MvPt);
						    	   aMapPos99=vpQDZH;									
								}							
							}
					});
			    	//   extMap.infoWindow.setContent("路线编码："+ event.graphic.attributes['LXBM'] + "<br>"    		            
	  				 //           +"起点桩号："+event.graphic.attributes['QDZH'] + "<br>" +"PCI："+event.graphic.attributes['PCI'] + "<br>");
					//{"name": Polygons.features[i].attributes["QLMC"],"id": Polygons.features[i].attributes["QLMC"]}
			    	  
				});			
		  	});	
	}
	
	function docDraw_Position(){
	    viewPosition();
	}
	
	function docDraw_clear(){
	    docclearmap();
	}
	
	function docclearmap(aly) {
	    viewclearmap(aly);
	}
	
	function docremovemap(aly) {		
		viewGetAly(aly);
	}	
	
	function doc_MQI(a_m_mqi_S, v_MQI_2,v_width_2) {   
	    var valins = new Array();
	    for (i = 0; i < a_m_mqi_S.length; i++) {
	        var a_m_mqi_ = new m_mqi_();
	        a_m_mqi_ = a_m_mqi_S[i];
	        if (a_m_mqi_.gps.toUpperCase() == "NULL") { continue; }
	        if (a_m_mqi_.gps.toString() == "") {   continue; }
	        var doc_id = a_m_mqi_.id;
	        var doc_sif01 = a_m_mqi_.sif01;
	        var doc_sif02 = a_m_mqi_.sif02;
	        var doc_sif03 = a_m_mqi_.sif03;
	        var doc_sif05 = a_m_mqi_.sif05;
	        var doc_vpos = a_m_mqi_.vpos;
	        var doc_lpos = a_m_mqi_.lpos;
	        var doc_pqi = a_m_mqi_.pqi;
	        var doc_pci = a_m_mqi_.pci;
	        var doc_rqi = a_m_mqi_.rqi;
	        var doc_rdi = a_m_mqi_.rdi;
	        var doc_sri = a_m_mqi_.sri;
	        var doc_pssi = a_m_mqi_.pssi;
	        var doc_aadt = a_m_mqi_.aadt;
	        var doc_yhfa = a_m_mqi_.yhfa;
	        var doc_amqi = a_m_mqi_.amqi;
	        var doc_gps = new Array();
	        doc_gps = a_m_mqi_.gps.split(",");
	        var doc_colornb;
	        var doc_nb2;
	        if (v_MQI_2.toUpperCase() == "PQI"){
	            //doc_colornb = colornb(doc_pqi);
	            doc_nb2 = doc_pqi;
	        }
	        else
	            if (v_MQI_2.toUpperCase() == "PCI"){
	                doc_nb2 = doc_pci;
	                //doc_colornb = colornb(doc_pci);
	            }
	            else
	                if (v_MQI_2.toUpperCase() == "RQI"){
	                    doc_nb2 = doc_rqi;
	                    //doc_colornb = colornb(doc_rqi);
	                }
	                else
	                    if (v_MQI_2.toUpperCase() == "RDI"){
	                        doc_nb2 = doc_rdi;
	                        //doc_colornb = colornb(doc_rdi);
	                    }
	                    else
	                        if (v_MQI_2.toUpperCase() == "SRI"){
	                            doc_nb2 = doc_sri;
	                            //doc_colornb = colornb(doc_sri);
	                        }
	                        else
	                            if (v_MQI_2.toUpperCase() == "PSSI"){
	                                doc_nb2 = doc_pssi;
	                                //doc_colornb = colornb(doc_pssi);
	                            }
	                            else
	                                if (v_MQI_2.toUpperCase() == "AADT"){
	                                    doc_nb2 = doc_aadt;
	                                    //doc_colornb = colornb(doc_aadt);
	                                }
	                                else
	                                    if (v_MQI_2.toUpperCase() == "YHFA"){
	                                        doc_nb2 = doc_yhfa;
	                                        //doc_colornb = colornb(doc_yhfa);
	                                    }
	                                    else
	                                        if (v_MQI_2.toUpperCase() == "MQI") {
	                                            doc_nb2 = doc_amqi;
	                                            //doc_colornb = colornb(doc_amqi);
	                                        }
	                                        doc_colornb = colornb(doc_nb2);
	                                        valins.push([[doc_gps[0], doc_gps[1]], [doc_gps[2], doc_gps[3]], [doc_colornb], [v_width_2], [doc_id],
	                                        [doc_sif01], [doc_sif02], [doc_sif03], [doc_sif05], [doc_vpos], [doc_lpos], [v_MQI_2.toUpperCase()], [doc_nb2]]);
	                                    }
	    Draw_Line(valins);
	}
	
	function docmapqry21(aNmae,aurl3,aly) {
		require(["dojo/dom", "dojo/on","esri/Color","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/layers/GraphicsLayer","esri/geometry/Polygon","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color, SimpleLineSymbol,SimpleFillSymbol, GraphicsLayer,Polygon,Geometry,SpatialReference,Query, QueryTask){
			query.where = gettxt(aNmae,1);
			query.outFields = ["NAME","ID"];
	        new QueryTask(gettxt(aurl3,3)).execute(query, function(results){       		 
	    	for (var i = 0; i < results.features.length; i++) {     		
	    		aly.add(new esri.Graphic(new Polygon(results.features[i].geometry.rings),
	    				new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,	
	    						new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
	    								new Color([255,220,220,0]), 2) , new Color([255,255,0,0])),
	    								  {"name": results.features[i].attributes["NAME"],	"id": results.features[i].attributes["ID"]}));		        	 	        	 	
	    	}      	     	  
	      });
	  });
	}
	
	function docmapqry22(aNmae,aurl3,aly) {
		iniaqry();
		require(["dojo/dom", "dojo/on","esri/Color","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/layers/GraphicsLayer","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color, SimpleLineSymbol,SimpleFillSymbol, GraphicsLayer,Geometry,SpatialReference,Query, QueryTask){
			query.where = gettxt(aNmae,1); 
			query.outFields = ["NAME","ID"];
	        new QueryTask(gettxt(aurl3,3)).execute(query, function(results){       		 
	    	for (var i = 0; i < results.features.length; i++) {
	    		Polygons = results.features[i];
				results22(aly);
	    	}      	     	  
	      });
	  });
	}
	
	function docmapqry23(aNmae,aurl3,aly,aDocRoad) {
		iniaqry();
		require(["dojo/dom", "dojo/on","esri/Color","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,SimpleLineSymbol, GraphicsLayer,Geometry,SpatialReference,Query, QueryTask){
		  query.where = gettxt(aNmae,2);
		  query.outFields = ["LXMC","LXBM"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){    	
	      for (var i = 0; i < results.features.length; i++) {
				Polygons = results.features[i];
				results23(aly,aDocRoad);
	    	  }      
	      });
	  });
	}
	
	function docmapqry23S(aNmae,aurl3,aly,aDocRoad) {
		iniaqry();
		require(["dojo/dom", "dojo/on","esri/Color","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,SimpleLineSymbol, GraphicsLayer,Geometry,SpatialReference,Query, QueryTask){
		  query.where = gettxt(aNmae,2);
		  query.outFields = ["LXMC","LXBM"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){    	
	      for (var i = 0; i < results.features.length; i++) {
				Polygons = results.features[i];
				results23S(aly,aDocRoad);
	    	  }      
	      });
	  });
	}
	
	function docmapqry23T(aNmae,aurl3,aly,aDocRoad) {
		iniaqry();
		require(["dojo/dom", "dojo/on","esri/Color","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,SimpleLineSymbol, GraphicsLayer,Geometry,SpatialReference,Query, QueryTask){
		  query.where = gettxt(aNmae,2);
		  query.outFields = ["LXMC","LXBM"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){    	
	      for (var i = 0; i < results.features.length; i++) {
				Polygons = results.features[i];
				results23T(aly,aDocRoad);
	    	  }      
	      });
	  });
	}
	
	function docmapqry24(atext,atext1,aurl3,aly) {
	    require(["dojo/dom", "dojo/on","esri/map", "esri/Color","esri/geometry/Point","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/layers/GraphicsLayer","esri/geometry/Polygon","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Map,Color,Point, SimpleLineSymbol,SimpleFillSymbol, GraphicsLayer,Polygon,Geometry,SpatialReference,Query, QueryTask){
		query.geometry = new Point([atext,atext1]);
		query.outFields = ["NAME","ID"];
	    new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
	    	for (var i = 0; i < results.features.length; i++) {
	    		Polygons = results.features[i];
	    		results24(aly);
	    	}      	     	  
	   });		   		  
	});
	}
	
	function docmapqry25(atext,atext1,aurl3,aly) {
		iniaqry();
		require(["dojo/dom", "dojo/on","esri/map","esri/geometry/Extent", "esri/geometry/ScreenPoint","esri/Color","esri/geometry/Point","esri/symbols/SimpleLineSymbol","esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"],function (dom, on, Map,Extent,ScreenPoint, Color,Point, SimpleLineSymbol,Query, QueryTask){         
			query.geometry = Apoint;
			query.outFields = ["NAME","ID"];
			new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
				Polygons = results;				
				results25(aly);
			 });		
		  });
	}
	
	function docmapqry26(alxbm,aqdzh,azdzh,aurl3,aly,aDocRoad) {	
		  iniaqry();
		  //var aLXMC=aDocRoad["roadName"];
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt(alxbm,2) + " and SXX=1 and LCZ>=" + aqdzh + "-1 and LCZ<=" + azdzh +" + 1";	  
		  query.outFields = ["LCZ","LXBM","LXMC"];
		  //alertShow(JSON.stringify(aDocRoad));
		  
		  //alertShow(aLXMC);
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			    var pline = new Array();
				var zh1 = parseInt(aqdzh);  
				var zh2 = parseInt(azdzh); 
				for (var i = 0; i < results.features.length; i++) {
				/*	aly.add(new esri.Graphic(results.features[i].geometry, 
						    new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, linesize26,
								new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
									new Color(vcolor26), 2), 
										new Color(vcolor26)),{"name": results.features[i].attributes["LXBM"],"id": results.features[i].attributes["LCZ"]}));  					
				}*/			
				for(var j = zh1; j <=zh2;j++){
	              for (var i = 0; i < results.features.length; i++) {
	            	  if((results.features[i].attributes["LCZ"]==j)
	            			  //&&(results.features[i].attributes["LXMC"]==aLXMC)
	            			  ){
	             		  pline.push([results.features[i].geometry.x, results.features[i].geometry.y]);         
	            	  } 	   
	    	         }  
		    	 } 
		    	}
	      results26(pline,aly, alxbm,aDocRoad); 
	      extMap.centerAt(pline[0]);
	      });	 
	  });
	}
	
	function docmapqry26S(alxbm,aqdzh,azdzh,aurl3,aly,aDocRoad) {	
		  iniaqry();	  
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt(alxbm,2) + " and SXX=1 and LCZ>=" + aqdzh + " and LCZ<=" + azdzh;	  
		  query.outFields = ["LCZ","LXBM","LXMC"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			    var pline = new Array();
				var zh1 = parseInt(aqdzh)+1;  
				var zh2 = parseInt(azdzh); 
				for (var i = 0; i < results.features.length; i++) {
				/*	aly.add(new esri.Graphic(results.features[i].geometry, 
						    new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, linesize26,
								new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
									new Color(vcolor26), 2), 
										new Color(vcolor26)),{"name": results.features[i].attributes["LXBM"],"id": results.features[i].attributes["LCZ"]}));  					
				}*/			
				for(var j = zh1; j <=zh2;j++){
	              for (var i = 0; i < results.features.length; i++) {
	            	  if(results.features[i].attributes["LCZ"]==j){
	             		  pline.push([results.features[i].geometry.x, results.features[i].geometry.y]);         
	            	  } 	   
	    	         }  
		    	 } 
		    	}
	      results26S(pline,aly, alxbm,aDocRoad); 
	      extMap.centerAt(pline[0]);
	      });	 
	  });
	}
	
	function docmapqry27(alxbm,aPro,aurl3,aly,aDocRoad) {	
		  iniaqry();	  
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = getdoctask27(alxbm,aPro);	  
		  query.outFields = ["LXBM"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  Polygons = results;			  
			  results27(aly,aDocRoad);
	      });	 
	  });
	}
	
	function docmapqry27S(alxbm,aPro,aurl3,aly,aDocRoad) {	
		  iniaqry();	  
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = getdoctask27(alxbm,aPro);	  
		  query.outFields = ["LXBM"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  Polygons = results;			  
			  results27S(aly,aDocRoad);
	      });	 
	  });
	}
	
	function docmapqry27T(alxbm,aPro,aurl3,aly,aDocRoad) {	
		  iniaqry();	  
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = getdoctask27(alxbm,aPro);	  
		  query.outFields = ["LXBM"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  Polygons = results;			  
			  results27T(aly,aDocRoad);
	      });	 
	  });
	}
	
	function docmapqry28(alxbm,aurl3,aly,aDocBridge) {	
		  iniaqry();	
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt(alxbm,4);	  
		  query.outFields = ["QLMC"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  Polygons = results;		  
			  results28(aly,aDocBridge);			  
	      });	 
	  });
	}
	
	function docmapqry281(alxbm,aurl3,aly,aDocBridge) {	
		  iniaqry();	
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt(alxbm,4);	  
		  query.outFields = ["QLMC"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  Polygons = results;		  
			  results281(aly,aDocBridge);			  
	      });	 
	  });
	}
	
	function docmapqry282(alxbm,aurl3,aly,aDocBridge) {	
		  iniaqry();	
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt(alxbm,4);	  
		  query.outFields = ["QLMC"];		  
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  Polygons = results;		  
			  results282(aly,aDocBridge);			  
	      });	 
	  });
	}
	
	function docmapqry29(alxbm,aurl3,aly,aDocBridge) {	
		  iniaqry();	
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"],function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt(alxbm,4);	  
		  query.outFields = ["QLMC","QLBM"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  Polygons = results;
			  results29(aly,aDocBridge);
	      });	 
	  });
	}
	
	function docmapqry30(alxbm,aurl3,aly,aDocTunnel) {	
		  iniaqry();	
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query","esri/tasks/QueryTask", "dojo/domReady!"],function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt(alxbm,5);	  
		  query.outFields = ["SDBM","SDMC"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  Polygons = results;
			  results30(aly,aDocTunnel);
	      });	 
	  });
	}
	
	function docmapqry301(alxbm,aurl3,aly,aDocTunnel) {	
		  iniaqry();	
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query","esri/tasks/QueryTask", "dojo/domReady!"],function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt(alxbm,5);	  
		  query.outFields = ["SDBM","SDMC"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  Polygons = results;
			  results301(aly,aDocTunnel);
	      });	 
	  });
	}
	
	function docmapqry302(alxbm,aurl3,aly,aDocTunnel) {	
		  iniaqry();	
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query","esri/tasks/QueryTask", "dojo/domReady!"],function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt(alxbm,5);	  
		  query.outFields = ["SDBM","SDMC"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  Polygons = results;
			  results302(aly,aDocTunnel);
	      });	 
	  });
	}
	
	function docmapqry31(alxbm,aurl3,aly,aDocTunnel) {	
		  iniaqry();	
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt(alxbm,5);	  
		  query.outFields = ["SDMC"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  Polygons = results;
			  results31(aly,aDocTunnel);
	      });	 
	  });
	}
	
	function docmapqry32(alxbm,aurl3,aly) {
		iniaqry();
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query","esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt(alxbm,2) + " and SXX=1";      
		  query.outFields = [vOut32];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  Polygons = results;
			  results32(aly);
	      });	 
	   });
	}
	
	function docmapqry32_S(alxbm,aurl3,aly) {
		iniaqry();
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query","esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt(alxbm,2) + " and SXX=1";      
		  query.outFields = [vOut33];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  Polygons = results;
			  results32_S(aly);
	      });	 
	   });
	}
	
	function docmapqry33(aurl3,aly,attt){
		iniaqry();
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query","esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt("1",6);      
		  query.outFields = ["NAME","ID"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  for (var i = 0; i < results.features.length; i++) {
		    		Polygons = results.features[i];
		    		var tatxt;	    		
		    		for(var j=0;j<attt.length;j++){
		    	       if(attt[j].id+"0000"==Polygons.attributes["ID"]){		    	    	    
		    	    	   tatxt=attt[j].atext;
		    	    	    var mqitxt;
		    	    		switch(parseInt(attt[j].alevel))
		    	    		{ 
		    	    		   case 1:vcolor33=vcolor33_1;break; 	    	    		 
		    	    		   case 2:vcolor33=vcolor33_2;break; 
		    	    		   case 3:vcolor33=vcolor33_3;break; 
		    	    		   case 4:vcolor33=vcolor33_4;break; 
		    	    		   case 5:vcolor33=vcolor33_5;break; 
		    	    		   case 6:vcolor33=vcolor33_6;break; 
		    	    		}
		    	    		if(parseInt(attt[j].alevel)<6){	    	    			
		    	    			results33(aly,tatxt,attt[j].alevel,attt[j].atext2);
		    	    		}
		    	    		//results33(aly,tatxt);	    
		    	       }  
		    	     }	
					//results33(aly,tatxt);				
		    	}      	     	  
	      });	 
	   });
	}
	
	function docmapqry331(aurl3,aly,attt){
		iniaqry();
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query","esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt("1",6);      
		  query.outFields = ["NAME","ID"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  for (var i = 0; i < results.features.length; i++) {
		    		Polygons = results.features[i];
		    		var tatxt;	    		
		    		for(var j=0;j<attt.length;j++){
		    	       if(attt[j].id+"0000"==Polygons.attributes["ID"]){
		    	    	    tatxt=attt[j].atext;	    	    	    
		    	    		switch(parseInt(attt[j].alevel))
		    	    		{ 
		    	    		   case 1:vcolor33=vcolor331_1;mqitxt=":优";break; 	    	    		 
		    	    		   case 2:vcolor33=vcolor331_2;mqitxt=":良";break; 
		    	    		   case 3:vcolor33=vcolor331_3;mqitxt=":中";break; 
		    	    		   case 4:vcolor33=vcolor331_4;mqitxt=":次";break; 
		    	    		   case 5:vcolor33=vcolor331_5;mqitxt=":差";break; 
		    	    		   case 6:vcolor33=vcolor331_6;mqitxt=":无";break; 
		    	    		}
		    	    		if(parseInt(attt[j].alevel)<6){	    	    			
		    	    			results331(aly,tatxt,attt[j].alevel,attt[j].atext2+mqitxt);
		    	    		}
		    	    		//results33(aly,tatxt);	
		    	       }  
		    	     }	
					//results33(aly,tatxt);	 			
		    	}      	     	  
	      });	 
	   });
	}
	
	function docmapqry332(aurl3,aly,attt){
		iniaqry();
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query","esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt("1",6);      
		  query.outFields = ["NAME","ID"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  for (var i = 0; i < results.features.length; i++) {
		    		Polygons = results.features[i];
		    		var tatxt;	    		
		    		for(var j=0;j<attt.length;j++){
		    	       if(attt[j].id+"0000"==Polygons.attributes["ID"]){
		    	    	    tatxt=attt[j].atext;	    	    	    
		    	    		switch(parseInt(attt[j].alevel))
		    	    		{ 
		    	    		   case 1:vcolor33=vcolor332_1;break; 	    	    		 
		    	    		   case 2:vcolor33=vcolor332_2;break; 
		    	    		   case 3:vcolor33=vcolor332_3;break; 
		    	    		   case 4:vcolor33=vcolor332_4;break; 
		    	    		   case 5:vcolor33=vcolor332_5;break; 
		    	    		   case 6:vcolor33=vcolor332_6;break; 
		    	    		}
		    	    		if(parseInt(attt[j].alevel)<6){	    	    			
		    	    			results332(aly,tatxt,attt[j].alevel,attt[j].atext2);
		    	    		}
		    	    		//results33(aly,tatxt);	
		    	       }  
		    	     }	
					//results33(aly,tatxt);				
		    	}      	     	  
	      });	 
	   });
	}
	
	function docmapqry34(aurl3,aly,attt){
		iniaqry();
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query","esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt("1",6);      
		  query.outFields = ["NAME","ID"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  for (var i = 0; i < results.features.length; i++) {
		    		Polygons = results.features[i];
		    		var tatxt;	    		
		    		for(var j=0;j<attt.length;j++){
		    	       if(attt[j].id+"0000"==Polygons.attributes["ID"]){
		    	    	    tatxt=attt[j].atext;	    	    	    
		    	    		switch(parseInt(attt[j].alevel))
		    	    		{ 
		    	    		   case 1:vcolor33=[120, 224, 57];break; 	    	    		 
		    	    		   case 2:vcolor33=[97, 251, 231];break; 
		    	    		   case 3:vcolor33=[224, 238, 115];break; 
		    	    		   case 4:vcolor33=[255, 170, 82];break; 
		    	    		   case 5:vcolor33=[250, 84, 2];break; 
		    	    		   case 6:vcolor33=[255, 255, 255];break; 	    	    		   	    	    		   
		    	    		}
		    	    		if(parseInt(attt[j].alevel)<6){	    	    			
		    	    			results34(aly,tatxt,attt[j].alevel,attt[j].atext2);
		    	    		}
		    	    		//results33(aly,tatxt);	
		    	       }  
		    	     }	
					//results33(aly,tatxt);				
		    	}      	     	  
	      });	 
	   });
	}
	
	function docmapqry35(alxbm,aqdzh,azdzh,aurl3,aly,mcolor,ajson){	
		  iniaqry();
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	    query.where = gettxt(alxbm,2) + " and SXX=1 and LCZ>=" + aqdzh + " and LCZ<=" + azdzh;	  
		  query.outFields = ["LCZ","LXBM"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			    var pline = new Array();
				var zh1 = parseInt(aqdzh)+1;  
				var zh2 = parseInt(azdzh); 
				for (var i = 0; i < results.features.length; i++) {
				/*	aly.add(new esri.Graphic(results.features[i].geometry, 
						    new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, linesize26,
								new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
									new Color(vcolor26), 2), 
										new Color(vcolor26)),{"name": results.features[i].attributes["LXBM"],"id": results.features[i].attributes["LCZ"]}));  					
				}*/			
				
					for(var j = zh1; j <=zh2;j++){
	            
						for (var i = 0; i < results.features.length; i++) {
	          	  
							if(results.features[i].attributes["LCZ"]==j){
	           		  
								pline.push([results.features[i].geometry.x, results.features[i].geometry.y]);         
	          	  
							} 	   
	  	         
						}  
		    	 
					} 
		    	
				}
	    results35(pline,aly,mcolor,ajson);   
	    });	 
	});
	}
	
	function docmapqry36(alxbm,aqdzh,azdzh,aurl3,aly,mcolor,ajson){	
		  iniaqry(); 	  
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	    query.where = gettxt(alxbm,2) + " and SXX=1 and LCZ>=" + aqdzh + " and LCZ<=" + azdzh;	  
		  query.outFields = ["LCZ","LXBM"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			    var pline = new Array();
				var zh1 = parseInt(aqdzh)+1;  
				var zh2 = parseInt(azdzh); 
				for (var i = 0; i < results.features.length; i++) {
				/*	aly.add(new esri.Graphic(results.features[i].geometry, 
						    new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, linesize26,
								new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
									new Color(vcolor26), 2), 
										new Color(vcolor26)),{"name": results.features[i].attributes["LXBM"],"id": results.features[i].attributes["LCZ"]}));  					
				}*/			
				    
					for(var j = zh1; j <=zh2;j++){
	                    
						for (var i = 0; i < results.features.length; i++) {
	          	            
							if(results.features[i].attributes["LCZ"]==j){
	           		            
								pline.push([results.features[i].geometry.x, results.features[i].geometry.y]);         
	          	            
							} 	   
	  	                
						}  
		    	     
					} 
		    	
				}
	    results36(pline,aly,mcolor,ajson);   
	    });	 
	});
	}
	
	function docmapqry37(atext,atext1,aurl3,aly){
		iniaqry();
		require(["dojo/dom", "dojo/on","esri/map","esri/geometry/Extent", "esri/geometry/ScreenPoint","esri/Color","esri/geometry/Point","esri/symbols/SimpleLineSymbol","esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"],function (dom, on, Map,Extent,ScreenPoint, Color,Point, SimpleLineSymbol,Query, QueryTask){         
			query.geometry = Apoint;
			//query.geometry = new Point([123.03805256112085,45.58046075690552],cmap_SpatialReference);
			//[123.03805256112085,45.58046075690552]
			//query.outFields = ["LXBM"];//["NAME","ID"]; 
			new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
				alert(results.features.length); 
				//alert(results.features[0].attributes["LXBM"]);
			 });	 	
		  });	 
	}
	
	function docmapqry38(aNmae,aurl3,aly){
		  iniaqry();	  
	      require(["dojo/dom", "dojo/on","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,Query, QueryTask){    	  
			  var vxmin9=180;
			  var vymin9=90;
			  var vxmax9=0;
			  var vymax9=0;		   
	    	  var zhmax=0;
			  var zhmin=9999;
			  for(var j = 0; j < aNmae.length; j++) {			 
				  if(zhmax <  parseInt(aNmae[j].endStake)){
					  zhmax = parseInt(aNmae[j].endStake); 
				  }
				  if(zhmin >  parseInt(aNmae[j].startStake)){
					  zhmin = parseInt(aNmae[j].startStake); 
				  }
			  }		  
		if(aNmae[0].roadCode=="G111"){
			if(zhmax>1300){
				zhmax=1300;
			}
		}
		
	      query.where = gettxt(aNmae[0].roadCode, 2) + " and (SXX=1 or SXX=3) and LCZ>=" + zhmin + " and LCZ<=" + zhmax;;	
		  query.outFields = ["LCZ","LXBM","LXMC"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
		  
			  for(var j = 0; j < aNmae.length; j++){		  		  		    
				  var pline = new Array();			
				  var zh1 = parseInt(aNmae[j].startStake)+1;  			
				  var zh2 =parseInt(aNmae[j].startStake); 			
				  for (var i = 0; i < results.features.length; i++) {									  
					  if((results.features[i].attributes["LCZ"]>=zh2)&&(results.features[i].attributes["LCZ"]<=zh1)){             		  							  
						  pline.push([results.features[i].geometry.x, results.features[i].geometry.y]);
						  if(results.features[i].geometry.x > vxmax9){vxmax9 = results.features[i].geometry.x}
						  if(results.features[i].geometry.x < vxmin9){vxmin9 = results.features[i].geometry.x}
						  if(results.features[i].geometry.y > vymax9){vymax9 = results.features[i].geometry.y}
						  if(results.features[i].geometry.y < vymin9){vymin9 = results.features[i].geometry.y}						  
					  } 	       	         
				  }
				  if(pline.length>1){			  
					  for(var key in aNmae[0]){					
						  if( (key == "mqi")||(key == "pqi")||(key == "pci")||(key == "rqi")||(key == "rdi")||(key == "sri")||(key == "pssi")){
							  results38(pline,aly,colornb(aNmae[j][key]),aNmae[j],key,aNmae[j][key]);
						  }					 
					  }  			   
				  }			  
			  }
			  if(v0or1==1){
				  SetGuanGuo(extMap,vxmin9-2,vymin9-2,vxmax9+2,vymax9+2);
			  }		 	
	      });	 
	  });
	}
	
	function docmapqry39(aNmae,aurl3,aly,aDocRoad){
		iniaqry();
		require(["dojo/dom", "dojo/on","esri/Color","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,SimpleLineSymbol, GraphicsLayer,Geometry,SpatialReference,Query, QueryTask){
		  query.where = gettxt(aNmae,2);
		  query.outFields = ["LXMC","LXBM"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){    	
	      for (var i = 0; i < results.features.length; i++) {
				if(vRoadCode0906 ==aNmae){    	  
					Polygons = results.features[i];
					results39(aly,aNmae);				
				}
	    	  }      
	      });
	  });
	}
	
	function docmapqry40(aNmae,aurl3,aly){
		  iniaqry();	   
	      require(["dojo/dom", "dojo/on","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,Query, QueryTask){    	  
			  var vxmin9=180;
			  var vymin9=90;
			  var vxmax9=0;
			  var vymax9=0;		   
	    	  var zhmax=0;
			  var zhmin=9999;				 
				  if(zhmax <  parseInt(aNmae.endStake)){
					  zhmax = parseInt(aNmae.endStake); 
				  }
				  if(zhmin >  parseInt(aNmae.startStake)){
					  zhmin = parseInt(aNmae.startStake); 
				  } 
			  	
			  zhmax = zhmax + 1;
			  zhmin = zhmin - 1;
			 	  
	      query.where = gettxt(aNmae.roadCode, 2) + " and (SXX=1 or SXX=3) and LCZ>=" + zhmin + " and LCZ<=" + zhmax;;	
	 
		  query.outFields = ["LCZ","LXBM","LXMC"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
				  var pline = new Array();			
				  var zh1 = parseInt(aNmae.endStake);  			
				  var zh2 = parseInt(aNmae.startStake); 
				  if(zh1==zh2){zh1=zh1+1}
				  for (var i = 0; i < results.features.length; i++) {									  
					  if((results.features[i].attributes["LCZ"]>=zh2)&&(results.features[i].attributes["LCZ"]<=zh1)){             		  							  
						  pline.push([results.features[i].geometry.x, results.features[i].geometry.y]);
						  if(results.features[i].geometry.x > vxmax9){vxmax9 = results.features[i].geometry.x}
						  if(results.features[i].geometry.x < vxmin9){vxmin9 = results.features[i].geometry.x}
						  if(results.features[i].geometry.y > vymax9){vymax9 = results.features[i].geometry.y}
						  if(results.features[i].geometry.y < vymin9){vymin9 = results.features[i].geometry.y}						  
					  } 	       	         
				  }
				 
				  if(pline.length>1){			  
					  results40(pline,aly,aNmae.fatype,aNmae,aNmae.fatype,aNmae.fatype);
				  }			  		 
			  if(v0or1==1){
				  SetGuanGuo(extMap,vxmin9-2,vymin9-2,vxmax9+2,vymax9+2);
			  }		 	
	      });	 
	  });        
	}
	
	function docmapqry41(alxbm,aurl3,aly,aDocBridge){	
		  iniaqry();
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference,Query, QueryTask){    	  
	      query.where = gettxt(alxbm,7);	  
		  query.outFields = ["*"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
			  Polygons = results;		  
			  results41(aly,aDocBridge);			  
	      });	 
	  });
	}

	
	function docmapqry42(aNmae,aurl3,aly){
		  iniaqry();	   
	      require(["dojo/dom", "dojo/on","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"], function (dom, on, Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,Query, QueryTask){    	  
			  var vxmin9=180;
			  var vymin9=90;
			  var vxmax9=0;
			  var vymax9=0;		   
	    	  var zhmax=0;
			  var zhmin=9999;
				 
				  if(zhmax <  parseInt(aNmae.endStake)){
					  zhmax = parseInt(aNmae.endStake); 
				  }
				  if(zhmin >  parseInt(aNmae.startStake)){
					  zhmin = parseInt(aNmae.startStake); 
				  } 
			  	
			  zhmax = zhmax + 1;
			  zhmin = zhmin - 1;
			 	  
	      query.where = gettxt(aNmae.roadCode, 2) + " and (SXX=1 or SXX=3) and LCZ>=" + zhmin + " and LCZ<=" + zhmax;;	
	 
		  query.outFields = ["LCZ","LXBM","LXMC"];
		  new QueryTask(gettxt(aurl3,3)).execute(query,function(results){
				  var pline = new Array();			
				  var zh1 = parseInt(aNmae.endStake);  			
				  var zh2 = parseInt(aNmae.startStake); 
				  if(zh1==zh2){zh1=zh1+1}
				  for (var i = 0; i < results.features.length; i++) {									  
					  if((results.features[i].attributes["LCZ"]>=zh2)&&(results.features[i].attributes["LCZ"]<=zh1)){             		  							  
						  pline.push([results.features[i].geometry.x, results.features[i].geometry.y]);
						  if(results.features[i].geometry.x > vxmax9){vxmax9 = results.features[i].geometry.x}
						  if(results.features[i].geometry.x < vxmin9){vxmin9 = results.features[i].geometry.x}
						  if(results.features[i].geometry.y > vymax9){vymax9 = results.features[i].geometry.y}
						  if(results.features[i].geometry.y < vymin9){vymin9 = results.features[i].geometry.y}						  
					  } 	       	         
				  }
				 
				  if(pline.length>1){			  
					  results42(pline,aly,aNmae.maintain_type,aNmae,aNmae.maintain_type,aNmae.maintain_type);
				  }			  		 
			  if(v0or1==1){
				  SetGuanGuo(extMap,vxmin9-2,vymin9-2,vxmax9+2,vymax9+2);
			  }		 	
	      });	 
	  });        
	}
	

	
	function results22(aly){
		require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Extent", "esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/layers/GraphicsLayer","esri/geometry/Polygon","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Color, Extent,SimpleLineSymbol,SimpleFillSymbol, GraphicsLayer,Polygon,Geometry,SpatialReference){
			aly.clear();
			aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings),new SimpleFillSymbol(SimpleFillSymbol.STYLE_NULL,new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color([153,204,255]), 4) ,new Color([153,204,255,0])),{"name": Polygons.attributes["NAME"],	"id": Polygons.attributes["ID"]}));		        	 	       
	        	setvextent(extMap,new Extent(new Polygon(Polygons.geometry.rings).getExtent(),cmap_SpatialReference)); 
		});
	}
	
	function results23(aly,atxt){
	      require(["dojo/dom", "dojo/on","esri/Color","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Color,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){
	    	  if((WZY_ID=="公路")&&(WZY_ID2=="asset")){	    		 
	    		  typeof(atxt["trafficLength"])=="undefined"?aly.add(new esri.Graphic(new Polyline(Polygons.geometry.paths), new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor27), linesize27)
        	      ,{"name": atxt["roadName"],"id":atxt["roadCode"],"qdzh":atxt["startStake"],"zdzh":atxt["endStake"],"lc":"","nyear":atxt["repYear"]})):aly.add(new esri.Graphic(new Polyline(Polygons.geometry.paths), new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor27), linesize27)
        	      ,{"name": atxt["roadName"],"id":atxt["roadCode"],"qdzh":atxt["startStake"],"zdzh":atxt["endStake"],"lc":atxt["trafficLength"],"nyear":atxt["repYear"]}));
 	 
	        	  
	          }
	          else{
		    	  
	        	  aly.add(new esri.Graphic(new Polyline(Polygons.geometry.paths), new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor27), linesize27)
	        	      ,{"name": atxt["roadName"],"id":atxt["roadCode"],"qdzh":atxt["startStake"],"zdzh":atxt["endStake"],"lc":atxt["roadLength"],"nyear":atxt["repYear"]}));   	 
	        	  
	          }
	      
	      });
	
	}
	
	function results23S(aly,atxt){
	      require(["dojo/dom", "dojo/on","esri/Color","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Color,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){
	            aly.add(new esri.Graphic(new Polyline(Polygons.geometry.paths), new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor27), linesize27)
	//            ,{"name": Polygons.attributes["LXMC"],"id": Polygons.attributes["LXBM"]}));   	 
	            ,{"name": atxt["roadName"],"id":atxt["roadCode"],"qdzh":atxt["startStake"],"zdzh":atxt["endStake"],"lc":atxt["maintainLength"]
	            ,"nyear":atxt["repYear"],"a1":atxt["nLength"],"a2":atxt["oLength"],"a3":atxt["pLength"],"a4":atxt["rLength"]}));   	 
	  });
	}
	
	function results23T(aly,atxt){
	      require(["dojo/dom", "dojo/on","esri/Color","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Color,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){
	            aly.add(new esri.Graphic(new Polyline(Polygons.geometry.paths), new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor27), linesize27)
	//            ,{"name": Polygons.attributes["LXMC"],"id": Polygons.attributes["LXBM"]}));   	 
	            ,{"name": atxt["roadName"],"id":atxt["roadCode"],"qdzh":atxt["startStake"],"zdzh":atxt["endStake"],"lc":atxt["maintainLength"]
	            ,"nyear":atxt["repYear"],"a1":atxt["bigLength"],"a2":atxt["middleLength"],"a3":atxt["preventLength"],"a4":atxt["rebulidLength"],"a5":atxt["smallLength"]}));   	 
	  });
	}
	
	function results24(aly){
	    require(["dojo/dom", "dojo/on","esri/map", "esri/Color","esri/geometry/Point","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/layers/GraphicsLayer","esri/geometry/Polygon","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Map,Color,Point, SimpleLineSymbol,SimpleFillSymbol, GraphicsLayer,Polygon,Geometry,SpatialReference){
	    		aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings),new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color([255,220,220]), 2) ,new Color([255,255,0,0.1])),{"name": Polygons.attributes["NAME"],"id": Polygons.attributes["ID"]}));    	     	  
	   });		   		  
	}
	
	function results25(aly){
		require(["dojo/dom", "dojo/on","esri/geometry/Extent", "esri/geometry/ScreenPoint","esri/Color","esri/geometry/Point","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/layers/GraphicsLayer","esri/geometry/Polygon","esri/geometry/Geometry","esri/SpatialReference","dojo/domReady!"],function (dom, on,Extent,ScreenPoint, Color,Point, SimpleLineSymbol,SimpleFillSymbol, GraphicsLayer,Polygon,Geometry,SpatialReference){         
			    if(DisId909==Polygons.features[0].attributes["ID"]){}else{
	
			    	DisId909 = Polygons.features[0].attributes["ID"];
			        aly.clear();
				    aly.add(new esri.Graphic(new Polygon(Polygons.features[0].geometry.rings),
			    		new SimpleFillSymbol(SimpleFillSymbol.STYLE_NULL,	
			    				new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
			    						new Color([153,204,255]), 4) ,new Color([153,204,255,0])),
			    						{"name": Polygons.features[0].attributes["NAME"],"id": Polygons.features[0].attributes["ID"]}));		        	 	        	 	
	        	   setvextent(extMap,new Extent(new Polygon(Polygons.features[0].geometry.rings).getExtent(),cmap_SpatialReference)); 
	        	   M_clck2(Polygons.features[0].attributes["NAME"]);}        	
		  });
	}
	
	function results26(aline,aly,alxbm,atxt){	
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){    	  

	    	  if((WZY_ID=="公路")&&(WZY_ID2=="asset")){	    		 
	    		  typeof(atxt["trafficLength"])=="undefined"?aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference), new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor26), linesize26)
	    		      ,{"name": atxt["roadName"],"id":atxt["roadCode"],"qdzh":atxt["startStake"],"zdzh":atxt["endStake"],"lc":"","nyear":atxt["repYear"]})):aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference), new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor26), linesize26)
			          ,{"name": atxt["roadName"],"id":atxt["roadCode"],"qdzh":atxt["startStake"],"zdzh":atxt["endStake"],"lc":atxt["trafficLength"],"nyear":atxt["repYear"]}));   	 
	          }
	          else{
	        	  aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference), new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor26), linesize26)
			          ,{"name": atxt["roadName"],"id":atxt["roadCode"],"qdzh":atxt["startStake"],"zdzh":atxt["endStake"],"lc":atxt["roadLength"],"nyear":atxt["repYear"]}));   	 
	        	  
	          }	    	
	  });
	}
	
	function results26S(aline,aly,alxbm,atxt){	
		
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){    	  
		    aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference), new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor26), linesize26)
		    ,{"name": atxt["roadName"],"id":atxt["roadCode"],"qdzh":atxt["startStake"],"zdzh":atxt["endStake"],"lc":atxt["maintainLength"],"nyear":atxt["repYear"]}));   	 
	  });
	}
	 
	function results27(aly,atxt){		  
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference","dojo/domReady!"],function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){    	  
				for (var i = 0; i < Polygons.features.length; i++) {
			    	  
					if((WZY_ID=="公路")&&(WZY_ID2=="asset")){	    		 
			    		  typeof(atxt["trafficLength"])=="undefined"?aly.add(new esri.Graphic(Polygons.features[i].geometry, new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor27), linesize27)
			    		      ,{"name": atxt["roadName"],"id":atxt["roadCode"],"qdzh":atxt["startStake"],"zdzh":atxt["endStake"],"lc":"","nyear":atxt["repYear"]})):aly.add(new esri.Graphic(Polygons.features[i].geometry, new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor27), linesize27)
							  ,{"name": atxt["roadName"],"id":atxt["roadCode"],"qdzh":atxt["startStake"],"zdzh":atxt["endStake"],"lc":atxt["trafficLength"],"nyear":atxt["repYear"]}));  							        	  
			          }
			          else{													
			        	  aly.add(new esri.Graphic(Polygons.features[i].geometry, new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor27), linesize27)
							,{"name": atxt["roadName"],"id":atxt["roadCode"],"qdzh":atxt["startStake"],"zdzh":atxt["endStake"],"lc":atxt["roadLength"],"nyear":atxt["repYear"]}));  							        	  
			          }	    	
				
				}			     	 
	    });
	}
	//////增加分项费用////
	function results27S(aly,atxt){		  
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference","dojo/domReady!"],function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){    	  
				for (var i = 0; i < Polygons.features.length; i++) {
					/////////
					aly.add(new esri.Graphic(Polygons.features[i].geometry, 
							new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor27), linesize27)
					,{"name": atxt["roadName"],"id":atxt["roadCode"],"qdzh":atxt["startStake"],"zdzh":atxt["endStake"],"lc":atxt["roadLength"]
					//,"nyear":atxt["repYear"]}));
		            ,"nyear":atxt["repYear"],"a1":atxt["nLength"],"a2":atxt["oLength"],"a3":atxt["pLength"],"a4":atxt["rLength"]}));   	 

				
				}			     	 
	    });
	}
    //////增加分项费用////
	function results27T(aly,atxt){		  
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference","dojo/domReady!"],function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){    	  
				for (var i = 0; i < Polygons.features.length; i++) {
					/////////
					aly.add(new esri.Graphic(Polygons.features[i].geometry, 
							new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor27), linesize27)
					,{"name": atxt["roadName"],"id":atxt["roadCode"],"qdzh":atxt["startStake"],"zdzh":atxt["endStake"],"lc":atxt["roadLength"]
					//,"nyear":atxt["repYear"]}));
		            ,"nyear":atxt["repYear"],"a1":atxt["nLength"],"a2":atxt["oLength"],"a3":atxt["pLength"],"a4":atxt["rLength"]}));   	 

				
				}			     	 
	    });
	}
	
	function results28(aly,atxt){
		
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"],function (dom, on, Color,Point,SimpleMarkerSymbol,PictureMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){   	  
				for (var i = 0; i < Polygons.features.length; i++) {					
					aly.add(new esri.Graphic(Polygons.features[i].geometry,
							/*
							 new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, linesize28,
										new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
											new Color(vcolor28), 2), 
												new Color(vcolor28)),*/	
							//"../common//images/navigation/20"+atxt["evaluateLevelCode"]+".png"						
						//	new PictureMarkerSymbol(picstr28, linesize28, linesize28)	
  				  new PictureMarkerSymbol("../common//images/navigation/20"+atxt["evaluateLevelCode"]+".png", 22, 37)
					
					,{"name": atxt["bridgeName"],"id":atxt["bridgeCode"],"roadcode":atxt["roadCode"],"roadpos":atxt["centerStake"],"lc":atxt["bridgeTotalLength"],"nyear":atxt["repYear"]})); 
				}			     	 
	  });
	}
	
	function results281(aly,atxt){
		
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"],function (dom, on, Color,Point,SimpleMarkerSymbol,PictureMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){   	  
				for (var i = 0; i < Polygons.features.length; i++) {
					var aspic;
					typeof(atxt["monitor"])=="undefined"?aspic="":aspic=atxt["monitor"]; 
					aly.add(new esri.Graphic(Polygons.features[i].geometry,
							/*
							 new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, linesize28,
										new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
											new Color(vcolor28), 2), 
												new Color(vcolor28)),*/							
							new PictureMarkerSymbol("../common//images/navigation/20"+aspic+".png", 22, 37)
					
					,{"name": atxt["bridgeName"],"id":atxt["bridgeCode"],"roadcode":atxt["roadCode"],"roadpos":atxt["centerStake"],"lc":atxt["bridgeLength"],"nyear":atxt["repYear"]}
					)); 
				}			     	 
	  });
	}
	
	function results282(aly,atxt){
		  
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"],function (dom, on, Color,Point,SimpleMarkerSymbol,PictureMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){   	  
	    	  for (var i = 0; i < Polygons.features.length; i++) {
	    		   
	    		  aly.add(new esri.Graphic(Polygons.features[i].geometry,
							/*
							 new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, linesize28,
										new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
											new Color(vcolor28), 2), 
												new Color(vcolor28)),*/							
							
	    				  new PictureMarkerSymbol("../common//images/navigation/20"+atxt["evaluateLevelCode"]+".png", 22, 37)
					
					,{"name": atxt["bridgeName"],"id":atxt["bridgeCode"],"roadcode":atxt["roadCode"],"roadpos":atxt["centerStake"],"lc":"","nyear":atxt["repYear"]}
					)); 
				}			     	 
	  });
	}
	
	function results29(aly,atxt){
		
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"],function (dom, on, Color,Point,PictureMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){ 
	    	    aly.clear();
	    	    
				for (var i = 0; i < Polygons.features.length; i++) {
					
					aly.add(new esri.Graphic(Polygons.features[i].geometry,new PictureMarkerSymbol(picstr29, linesize29, linesize29)
					
					,{"name": atxt["bridgeName"],"id":atxt["bridgeCode"],"roadcode":atxt["roadCode"],"roadpos":atxt["centerStake"],"lc":atxt["bridgeTotalLength"],"nyear":atxt["repYear"]})); 
				}			     	 
	    });
	}
	
	function results30(aly,atxt){
		//alertShow(JSON.stringify(atxt));
		 
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference","dojo/domReady!"],function (dom, on, Color,Point,SimpleMarkerSymbol,PictureMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){   	  
				for (var i = 0; i < Polygons.features.length; i++) {				
					aly.add(new esri.Graphic(Polygons.features[i].geometry,
							/*
							 new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, linesize30,
										new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
											new Color(vcolor30), 2), 
												new Color(vcolor30)),*/							
							new PictureMarkerSymbol( "../common//images/navigation/20"+Tunnel_Pic(atxt["evaluateLevel"])+".png", 22, 37)					
					,{"name": atxt["tunnelName"],"id":atxt["tunnelCode"],"roadcode":atxt["roadCode"],"roadpos":atxt["centerStake"],"lc":atxt["tunnelLength"],"nyear":atxt["repYear"]}
					)); 
				}			     	 
	     });
	}
	
	function results301(aly,atxt){
		//alertShow(JSON.stringify(atxt));alertShow("1");
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference","dojo/domReady!"],function (dom, on, Color,Point,SimpleMarkerSymbol,PictureMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){   	  
				for (var i = 0; i < Polygons.features.length; i++) {				
					aly.add(new esri.Graphic(Polygons.features[i].geometry,
							/*
							 new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, linesize30,
										new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
											new Color(vcolor30), 2),  
												new Color(vcolor30)),*/							
							new PictureMarkerSymbol( "../common//images/navigation/20"+Tunnel_Pic(atxt["evaluateLevelCode"])+".png", 22, 37)					
					,{"name": atxt["tunnelName"],"id":atxt["tunnelCode"],"roadcode":atxt["roadCode"],"roadpos":atxt["centerStake"],"lc":"","nyear":atxt["repYear"]}
					)); 
				}			     	 
	     });
	}
	
	function results302(aly,atxt){
		//alertShow(JSON.stringify(atxt));alertShow("2");
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference","dojo/domReady!"],function (dom, on, Color,Point,SimpleMarkerSymbol,PictureMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){   	  
				for (var i = 0; i < Polygons.features.length; i++) {				
					aly.add(new esri.Graphic(Polygons.features[i].geometry,
							/*
							 new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, linesize30,
										new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
											new Color(vcolor30), 2), 
												new Color(vcolor30)),*/							
							new PictureMarkerSymbol( "../common//images/navigation/20"+Tunnel_Pic(atxt["allMoniter"])+".png", 22, 37)					
					,{"name": atxt["tunnelName"],"id":atxt["tunnelCode"],"roadcode":atxt["roadCode"],"roadpos":atxt["centerStake"],"lc":atxt["tunnelLength"],"nyear":atxt["repYear"]}
					)); 
				}			     	 
	     });
	}
	
	function results31(aly,atxt){		  
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"],function (dom, on, Color,Point,PictureMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){   	  
	    	        aly.clear(); 
	    	        for (var i = 0; i < Polygons.features.length; i++) {				
	  				
	    	        	aly.add(new esri.Graphic(Polygons.features[i].geometry
	  						
	    	        			,{"name": atxt["tunnelName"],"id":atxt["tunnelCode"],"roadcode":atxt["roadCode"],"roadpos":atxt["centerStake"],"lc":atxt["tunnelLength"],"nyear":atxt["repYear"]})); 
	  			}			     	 
	       });
	}
	
	function results32(aly){	
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,PictureMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){   	  
	    	  var txtjson62 = [];
	    	  for (var i = 0; i < Polygons.features.length; i++) {				
	    		  var j = {};
	    		  j.ID=  " " + i;
	    		  //j.link="http://www.roadmaint.cn/";
	              j.NAME = Polygons.features[i].attributes[vOut32];
	              j.lat =  ""+Polygons.features[i].geometry.y.toString();
	              j.lng =  ""+Polygons.features[i].geometry.x.toString();
	              txtjson62.push(j);    		  
	    	  }
	    	  doc_ClusterPoint(txtjson62);
	  });
	}
	
	function results32_S(aly){	
	      require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,PictureMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){   	  
	    	  var txtjson62 = [];
	    	  for (var i = 0; i < Polygons.features.length; i++) {				
	    		  var j = {};
	    		  j.ID=  " " + i;
	    		  //j.link="http://www.roadmaint.cn/";
	              j.NAME = Polygons.features[i].attributes[vOut33];
	              j.lat =  ""+Polygons.features[i].geometry.y.toString();
	              j.lng =  ""+Polygons.features[i].geometry.x.toString();
	              txtjson62.push(j);    		  
	    	  }		    	   
	    	  //alert(JSON.stringify(txtjson62));
	    	  doc_ClusterPoint(txtjson62);
	  });
	}
	
	
	
	function results33(aly,asatxt,aslevel,asatxt2){
		require(["dojo/dom", "dojo/on","esri/geometry/Point","esri/symbols/TextSymbol","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleMarkerSymbol","esri/Color","esri/symbols/Font","esri/geometry/Extent", "esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/layers/GraphicsLayer","esri/geometry/Polygon","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"],function (dom, on, Point, TextSymbol, PictureMarkerSymbol, SimpleMarkerSymbol, Color,Font, Extent,SimpleLineSymbol,SimpleFillSymbol, GraphicsLayer,Polygon,Geometry,SpatialReference){
			//aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings),new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL,new Color([153,102,204]), 1) ,new Color([255,255,255,1]))));		        	 	       
			//aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings),new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL,new Color([153,102,204]), 1) ,new Color(vcolor33)),{"name": asatxt,"id":asatxt,"atxt":asatxt}));		        	 	       
			
			//asatxt= asatxt.substring(0, asatxt.length - 4);
			/*
	        var picBaseUrl = "../common/images/navigation/21.png";
	        var symb1 = new PictureMarkerSymbol(picBaseUrl + "21.png", 32, 32).setOffset(0, 15);
	        var symb2 = new PictureMarkerSymbol(picBaseUrl + "22.png", 64, 64).setOffset(0, 15);
	        var symb3 = new PictureMarkerSymbol(picBaseUrl + "23.png", 72, 72).setOffset(0, 15);
	        */	
			/*
			 * 
			 * 注释圆饼方式
	        var aweidth = 50+3*parseInt(aslevel);
			aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(), 
				    new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, aweidth,
						new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
								new Color(255,255,255), 1), 
								new Color(255,255,255)),{"atxt":asatxt2}));
	 	
			aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(), 
				    new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, aweidth,
						new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
								new Color(255,0,0), 1), 
								new Color(vcolor33)),{"atxt":asatxt2}));
			
			*
			*/
			/*
			aly.add(new esri.Graphic(
					new Polygon(Polygons.geometry.rings).getExtent().getCenter(), 
					    new PictureMarkerSymbol("../common/images/21.png", 80, 80),
					       {"atxt": Polygons.attributes["NAME"] + asatxt}));
					       */
			//aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(),
				  //   new TextSymbol(" "+ Math.ceil(asatxt/100)/100 ).setOffset(0,-8).setColor(new Color([255,240,255,1])).setAlign(Font.ALIGN_START).setFont(new Font("10pt").setWeight(Font.WEIGHT_BOLD))));	
	
			aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings),
					new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
					new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
					new Color([250,250,250]), 1) ,
					new Color(vcolor33)),{"atxt":asatxt2}  ));    	     	  
			extMap.setExtent(new Extent(vxmin,vymin,vxmax,vymax,cmap_SpatialReference));	
	//		aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(),
	//			     new TextSymbol(" "+  asatxt ).setOffset(0,-8).setColor(new Color([255,255,255,1])).setAlign(Font.ALIGN_START).setFont(new Font("12pt").setWeight(Font.WEIGHT_BOLD))));	
		});
	}
	
	
	function results331(aly,asatxt,aslevel,asatxt2){
		require(["dojo/dom", "dojo/on","esri/geometry/Point","esri/symbols/TextSymbol","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleMarkerSymbol","esri/Color","esri/symbols/Font","esri/geometry/Extent", "esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/layers/GraphicsLayer","esri/geometry/Polygon","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"],function (dom, on, Point, TextSymbol, PictureMarkerSymbol, SimpleMarkerSymbol, Color,Font, Extent,SimpleLineSymbol,SimpleFillSymbol, GraphicsLayer,Polygon,Geometry,SpatialReference){
			//aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings),new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL,new Color([153,102,204]), 1) ,new Color([255,255,255,1]))));		        	 	       
			//aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings),new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL,new Color([153,102,204]), 1) ,new Color(vcolor33)),{"name": asatxt,"id":asatxt,"atxt":asatxt}));		        	 	       
			
			//asatxt= asatxt.substring(0, asatxt.length - 4);
			/*
	        var picBaseUrl = "../common/images/navigation/21.png";
	        var symb1 = new PictureMarkerSymbol(picBaseUrl + "21.png", 32, 32).setOffset(0, 15);
	        var symb2 = new PictureMarkerSymbol(picBaseUrl + "22.png", 64, 64).setOffset(0, 15);
	        var symb3 = new PictureMarkerSymbol(picBaseUrl + "23.png", 72, 72).setOffset(0, 15);
	        */	
			/*
			 * 
			 * 注释圆饼方式
	        var aweidth = 50+3*parseInt(aslevel);
			aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(), 
				    new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, aweidth,
						new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
								new Color(255,255,255), 1), 
								new Color(255,255,255)),{"atxt":asatxt2}));
	 	
			aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(), 
				    new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, aweidth,
						new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
								new Color(255,0,0), 1), 
								new Color(vcolor33)),{"atxt":asatxt2}));
			
			*
			*/
			/*
			aly.add(new esri.Graphic(
					new Polygon(Polygons.geometry.rings).getExtent().getCenter(), 
					    new PictureMarkerSymbol("../common/images/21.png", 80, 80),
					       {"atxt": Polygons.attributes["NAME"] + asatxt}));
					       */
			//aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(),
				  //   new TextSymbol(" "+ Math.ceil(asatxt/100)/100 ).setOffset(0,-8).setColor(new Color([255,240,255,1])).setAlign(Font.ALIGN_START).setFont(new Font("10pt").setWeight(Font.WEIGHT_BOLD))));	
	
			aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings),
					new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
					new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
					new Color([250,250,250]), 1) ,
					new Color(vcolor33)),{"atxt":asatxt2}  ));    	     	  
			extMap.setExtent(new Extent(vxmin,vymin,vxmax,vymax,cmap_SpatialReference));
	//		aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(),
	//			     new TextSymbol(" "+  asatxt ).setOffset(0,-8).setColor(new Color([255,255,255,1])).setAlign(Font.ALIGN_START).setFont(new Font("12pt").setWeight(Font.WEIGHT_BOLD))));	
		});
	}
	
	
	
	function results332(aly,asatxt,aslevel,asatxt2){
		require(["dojo/dom", "dojo/on","esri/geometry/Point","esri/symbols/TextSymbol","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleMarkerSymbol","esri/Color","esri/symbols/Font","esri/geometry/Extent", "esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/layers/GraphicsLayer","esri/geometry/Polygon","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"],function (dom, on, Point, TextSymbol, PictureMarkerSymbol, SimpleMarkerSymbol, Color,Font, Extent,SimpleLineSymbol,SimpleFillSymbol, GraphicsLayer,Polygon,Geometry,SpatialReference){
			//aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings),new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL,new Color([153,102,204]), 1) ,new Color([255,255,255,1]))));		        	 	       
			//aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings),new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL,new Color([153,102,204]), 1) ,new Color(vcolor33)),{"name": asatxt,"id":asatxt,"atxt":asatxt}));		        	 	       
			
			//asatxt= asatxt.substring(0, asatxt.length - 4);
			/*
	        var picBaseUrl = "../common/images/navigation/21.png";
	        var symb1 = new PictureMarkerSymbol(picBaseUrl + "21.png", 32, 32).setOffset(0, 15);
	        var symb2 = new PictureMarkerSymbol(picBaseUrl + "22.png", 64, 64).setOffset(0, 15);
	        var symb3 = new PictureMarkerSymbol(picBaseUrl + "23.png", 72, 72).setOffset(0, 15);
	        */	
			/*
			 * 
			 * 注释圆饼方式
	        var aweidth = 50+3*parseInt(aslevel);
			aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(), 
				    new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, aweidth,
						new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
								new Color(255,255,255), 1), 
								new Color(255,255,255)),{"atxt":asatxt2}));
	 	
			aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(), 
				    new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, aweidth,
						new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
								new Color(255,0,0), 1), 
								new Color(vcolor33)),{"atxt":asatxt2}));
			
			*
			*/
			/*
			aly.add(new esri.Graphic(
					new Polygon(Polygons.geometry.rings).getExtent().getCenter(), 
					    new PictureMarkerSymbol("../common/images/21.png", 80, 80),
					       {"atxt": Polygons.attributes["NAME"] + asatxt}));
					       */
			//aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(),
				  //   new TextSymbol(" "+ Math.ceil(asatxt/100)/100 ).setOffset(0,-8).setColor(new Color([255,240,255,1])).setAlign(Font.ALIGN_START).setFont(new Font("10pt").setWeight(Font.WEIGHT_BOLD))));	
	
			aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings),
					new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
					new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
					new Color([250,250,250]), 1) ,
					new Color(vcolor33)),{"atxt":asatxt2}  ));    	     	  
			extMap.setExtent(new Extent(vxmin,vymin,vxmax,vymax,cmap_SpatialReference));
	//		aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(),
	//			     new TextSymbol(" "+  asatxt ).setOffset(0,-8).setColor(new Color([255,255,255,1])).setAlign(Font.ALIGN_START).setFont(new Font("12pt").setWeight(Font.WEIGHT_BOLD))));	
		});
	}
		
	function results34(aly,asatxt,aslevel,asatxt2){
		require(["dojo/dom", "dojo/on","esri/geometry/Point","esri/symbols/TextSymbol","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleMarkerSymbol","esri/Color","esri/symbols/Font","esri/geometry/Extent", "esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/layers/GraphicsLayer","esri/geometry/Polygon","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"],function (dom, on, Point, TextSymbol, PictureMarkerSymbol, SimpleMarkerSymbol, Color,Font, Extent,SimpleLineSymbol,SimpleFillSymbol, GraphicsLayer,Polygon,Geometry,SpatialReference){
			//aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings),new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL,new Color([153,102,204]), 1) ,new Color([255,255,255,1]))));		        	 	       
			//aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings),new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL,new Color([153,102,204]), 1) ,new Color(vcolor33)),{"name": asatxt,"id":asatxt,"atxt":asatxt}));		        	 	       
	        //var aweidth = 40+3*parseInt(aslevel);
			var aweidth = 50;
			
			aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(), 
				    new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, aweidth,
						new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
								new Color(255,255,255), 1), 
								new Color(255,255,255)),{"atxt":asatxt2}));
	 	
			aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(), 
				    new SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, aweidth,
						new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
								new Color(vcolor33), 1), 
								new Color(vcolor33)),{"atxt":asatxt2}));
								
			aly.add(new esri.Graphic(new Polygon(Polygons.geometry.rings).getExtent().getCenter(),
				     new TextSymbol(" "+  asatxt ).setOffset(0,-8).setColor(new Color([255,255,255,1])).setAlign(Font.ALIGN_START).setFont(new Font("12pt").setWeight(Font.WEIGHT_BOLD))));	
		});
	}
	
	
	function results35(aline,aly,lcolor,ajson){

	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){    	  
		    aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference), new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(lcolor), ajson.width)));   	 
	  });
	}
	
	
	function results36(aline,aly,lcolor,ajson){

	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){    	  
		    aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference), new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(lcolor), ajson.width)));   	 
	  });
	}
	
	function results38(aline,aly,anu,atxt,akey,acode) {	
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){    	  
	        switch(anu)
	    	{
	    	  case"1":
	    	    aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor331_1), 8)
	    	    ,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}));   	 
		        break;
		      case"2":
		      	aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor331_2), 8)
		      	,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}));   	 
		        break;
		      case"3":
		      	aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor331_3), 8)
		      	,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}));   	 
		        break;
		      case"4":
		      	aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor331_4), 8)
		      	,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}));   	 
		        break;
		      case"5":
		      	aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor331_5), 8)
		      	,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}));   	 
		        break;
	    	  default:
	    	    aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor331_6), 8)
	    	    ,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}));   	 
	    	}            	
	  });
	}
	
	function results39(aly,atxt){
	      require(["dojo/dom", "dojo/on","esri/Color","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Color,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){
	            aly.add(new esri.Graphic(new Polyline(Polygons.geometry.paths), new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor34), linesize32) ,{"name": atxt}));   	 
	  });
	}
	
	function results40(aline,aly,anu,atxt,akey,acode){	
		 
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){    	  
	        switch(anu)
	    	{
	    	  case"N":
	    	    aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor26), 8)
	    	    //,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}
	    	    ));   	 
		        break;
		      case"P":
		      	aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor26), 8)
		      	//,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}
		      	));   	 
		        break;
		      case"O":
		      	aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor26), 8)
		      	//,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}
		      	));   	 
		        break;
		      case"4":
		      	aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor26), 8)
		      	//,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}
		      	));   	 
		        break;
		      case"R":
		      	aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),
		      			new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor26), 8)
		      	//,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}
		      	));   	 
		        break;
	    	  default:
	    	    aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor26), 8)
	    	    //,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}
	    	    ));   	 
	    	}            	
	  });
	}
	
	function results41(aly,aDocBridge){
		//
	}
	
	function results42(aline,aly,anu,atxt,akey,acode){	
		 
	    require(["dojo/dom", "dojo/on","esri/Color","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/layers/GraphicsLayer", "esri/geometry/Polyline","esri/geometry/Geometry","esri/SpatialReference", "dojo/domReady!"], function (dom, on, Color,Point,SimpleMarkerSymbol,SimpleLineSymbol, GraphicsLayer,Polyline,Geometry,SpatialReference){    	  
	        switch(anu)
	    	{
	    	  case"N":
	    	    aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor331_1), 8)
	    	    //,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}
	    	    ));   	 
		        break;
		      case"P":
		      	aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor331_2), 8)
		      	//,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}
		      	));   	 
		        break;
		      case"O":
		      	aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor331_3), 8)
		      	//,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}
		      	));   	 
		        break;
		      case"4":
		      	aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor331_4), 8)
		      	//,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}
		      	));   	 
		        break;
		      case"R":
		      	aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),
		      			new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor331_5), 8)
		      	//,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}
		      	));   	 
		        break;
	    	  default:
	    	    aly.add(new esri.Graphic(new Polyline(aline,cmap_SpatialReference),	new SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new Color(vcolor331_6), 8)
	    	    //,{"LXBM":atxt.roadCode,"POS":atxt.startStake,"txt":akey+" : "+acode}
	    	    ));   	 
	    	}            	
	  });
	}
	
	function inienvt(aurl){	    
		     require(["esri/map", "dojo/dom","esri/units","esri/geometry/Polyline", "esri/geometry/Point", "esri/InfoTemplate","esri/geometry/ScreenPoint","dojo/ready", "esri/layers/FeatureLayer","extend/ExtArcMap","esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/renderers/SimpleRenderer","esri/Color","esri/dijit/Measurement","esri/config","esri/layers/ArcGISTiledMapServiceLayer", "esri/layers/ArcGISDynamicMapServiceLayer","dijit/registry", "esri/layers/GraphicsLayer",  "esri/layers/FeatureLayer", "esri/dijit/PopupTemplate", "esri/dijit/Legend","esri/graphic","esri/SpatialReference", "esri/geometry/Extent"], function(Map,dom,Units,Polyline, Point,InfoTemplate,ScreenPoint,ready,FeatureLayer,ExtArcMap,SimpleFillSymbol,SimpleLineSymbol,SimpleRenderer,Color,Measurement,esriConfig,ArcGISTiledMapServiceLayer, ArcGISDynamicMapServiceLayer, registry,GraphicsLayer, FeatureLayer, PopupTemplate, Legend,graphic,SpatialReference, Extent){ready(function(){cmap_SpatialReference = new SpatialReference({wkid:4326});   			  
		    		extMap=iniamap(extMap);	    		 
				    iniaqry();
				   // loadChartBarOnMap(extMap,100,100);
				    /*   layer17 = new ArcGISDynamicMapServiceLayer(gettxt(url24,3));
				    extMap.addLayer(layer17);
				    alert("");			   
				    layer17.on("load", function (e) {
			            dynamicLayerInfos = e.target.createDynamicLayerInfosFromLayerInfos();
			            arrayUtils.forEach(dynamicLayerInfos, function (info) {
			               var i = {
			                  id: info.lxbm,
			                  name: info.lcz 
			               };		            
			            });
			            alert( dynamicLayerInfos.length);		            
			         });
				    for(var i=1;i<16;i++){
				    	if((i==4)||(i==8)||(i==12)){			    		
				    	}
				    	else{			    				    		 		    		
				    	}
				    }
				    */
				    layer17=inialy2(layer17,"atxt");			    
				    layer17_3=inialy5(layer17_3,"atxt");			    
				    layer11 = new GraphicsLayer();
					extMap.addLayer(layer11);
	                layer12=inialy(layer12);
	                layer13=inialy(layer13);
	                layer14=inialy(layer14);
	                layer14.on("mouse-move",function(event){ draw_aRoadTxt(event.graphic.attributes['id'],event.graphic.attributes['name'],event.graphic.attributes['qdzh'],event.graphic.attributes['zdzh'],event.graphic.attributes['lc'],event.graphic.attributes['a1'],event.graphic.attributes['a2'],event.graphic.attributes['a3'],event.graphic.attributes['a4'],event.graphic.attributes['a5']);});
	                layer14.on("click",function(event){draw_aRoadclick(event.graphic.attributes['id'],event.graphic.attributes['name'],event.graphic.attributes['qdzh'],event.graphic.attributes['zdzh'],event.graphic.attributes['lc'],event.graphic.attributes['nyear']);});
	                layer16=inialy(layer16);	                
	                layer15_1= new GraphicsLayer();
	                extMap.addLayer(layer15_1);                
	                layer15_1.on("click", function(evt){if(Flg_XD==1){Flg_XD=0;}else{Flg_XD=1;}});                
	                layer15_1.on("mouse-move", function(evt){extMap.infoWindow.resize(139, 110);extMap.infoWindow.setContent(vOut28_1+ evt.graphic.attributes['id'] + "<br>"    		            +vOut28_2+evt.graphic.attributes['name']);extMap.infoWindow.show(evt.graphic.geometry);});                
	                layer15_1.on("mouse-out", function(evt){extMap.infoWindow.hide();});	
	                layer15_2=inialy(layer15_2);
	                layer15_2.on("mouse-move",function(event){setApoint(event.graphic.geometry); draw_aBrightTxt(event.graphic.attributes['id'],event.graphic.attributes['name'],event.graphic.attributes['roadcode'],event.graphic.attributes['roadpos'],event.graphic.attributes['lc']);});
	                layer15_2.on("click",function(event){draw_aBrightclick(event.graphic.attributes['id'],event.graphic.attributes['name'],event.graphic.attributes['roadcode'],event.graphic.attributes['roadpos'],event.graphic.attributes['lc'],event.graphic.attributes['nyear']);});
                    //layer15_2.on("mouse-out",function(event){/*showmessage("");*/draw_aText("");});
	                
	                layer15_3=inialy(layer15_3);
	                layer15_3.on("mouse-move",function(event){setApoint(event.graphic.geometry);draw_aTunnelTxt(event.graphic.attributes['id'],event.graphic.attributes['name'],event.graphic.attributes['roadcode'],event.graphic.attributes['roadpos'],event.graphic.attributes['lc']);});
	                layer15_3.on("click",function(event){draw_aTunnelclick(event.graphic.attributes['id'],event.graphic.attributes['name'],event.graphic.attributes['roadcode'],event.graphic.attributes['roadpos'],event.graphic.attributes['lc'],event.graphic.attributes['nyear']);});
	//				,{"name": atxt["tunnelName"],"id":atxt["tunnelCode"],"roadcode":atxt["roadCode"],"roadpos":atxt["centerStake"],"lc":atxt["tunnelLength"],"nyear":atxt["repYear"]})); 
	
	                layer18=inialy(layer18);
					layer18.on("click",function(even){draw_aMQIclick(event.graphic.attributes['LXBM'],event.graphic.attributes['POS']);});
	                layer18.on("mouse-move",function(event){draw_aMQITxt(event.graphic.attributes['LXBM'],event.graphic.attributes['POS'],event.graphic.attributes['txt']);});
	                layer18.on("mouse-out",function(event){/*showmessage("");*/draw_aText("");});
	                
	                layer15= new GraphicsLayer();
	                extMap.addLayer(layer15);
	                
	                layer19= new GraphicsLayer();
	                extMap.addLayer(layer19);                
	                 /*
	                layer15.on("click", function(evt){if(Flg_XD==1){Flg_XD=0;}else{Flg_XD=1;}});                
	                
	                layer15.on("mouse-move", function(evt){
	 		    	   extMap.infoWindow.resize(139, 110);
			    	   extMap.infoWindow.setContent("路线编码："+ evt.graphic.attributes['LXBM'] + "<br>"    		            
			            +"起点桩号："+evt.graphic.attributes['QDZH'] + "<br>" 
			            //+"PCI："+evt.graphic.attributes['PCI'] + "<br>"
			            );
	        	       extMap.infoWindow.show(evt.graphic.geometry);
	                });                
	                layer15.on("mouse-out", function(evt){
	                	//extMap.infoWindow.hide();
	                });
                     */                 
	                layer15_4= new GraphicsLayer();
	                extMap.addLayer(layer15_4);                
	                //layer15_4.on("click", function(evt){if(Flg_XD==1){Flg_XD=0;}else{Flg_XD=1;}});                
	                layer24=inialy4(layer24);                	                
					function inialy(alyy){
						alyy = new GraphicsLayer();
						extMap.addLayer(alyy);
	//					alyy.on("click",function(even){M_clck(even.graphic.attributes['name'] + "--" +even.graphic.attributes['id']);});
						//alyy.on("click",function(even){M_clck("--");});
						alyy.on("mouse-move",function(event){/*showmessage(event.graphic.attributes['id']);*/draw_aText(event.graphic.attributes['name']);});
						alyy.on("mouse-out",function(event){/*showmessage("");*/draw_aText("");});
						return(alyy);
					}
					
					function inialy3(alyy){
						alyy = new GraphicsLayer();
						extMap.addLayer(alyy,1);
						//alyy.on("mouse-move",function(event){/*showmessage(event.graphic.attributes['id']);*/draw_aText(event.graphic.attributes['name']);});
						//alyy.on("mouse-out",function(event){/*showmessage("");*/draw_aText("");});
						return(alyy);
					}
					
					function inialy2(alyy,antname){
						alyy = new GraphicsLayer();
						extMap.addLayer(alyy);
						alyy.on("click",function(even){alyy.clear(); draw_aText("");DelPieBar("pienodeTest");flg_pienodeTest=0;});
						alyy.on("mouse-move",function(event){draw_aText(event.graphic.attributes[antname]);});
						alyy.on("mouse-out",function(event){draw_aText("");});
						return(alyy);
					}
					
	                function inialy4(alyy){
	                	alyy= new GraphicsLayer();
	                    extMap.addLayer(alyy);
	                    alyy.on("mouse-over",function(event){/*showmessage(event.graphic.attributes['id']);*/draw_aText_ov(event.graphic.attributes['name']);});                
	                    alyy.on("mouse-move",function(event){/*showmessage(event.graphic.attributes['id']);*/draw_aText_ov(event.graphic.attributes['name']);});                
	                    alyy.on("mouse-out", function(evt){docclearmap(alyy);draw_aText_ov("");});
	                    alyy.on("click",function(even){M_clck( even.graphic.attributes["name"]);docclearmap(alyy);draw_aText_ov("");}); 
	                    return(alyy);             	
	                }
					
					function inialy5(alyy,antname){
						alyy = new GraphicsLayer();
						extMap.addLayer(alyy);
						alyy.on("click",function(even){alyy.clear();draw_aText173("");DelPieBar("pienodeTest");flg_pienodeTest=0;});
						alyy.on("mouse-move",function(event){draw_aText173(event.graphic.attributes[antname]);});
						alyy.on("mouse-out",function(event){draw_aText("");});
						return(alyy);
					}
	                
					function inialy9(alyy,aurl999){
						alyy = new ArcGISDynamicMapServiceLayer(gettxt(aurl999,3));
						extMap.addLayer(alyy);
						alyy.visible=false; 
						return(alyy);
					}					
					function iniamap(amap){
						amap = new Map(Div_Gis,{logo : false ,slider:false});
						layer901 = new ArcGISTiledMapServiceLayer(gettxt(aurl,3));
						amap.addLayer(layer901);
						layer902 = new ArcGISDynamicMapServiceLayer(gettxt(url23,3));
						amap.addLayer(layer902);
						layer903 = new ArcGISTiledMapServiceLayer(gettxt(url18,3));
						amap.addLayer(layer903);						
						amap.setExtent(new Extent(vxmin,vymin,vxmax,vymax,cmap_SpatialReference));					
						amap.on("dbl-click", function(evt){extArcMapcilk("1");});					
						amap.on("click", function(evt){extArcMapcilk("2");});					
						amap.on("mouse-move", function(evt){setApoint(extMap.toMap(new ScreenPoint(evt.x, evt.y)));});
						//amap.on("zoom-end", function(evt){if(amap.getZoom()>11){amap.setZoom(11);}});							
				        measurement = new Measurement({map:amap,defaultAreaUnit:Units.SQUARE_KILOMETERS,defaultLengthUnit: Units.KILOMETERS});
				        measurement.startup();
					    measurement.on("measure", function(evt){draw_aTextMsur(MqiMathceil(evt.values) + docGetUnit(aTool));});	        
					   // $("input[name='layer']").each(function(index,value){if(index==3||index==4||index==5||index==6||index==7)this.disabled= true;});				        
						return(amap);
					}
		 		    function addRoad(atxt){			 		    	
		 		    	var flayer2 = new FeatureLayer(gettxt(url23+"/"+atxt,3)
				    		,{outFields: ["*"] ,id:"fla4666er"+atxt}
						    		);		    
				    	flayer2.on("click",function(event){	   				    	
		   				    	});		    
				    	flayer2.on("mouse-over",function(event){
				    		 
				    		docclearmap(alyy2);
				    		vRoadCode0906 =event.graphic.attributes['LXBM'];
				    		docmapqry39(event.graphic.attributes['LXBM'],url7,alyy2,"");
				    		draw_aText_ov(event.graphic.attributes['LXBM']);
		   				    });	
				    	flayer2.on("mouse-out",function(event){			    		
				    		docclearmap(alyy2); 
				    		draw_aText_ov("");
		   				    });	
				    	flayer2.setRenderer(new SimpleRenderer(new SimpleLineSymbol().setWidth(4).setColor(new Color([255,0,0,0]))));    			    	
				    	extMap.addLayer(flayer2);	
				    	
				    }
					layer9001 =  inialy9(layer9001,url9001);
					layer9002 =  inialy9(layer9002,url9002);
					layer9003 =  inialy9(layer9003,url9003);
					layer9004 =  inialy9(layer9004,url9004);
					layer9005 =  inialy9(layer9005,url9005);
					layer9006 =  inialy9(layer9006,url9006);
					layer9007 =  inialy9(layer9007,url9007);
					layer9008 =  inialy9(layer9008,url9008);
					layer9009 =  inialy9(layer9009,url9009);
					layer9010 =  inialy9(layer9010,url9010);
		         });			
		  	});	
	}
	
	function iniaqry(){
	    require(["dojo/ready","esri/tasks/query", "dijit/registry", "esri/SpatialReference"],function(ready,Query,registry,SpatialReference){ready(function(){			  
		query = new Query();
		query.returnGeometry = true;
		query.outSpatialReference = cmap_SpatialReference;
	      });			
	  	});		
	}
	
	function iniidentifyTask(amap98,aurl98){
	    require(["esri/map","esri/InfoTemplate","esri/layers/ArcGISDynamicMapServiceLayer","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/tasks/IdentifyTask","esri/tasks/IdentifyParameters","esri/dijit/Popup","dojo/_base/array","esri/Color","dojo/dom-construct","dojo/domReady!"], function (Map, InfoTemplate, ArcGISDynamicMapServiceLayer, SimpleFillSymbol,SimpleLineSymbol, IdentifyTask, IdentifyParameters, Popup,arrayUtils, Color, domConstruct){    	
	        identifyTask = new IdentifyTask(aurl98);
	        identifyParams = new IdentifyParameters();
	        identifyParams.tolerance = 3;
	        identifyParams.returnGeometry = true;
	        identifyParams.layerIds = [0, 2];
	        identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_ALL;
	        identifyParams.width = amap98.width;
	        identifyParams.height = amap98.height; 
	    });		
	}
	
	function draw_aRoadTxt(aid,aname,aqdzh,azdzh,alc,alc1,alc2,alc3,alc4,alc5){
		function AddUnit(value){
			return value + "公里"
		}
		var abstr="";
		var str1="";
		var str2="";
		var str3="";
		var str4="";
		var str5="";
		if((WZY_ID=="公路")&&(WZY_ID2=="demand")){	
			typeof(alc)=="undefined"?alc:abstr="<br/>" + "&nbsp;&nbsp;"+"养护里程："+ AddUnit(alc) ;
			typeof(alc1)=="undefined"?alc1:str1="<br/>" + "&nbsp;&nbsp;"+"日常养护："+ AddUnit(alc1);
			typeof(alc2)=="undefined"?alc2:str2="<br/>" + "&nbsp;&nbsp;"+"中修里程："+ AddUnit(alc2);
			typeof(alc3)=="undefined"?alc3:str3="<br/>" + "&nbsp;&nbsp;"+"预防养护："+ AddUnit(alc3);
			typeof(alc4)=="undefined"?alc4:str4="<br/>" + "&nbsp;&nbsp;"+"大修里程："+ AddUnit(alc4);
			draw_aText99("<b>路线编码：" + aid + "  " + aname +"</b>"
					+"<br/>" + "&nbsp;&nbsp;"+"起点桩号："+returnFloat3(aqdzh.toString())//aqdzh.toString().replace(".", "+") 
					+"<br/>" + "&nbsp;&nbsp;"+"终点桩号："+returnFloat3(azdzh.toString())//azdzh.toString().replace(".", "+") 
					+abstr+str1+str2+str3+str4 
					);
			
		}else
			if((WZY_ID=="公路")&&(WZY_ID2=="engineer")){	
				typeof(alc)=="undefined"?alc:abstr="<br/>" + "&nbsp;&nbsp;"+"养护里程："+ AddUnit(alc);
				typeof(alc1)=="undefined"?alc1:(alc1=="0.000"?alc1:str1="<br/>" + "&nbsp;&nbsp;"+"大修里程："+ AddUnit(alc1));
				typeof(alc2)=="undefined"?alc2:(alc2=="0.000"?alc2:str2="<br/>" + "&nbsp;&nbsp;"+"中修里程："+ AddUnit(alc2));
				typeof(alc3)=="undefined"?alc3:(alc3=="0.000"?alc3:str3="<br/>" + "&nbsp;&nbsp;"+"预防养护："+ AddUnit(alc3));
				typeof(alc4)=="undefined"?alc4:(alc4=="0.000"?alc4:str4="<br/>" + "&nbsp;&nbsp;"+"改建里程："+ AddUnit(alc4));
				typeof(alc5)=="undefined"?alc5:(alc5=="0.000"?alc5:str5="<br/>" + "&nbsp;&nbsp;"+"小修里程："+ AddUnit(alc5));
				draw_aText99("<b>路线编码：" + aid + "  " + aname +"</b>"
						+"<br/>" + "&nbsp;&nbsp;"+"起点桩号："+returnFloat3(aqdzh.toString())//aqdzh.toString().replace(".", "+") 
						+"<br/>" + "&nbsp;&nbsp;"+"终点桩号："+returnFloat3(azdzh.toString())//azdzh.toString().replace(".", "+") 
						+abstr+str1+str2+str3+str4+str5 
						);
				
			}else
		{
				
				draw_aText99("<b>路线编码：" + aid + "  " + aname +"</b>"
					+"<br/>" + "&nbsp;&nbsp;"+"起点桩号："+returnFloat3(aqdzh.toString())//aqdzh.toString().replace(".", "+") 
					+"<br/>" + "&nbsp;&nbsp;"+"终点桩号："+returnFloat3(azdzh.toString())//azdzh.toString().replace(".", "+") 
				+"<br/>" + "&nbsp;&nbsp;"+"路线长度："+ AddUnit(alc));
		}
	}
	
	function draw_aBrightTxt(aid,aname,aroad,aroadpos,alc){
		if(alc==""){
			draw_aText99("<b>桥梁编码：" + aid  +"</b>"
					+"<br/>" + "&nbsp;&nbsp;"+"桥梁名称："+ aname
					+"<br/>" + "&nbsp;&nbsp;"+"路线编码："+aroad
					+"<br/>" + "&nbsp;&nbsp;"+"中心桩号："+aroadpos);
			
		}else
			{
			draw_aText99("<b>桥梁编码：" + aid  +"</b>"
				+"<br/>" + "&nbsp;&nbsp;"+"桥梁名称："+ aname
				+"<br/>" + "&nbsp;&nbsp;"+"路线编码："+aroad
				+"<br/>" + "&nbsp;&nbsp;"+"中心桩号："+aroadpos
				+"<br/>" + "&nbsp;&nbsp;"+"桥梁长度："+ alc);
			}
	 
	}
	
	function draw_aTunnelTxt(aid,aname,aroad,aroadpos,alc){
		draw_aText99("<b>隧道编码：" + aid  +"</b>"
				+"<br/>"  + "&nbsp;&nbsp;"+"隧道名称："+ aname
				+"<br/>" + "&nbsp;&nbsp;"+"路线编码："+aroad
				+"<br/>" + "&nbsp;&nbsp;"+"中心桩号："+aroadpos
				+"<br/>" + "&nbsp;&nbsp;"+"隧道长度："+ alc);
	}
	
	function draw_aMQITxt(aid,aname,aroad,aroadpos,alc){	
		draw_aText99("<b>路线编码：" + aid  +"</b>"
				+"<br/>"  + "&nbsp;&nbsp;"+"桩号："+ returnFloat3(aname)
				+"<br/>"  + "&nbsp;&nbsp;" + aroad.toUpperCase()
				//+"<br/>" + "&nbsp;&nbsp;"+"路线编码："+aroad  
				//+"<br/>" + "&nbsp;&nbsp;"+"中心桩号："+aroadpos
				//+"<br/>" + "&nbsp;&nbsp;"+"隧道长度："+ alc
				);
	}
	
	
	function draw_aText99(atname){	
	    require(["dojo/ready","dojo/dom-construct", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/dijit/Popup","esri/InfoWindowBase","esri/InfoTemplate", "esri/symbols/TextSymbol","esri/Color","esri/symbols/Font", "dijit/registry", "esri/layers/GraphicsLayer","esri/graphic"],function(ready,domConstruct,SimpleFillSymbol,SimpleLineSymbol,Popup,InfoWindowBase,InfoTemplate,TextSymbol,Color, Font,registry,GraphicsLayer,graphic){ready(function(){   			  
		layer16.clear();
		extMap.infoWindow.hide();	
		if(atname!=""){
		   // layer16.add(new esri.Graphic(Apoint,new TextSymbol(" "+atname).setOffset(-10,20).setColor(new Color([0,0,100,1])).setAlign(Font.ALIGN_START).setFont(new Font("12pt").setWeight(Font.WEIGHT_BOLD))));	
	        /*
			$(".esriPopup .titlePane").css({'background-color':'rgba(128,128,128,0.5)'});
			$(".esriPopup .contentPane").css({'background-color':'rgba(255,255,255,0.5)','color':'#666666'});
			$(".esriPopup .actionsPane").css({'background-color':'rgba(128,128,128,0.5)'});	 
			$(".esriPopup .titleButton.maximize").css({'display':'none'});	 
			$(".esriPopup .titleButton.close").css({'display':'none'});	 
			$(".esriPopup .esriPopupWrapper").css({'box-shadow':'none'});	
			$(".infowindow .window .top .right .user .titlebar .title").css({'font-family':'Arial,Helvetica,sans-serif','font-weight':'bold','font-size':'14pt'});	
			$(".infowindow .window .top .right .user.content").css({'font-style':'italic','font-weight':'bold','font-size':'24pt'});		
			$(".esriPopup .contentPane").css({'font-style':'Arial','font-weight':'bold','font-size':'12pt','font-color':'rgba(255,255,255)'});
			*/	
		      //extMap.infoWindow.setContent("<b>1111111</b><br/><b>11222211</b><br/><b>131</b><br/><b>1441</b>");
			extMap.infoWindow.setContent("&nbsp;&nbsp;"+atname);
			extMap.infoWindow.resize((atname.indexOf("<br")*17 >17 ? atname.indexOf("<br")*9 :130),180);
		    extMap.infoWindow.show(Apoint);	       	      
		   }
	      });			
	  	});	
	}
	
	
	function draw_aText_ov(atname){	
	    require(["dojo/ready","dojo/dom-construct", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/dijit/Popup","esri/InfoWindowBase","esri/InfoTemplate", "esri/symbols/TextSymbol","esri/Color","esri/symbols/Font", "dijit/registry", "esri/layers/GraphicsLayer","esri/graphic"],function(ready,domConstruct,SimpleFillSymbol,SimpleLineSymbol,Popup,InfoWindowBase,InfoTemplate,TextSymbol,Color, Font,registry,GraphicsLayer,graphic){ready(function(){   			  
		layer16.clear();
		extMap.infoWindow.hide();
		if(atname!=""){
			extMap.infoWindow.setContent("&nbsp;&nbsp;"+atname);
			extMap.infoWindow.resize(80,180);
		    extMap.infoWindow.show(Apoint);	       	      
		   }
	      });			
	  	});	
	}
	
	function draw_aTextMsur(atname){	
	    require(["dojo/ready","dojo/dom-construct", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/dijit/Popup","esri/InfoWindowBase","esri/InfoTemplate", "esri/symbols/TextSymbol","esri/Color","esri/symbols/Font", "dijit/registry", "esri/layers/GraphicsLayer","esri/graphic"],function(ready,domConstruct,SimpleFillSymbol,SimpleLineSymbol,Popup,InfoWindowBase,InfoTemplate,TextSymbol,Color, Font,registry,GraphicsLayer,graphic){ready(function(){   			  
		layer16.clear();
		extMap.infoWindow.hide();	
		if(atname!=""){
		    layer16.add(new esri.Graphic(Apoint,new TextSymbol(" "+atname).setOffset(-10,20).setColor(new Color([0,0,100,1])).setAlign(Font.ALIGN_START).setFont(new Font("12pt").setWeight(Font.WEIGHT_BOLD))));	
		   }
	      });			
	  	});	
	}
	
	function draw_aText(atname){	
	    require(["dojo/ready","dojo/dom-construct", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/dijit/Popup","esri/InfoWindowBase","esri/InfoTemplate", "esri/symbols/TextSymbol","esri/Color","esri/symbols/Font", "dijit/registry", "esri/layers/GraphicsLayer","esri/graphic"],function(ready,domConstruct,SimpleFillSymbol,SimpleLineSymbol,Popup,InfoWindowBase,InfoTemplate,TextSymbol,Color, Font,registry,GraphicsLayer,graphic){ready(function(){   			  
		layer16.clear();
		extMap.infoWindow.hide();	
		if(atname!=""){
		   // layer16.add(new esri.Graphic(Apoint,new TextSymbol(" "+atname).setOffset(-10,20).setColor(new Color([0,0,100,1])).setAlign(Font.ALIGN_START).setFont(new Font("12pt").setWeight(Font.WEIGHT_BOLD))));	
	        /*
			$(".esriPopup .titlePane").css({'background-color':'rgba(128,128,128,0.5)'});
			$(".esriPopup .contentPane").css({'background-color':'rgba(255,255,255,0.5)','color':'#666666'});
			$(".esriPopup .actionsPane").css({'background-color':'rgba(128,128,128,0.5)'});	 
			$(".esriPopup .titleButton.maximize").css({'display':'none'});	 
			$(".esriPopup .titleButton.close").css({'display':'none'});	 
			$(".esriPopup .esriPopupWrapper").css({'box-shadow':'none'});	
			$(".infowindow .window .top .right .user .titlebar .title").css({'font-family':'Arial,Helvetica,sans-serif','font-weight':'bold','font-size':'14pt'});	
			$(".infowindow .window .top .right .user.content").css({'font-style':'italic','font-weight':'bold','font-size':'24pt'});		
			$(".esriPopup .contentPane").css({'font-style':'Arial','font-weight':'bold','font-size':'12pt','font-color':'rgba(255,255,255)'});
			*/	
		      //extMap.infoWindow.setContent("<b>1111111</b><br/><b>11222211</b><br/><b>131</b><br/><b>1441</b>");
			extMap.infoWindow.setContent("&nbsp;&nbsp;"+atname);
			extMap.infoWindow.resize((atname.indexOf("<")*17 >17 ? atname.indexOf("<")*15 :130),180);
			extMap.infoWindow.resize(130,180);
		    extMap.infoWindow.show(Apoint);	       	      
		   }
	      });			
	  	});	
	}
	function draw_aText173(atname){	
	    require(["dojo/ready","dojo/dom-construct", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/dijit/Popup","esri/InfoWindowBase","esri/InfoTemplate", "esri/symbols/TextSymbol","esri/Color","esri/symbols/Font", "dijit/registry", "esri/layers/GraphicsLayer","esri/graphic"],function(ready,domConstruct,SimpleFillSymbol,SimpleLineSymbol,Popup,InfoWindowBase,InfoTemplate,TextSymbol,Color, Font,registry,GraphicsLayer,graphic){ready(function(){   			  
		layer16.clear();
		extMap.infoWindow.hide();	
		if(atname!=""){
		   // layer16.add(new esri.Graphic(Apoint,new TextSymbol(" "+atname).setOffset(-10,20).setColor(new Color([0,0,100,1])).setAlign(Font.ALIGN_START).setFont(new Font("12pt").setWeight(Font.WEIGHT_BOLD))));	
	        /* 
			$(".esriPopup .titlePane").css({'background-color':'rgba(128,128,128,0.8)'});
			$(".esriPopup .contentPane").css({'background-color':'rgba(255,255,255,0.8)','color':'#666666'});
			$(".esriPopup .actionsPane").css({'background-color':'rgba(128,128,128,0.8)'});	 
			$(".esriPopup .titleButton.maximize").css({'display':'none'});	 
			$(".esriPopup .titleButton.close").css({'display':'none'});	 
			$(".esriPopup .esriPopupWrapper").css({'box-shadow':'none'});	
			$(".infowindow .window .top .right .user .titlebar .title").css({'font-family':'Arial,Helvetica,sans-serif','font-weight':'bold','font-size':'10pt'});	
			$(".infowindow .window .top .right .user.content").css({'font-style':'italic','font-weight':'bold','font-size':'10pt'});		
			$(".esriPopup .contentPane").css({'font-style':'Arial','font-weight':'bold','font-size':'10pt','font-color':'rgba(255,255,255)'});
			*/
		      //extMap.infoWindow.setContent("<b>1111111</b><br/><b>11222211</b><br/><b>131</b><br/><b>1441</b>");
			extMap.infoWindow.setContent("&nbsp;&nbsp;"+atname);
			extMap.infoWindow.resize((atname.indexOf("<")*17 >17 ? atname.indexOf("<")*15 :130),180);
			extMap.infoWindow.resize(180,180);
		    extMap.infoWindow.show(Apoint);	       	      
		   }
	      });			
	  	});	
	}

	
	function setvextent(amap,vextent){
		amap.setExtent(vextent);
	}
	
	function gettxt(atext,anub){
		switch(anub)
		{ case 1:		    
			return("NAME like '%" + atext + "%'");		    
			break;
	      case 2:
	    	return("LXBM = '" + atext + "'");
	        break;
	      case 3:
	        return(atext + "?token=" + cmap_token);
	        break;
	      case 4:
	        return(vOut28 + " ='" + atext + "'");
	        break;
	      case 5:
	        return(vOut30 + " ='" + atext + "'");
	        break;
	      case 6:
		    	return("1=1");
		    	break;
	      case 7:
		    	return(vOut28 + " in (" + atext + ")");
		    	break;
		  default:
		    return("");
		}
	}
	
	function getdoctask27(at1,at2){
	   return("LXBM='" + at1 + "' and SXX=1 and FDSSS='" + at2 + "'");	
	}
	
	
	function doc_ClusterPoint(aJson){	
		require(["dojo/parser", "dojo/ready", "dojo/_base/array", "esri/Color", "dojo/dom-style", "dojo/query", "esri/map", "esri/request", "esri/graphic","esri/geometry/Extent", "esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleFillSymbol", "esri/symbols/PictureMarkerSymbol","esri/renderers/ClassBreaksRenderer", "esri/layers/GraphicsLayer", "esri/SpatialReference", "esri/dijit/PopupTemplate","esri/geometry/Point", "esri/geometry/webMercatorUtils","extras/ClusterLayer", "dijit/layout/BorderContainer","dijit/layout/ContentPane", "dojo/domReady!"], function(parser, ready, arrayUtils, Color, domStyle, query, Map,esriRequest, Graphic, Extent,SimpleMarkerSymbol, SimpleFillSymbol, PictureMarkerSymbol, ClassBreaksRenderer,GraphicsLayer, SpatialReference, PopupTemplate, Point,webMercatorUtils,ClusterLayer){ready(function() {        	 
	            parser.parse();
	//            var clusterLayer;
	            var popupOptions = {
	              "markerSymbol": new SimpleMarkerSymbol("circle", 20, null, new Color([0, 0, 0, 0.25])),
	              "marginLeft": "20",
	              "marginTop": "20"
	            };
	            function addClusters(resp) {
	                var photoInfo = {};
	              
	                photoInfo.data = arrayUtils.map(resp, function(p) {
	                var latlng = new  Point(parseFloat(p.lng), parseFloat(p.lat), cmap_SpatialReference);
	                var webMercator = webMercatorUtils.geographicToWebMercator(latlng);
	                var attributes = {
	                  "Caption_ID": p.ID,
	                  "Caption_NAME": p.NAME,
	                  "Caption_Link": p.link
	                };             
	                return {
	                  "x": webMercator.x,
	                  "y": webMercator.y,
	                  "attributes": attributes
	                };
	              });
	               var popupTemplate = new PopupTemplate({
	                "title": "数据展示",
	                "fieldInfos": [{
	                  "fieldName": "Caption_ID",
	                  "label":"标题一",
	                  visible: false
	                }, {
	                  "fieldName": "Caption_NAME",
	                  "label": "名称",
	                  visible: true
	                }, {
	                  "fieldName": "Caption_Link",
	                  "label": "链接",
	                  visible: false
	                }]
	              });
	               var spm11 =new SimpleMarkerSymbol("circle", 4, null, new Color("#f00"));
	               var symb1212 = new PictureMarkerSymbol( picstr29, 26, 26).setOffset(0, 15);
	               
	              clusterLayer = new ClusterLayer({
	                "data": photoInfo.data,
	                "distance": 30,
	                "id": "clusters",
	                "labelColor": "#fff",
	                "labelOffset": 10,
	                "resolution": extMap.extent.getWidth()/extMap.width,
	                "singleColor": "#888",
	                "singleTemplate": popupTemplate
	                ,"singleSymbol": symb1212
	              });
	              var defaultSym = new SimpleMarkerSymbol().setSize(4);
	              var renderer = new ClassBreaksRenderer(defaultSym, "clusterCount");
	
	              var picBaseUrl = "../common/images/navigation/";
	              var symb1 = new PictureMarkerSymbol(picBaseUrl + "21.png", 32, 32).setOffset(0, 15);
	              var symb2 = new PictureMarkerSymbol(picBaseUrl + "22.png", 64, 64).setOffset(0, 15);
	              var symb3 = new PictureMarkerSymbol(picBaseUrl + "23.png", 72, 72).setOffset(0, 15);
	              renderer.addBreak(0, 2, symb1);
	              renderer.addBreak(2, 200, symb2);
	              renderer.addBreak(200, 1001, symb3);
	              clusterLayer.setRenderer(renderer); 
	              
	              clusterLayer.on("mouse-move",function(event){ 
	            	 	            	 
	            	  if(typeof(event.graphic.attributes['Caption_NAME'])=="undefined"){
	            		  draw_aText("");}
	            	  else
	            	  {draw_aText(event.graphic.attributes['Caption_NAME']);}
	            	  
	            	  });
	              clusterLayer.on("mouse-out",function(event){draw_aText("");});
	               
	              extMap.addLayer(clusterLayer,0);
	               
	             // extMap.on("click", cleanUp);
	             // extMap.on("key-down", function(e) {
	                /*if (e.keyCode === 27) {
	                  cleanUp();
	                }*/
	              
	             // });
	            }
	            function cleanUp() {
	              extMap.infoWindow.hide();
	              clusterLayer.clearSingles();
	            }
	            function error(err) {
	              console.log("something failed: ", err);
	            }
	            window.showExtents = function() {	            	
	              var extents = extMap.getLayer("clusterExtents");
	              if (extents){extMap.removeLayer(extents);}
	              extents = new GraphicsLayer({ id: "clusterExtents"});
	              var sym = new SimpleFillSymbol().setColor(new Color([205, 193, 197, 0.5]));
	
	              arrayUtils.forEach(clusterLayer._clusters, 
	                   function(c, idx) { 
	            	   var e = c.attributes.extent;
	                   extents.add(new Graphic(new Extent(e[0], e[1], e[2], e[3], cmap_SpatialReference), sym));}, 
	                   this);
	              extMap.addLayer(extents, 0);
	            };
	            addClusters(aJson);	            
	        });
	      });    
	}
	
	function doc_ClusterPoint1(aJson){		
	    require(["dojo/parser", "dojo/ready", "dojo/_base/array", "esri/Color", "dojo/dom-style", "dojo/query","esri/map", "extend/ExtArcMap","esri/request", "esri/graphic","esri/geometry/Extent","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleFillSymbol", "esri/symbols/PictureMarkerSymbol","esri/renderers/ClassBreaksRenderer", "esri/layers/GraphicsLayer", "esri/SpatialReference", "esri/dijit/PopupTemplate","esri/geometry/Point", "esri/geometry/webMercatorUtils","extras/ClusterLayer", "dijit/layout/BorderContainer","dijit/layout/ContentPane", "dojo/domReady!"], function(parser, ready, arrayUtils, Color, domStyle, query, Map,ExtArcMap, esriRequest, Graphic, Extent,SimpleMarkerSymbol, SimpleFillSymbol, PictureMarkerSymbol, ClassBreaksRenderer,GraphicsLayer, SpatialReference, PopupTemplate, Point,webMercatorUtils,ClusterLayer) {ready(function() {
	            parser.parse();
	            var clusterLayer;
	            var popupOptions = {
	              "markerSymbol": new SimpleMarkerSymbol("circle", 20, null, new Color([0, 0, 0, 0.25])),
	              "marginLeft": "20",
	              "marginTop": "20"
	            };
	            function addClusters(resp) {
	              var photoInfo = {};           
	              photoInfo.data = arrayUtils.map(resp, function(p) {
	                var latlng = new  Point(parseFloat(p.lng), parseFloat(p.lat), cmap_SpatialReference);
	                var webMercator = webMercatorUtils.geographicToWebMercator(latlng);
	                var attributes = {
	                  "Caption_ID": p.ID,
	                  "Caption_NAME": p.NAME,
	                  "Caption_Link": p.link
	                };               
	                return {
	                  "x": webMercator.x,
	                  "y": webMercator.y,
	                  "attributes": attributes
	                };
	              });
	               var popupTemplate = new PopupTemplate({
	                "title": "数据展示",
	                "fieldInfos": [{
	                  "fieldName": "Caption_ID",
	                  "label":"标题一",
	                  visible: true
	                }, {
	                  "fieldName": "Caption_NAME",
	                  "label": "名称",
	                  visible: true
	                }, {
	                  "fieldName": "Caption_Link",
	                  "label": "链接",
	                  visible: false
	                }]
	              });
	              clusterLayer = new ClusterLayer({
	                "data": photoInfo.data,
	                "distance": 100,
	                "id": "clusters",
	                "labelColor": "#fff",
	                "labelOffset": 10,
	                "resolution": extMap.extent.getWidth()/extMap.width,
	                "singleColor": "#888"
	                ,"singleTemplate": popupTemplate
	              });
	              var defaultSym = new SimpleMarkerSymbol().setSize(4);
	              var renderer = new ClassBreaksRenderer(defaultSym, "clusterCount");
	
	              var picBaseUrl = "../common/images/navigation/";
	              var symb1 = new PictureMarkerSymbol(picBaseUrl + "21.png", 32, 32).setOffset(0, 15);
	              var symb2 = new PictureMarkerSymbol(picBaseUrl + "22.png", 64, 64).setOffset(0, 15);
	              var symb3 = new PictureMarkerSymbol(picBaseUrl + "23.png", 72, 72).setOffset(0, 15);
	              renderer.addBreak(0, 2, symb1);
	              renderer.addBreak(2, 200, symb2);
	              renderer.addBreak(200, 1001, symb3);
	              clusterLayer.setRenderer(renderer);              
	              extMap.addLayer(clusterLayer);
	              extMap.on("click", cleanUp);
	              extMap.on("key-down", function(e) {
	                if (e.keyCode === 27) {
	                  cleanUp();
	                }
	              });
	            }
	            function cleanUp() {
	            //  extMap.infoWindow.hide();
	            //  clusterLayer.clearSingles();
	            }
	            function error(err) {
	              console.log("something failed: ", err);
	            }
	            window.showExtents = function(){
	              var extents = extMap.getLayer("clusterExtents");
	              if (extents){extMap.removeLayer(extents);}
	              extents = new GraphicsLayer({ id: "clusterExtents" });
	              var sym = new SimpleFillSymbol().setColor(new Color([205, 193, 197, 0.5]));
	
	              arrayUtils.forEach(clusterLayer._clusters, 
	                   function(c, idx) { 
	            	   var e = c.attributes.extent;
	                   extents.add(new Graphic(new Extent(e[0], e[1], e[2], e[3], cmap_SpatialReference), sym));}, 
	                   this);
	              extMap.addLayer(extents, 0);
	            };
	            addClusters(jion_txt);
	        });
	      });    
	}
	
	function getPro(aCode){
		
		switch(parseInt(aCode))
		{ 
		  case 11:
		        return("北京市");
		        break;
	      case 12:
	    	    return("天津市");
	            break;
	      case 13:
	        	return("河北省");
	            break;
	      case 14:
	        	return("山西省");
	            break;
	      case 15:
	        	return("内蒙古自治区");
	            break;
	      case 21:
	        	return("辽宁省");
	            break;
	      case 22:
	        	return("吉林省");
	            break;
	      case 23:
	        	return("黑龙江省");
	            break;
	      case 31:
	        	return("上海市");
	            break;
	      case 32:
	        	return("江苏省");
	            break;
	      case 33:
	        	return("浙江省");
	            break;
	      case 34:
	        	return("安徽省");
	            break;
	      case 35:
	        	return("福建省");
	            break;
	      case 36:
	        	return("江西省");
	            break;
	      case 37:
	        	return("山东省");
	            break;
	      case 41:
	        	return("河南省");
	            break;
	      case 42:
	        	return("湖北省");
	            break;
	      case 43:
	        	return("湖南省");
	            break;
	      case 44:
	        	return("广东省");
	            break;
	      case 45:
	        	return("广西壮族自治区");
	            break;
	      case 46:
	        	return("海南省");
	            break;
	      case 50:
	        	return("重庆市");
	            break;
	      case 51:
	        	return("四川省");
	            break;
	      case 52:
	        	return("贵州省");
	            break;
	      case 53:
	        	return("云南省");
	            break;
	      case 54:
	        	return("西藏自治区");
	            break;
	      case 61:
	        	return("陕西省");
	            break;
	      case 62:
	        	return("甘肃省");
	            break;
	      case 63:
	        	return("青海省");
	            break;
	      case 64:
	        	return("宁夏回族自治区");
	            break;
	      case 65:
	        	return("新疆维吾尔族自治区");
	            break;
		  default:
		        return("");
		}
	}
	 
	function GetProvPoint(aCode){	
		switch(parseInt(aCode))
		{ 
		  case 11:
		        return([116.390305,39.913533]);
		        break;
	      case 12:
	    	    return([117.181559, 39.140267]);
	            break;
	      case 13:
	        	return([114.491961, 38.047298]);
	            break;
	      case 14:
	        	return([112.555008, 37.870592]);
	            break;
	      case 15:
	    	    return([111.64708, 40.812369]);
	            break;
	      case 21:
	    	    return([123.38481, 41.795712]);
	            break;
	      case 22:
	    	    return([125.31284, 43.883023]);
	            break;
	      case 23:
	    	    return([126.681423, 45.728073]);
	            break;
	      case 31:
	    	    return([121.477575, 31.222797]);
	            break;
	      case 32:
	    	    return([118.782832, 32.048415]);
	            break;
	      case 33:
	    	  return([120.167095, 30.250499]);
	            break;
	      case 34:
	    	  return([117.267471, 31.795161]);
	            break;
	      case 35:
	    	  return([119.306406, 26.076106]);
	            break;
	      case 36:
	    	  return([115.828639, 28.657307]);
	            break;
	      case 37:
	    	  return([117.014735, 36.669959]);
	            break;
	      case 41:
	    	  return([113.663619, 34.76298]);
	            break;
	      case 42:
	    	  return([114.325985, 30.553486]);
	            break;
	      case 43:
	    	  return([112.995762, 28.19804]);
	            break;
	      case 44:
	    	  return([113.31292, 23.119668]);
	            break;
	      case 45:
	    	  return([108.32314, 22.829835]);
	            break;
	      case 46:
	    	  return([110.331133, 20.015867]);
	            break;
	      case 50:
	    	  return([106.532207, 29.536664]);
	            break;
	      case 51:
	    	  return([104.073939, 30.659293]);
	            break;
	      case 52:
	    	  return([106.708467, 26.58234]);
	            break;
	      case 53:
	    	  return([102.703007, 25.044456]);
	            break;
	      case 54:
	    	  return([91.12466, 29.656367]);
	            break;
	      case 61:
	    	  return([108.944245, 34.264881]);
	            break;
	      case 62:
	    	  return([103.750794, 36.069861]);
	            break;
	      case 63:
	    	  return([101.771469, 36.623047]);
	            break;
	      case 64:
	    	  return([106.266638, 38.47107]);
	            break;
	      case 65:
	    	  return([87.605163, 43.810314]);
	            break;          
		  default:
		        return([116.390305,39.913533]);
		}
		
	}
	
	function getPro2(aCode){
		
		switch(parseInt(aCode))
		{ 
		  case 11:
		        return("北京");
		        break;
	      case 12:
	    	    return("天津");
	            break;
	      case 13:
	        	return("河北");
	            break;
	      case 14:
	        	return("山西");
	            break;
	      case 15:
	        	return("内蒙古");
	            break;
	      case 21:
	        	return("辽宁");
	            break;
	      case 22:
	        	return("吉林");
	            break;
	      case 23:
	        	return("黑龙江");
	            break;
	      case 31:
	        	return("上海");
	            break;
	      case 32:
	        	return("江苏");
	            break;
	      case 33:
	        	return("浙江");
	            break;
	      case 34:
	        	return("安徽");
	            break;
	      case 35:
	        	return("福建");
	            break;
	      case 36:
	        	return("江西");
	            break;
	      case 37:
	        	return("山东");
	            break;
	      case 41:
	        	return("河南");
	            break;
	      case 42:
	        	return("湖北");
	            break;
	      case 43:
	        	return("湖南");
	            break;
	      case 44:
	        	return("广东");
	            break;
	      case 45:
	        	return("广西");
	            break;
	      case 46:
	        	return("海南");
	            break;
	      case 50:
	        	return("重庆");
	            break;
	      case 51:
	        	return("四川");
	            break;
	      case 52:
	        	return("贵州");
	            break;
	      case 53:
	        	return("云南");
	            break;
	      case 54:
	        	return("西藏");
	            break;
	      case 61:
	        	return("陕西");
	            break;
	      case 62:
	        	return("甘肃");
	            break;
	      case 63:
	        	return("青海");
	            break;
	      case 64:
	        	return("宁夏");
	            break;
	      case 65:
	        	return("新疆");
	            break;
		  default:
		        return("");
		}
		
	}
	
	function getProCode(aName){
		
		switch(aName)
		{
		  case"北京市":
		        return(11);
		        break;
	      case "天津市":
	    	    return(12);
	            break;
	      case "河北省":
	        	return(13);
	            break;
	      case "山西省":
	        	return(14);
	            break;
	      case "内蒙古自治区":
	        	return(15);
	            break;
	      case "辽宁省":
	        	return(21);
	            break;
	      case "吉林省":
	        	return(22);
	            break;
	      case "黑龙江省":
	        	return(23);
	            break;
	      case "上海市":
	        	return(31);
	            break;
	      case "江苏省":
	        	return(32);
	            break;
	      case "浙江省":
	        	return(33);
	            break;
	      case "安徽省":
	        	return(34);
	            break;
	      case "福建省":
	        	return(35);
	            break;
	      case "江西省":
	        	return(36);
	            break;
	      case "山东省":
	        	return(37);
	            break;
	      case "河南省":
	        	return(41);
	            break;
	      case "湖北省":
	        	return(42);
	            break;
	      case "湖南省":
	        	return(43);
	            break;
	      case "广东省":
	        	return(44);
	            break;
	      case "广西壮族自治区":
	        	return(45);
	            break;
	      case "海南省":
	        	return(46);
	            break;
	      case "重庆市":
	        	return(50);
	            break;
	      case "四川省":
	        	return(51);
	            break;
	      case "贵州省":
	        	return(52);
	            break;
	      case "云南省":
	        	return(53);
	            break;
	      case "西藏自治区":
	        	return(54);
	            break;
	      case "陕西省":
	        	return(61);
	            break;
	      case "甘肃省":
	        	return(62);
	            break;
	      case "青海省":
	        	return(63);
	            break;
	      case "宁夏回族自治区":
	        	return(64);
	            break;
	      case "新疆维吾尔族自治区":
	        	return(65);
	            break;
		  default:
		        return("");
		}
		
	}
	
	function GetColorLevel(avMax,avMin,avNum){
		
		if((avMax==avMin)&&(avMax==avNum)){
			return(5);	
		}else
			if((avMax==avNum)){
				return(5);	
			}else
				if((avMin==avNum)){
					return(1);	
				}else
			{
			  return(Math.ceil((avNum-avMin)/((avMax-avMin)/5))?Math.ceil((avNum-avMin)/((avMax-avMin)/5)):6);
			}	
	}
	
	function GetMile123(aname){
		switch(aname)
		{ 
		  case"公路":
		        return("公里");
		        break;
	      case"桥梁":
	    	    return("延米");
	            break;
	      case"隧道":
	        	return("延米");
	            break;
		  default:
		        return("");
		}	
	}
	
	function MeilMathceil(atxt){
	   return(Math.ceil(atxt)?Math.ceil(atxt):"");
	}
	
	function MqiMathceil(atxt){	
		return(Math.round(atxt*100)/100?Math.round(atxt*100)/100:0);	
	}
	
	function getPro3(aname,anum,acode){
		var str1 = "";
		var anumInt =Math.round(anum)?Math.round(anum):0;
		switch(aname)
		{ 
		  case"公路":
		        return(getPro2(acode)+""+ anumInt +"条路");
		        break;
	      case"桥梁":
	    	    return(getPro2(acode)+""+ anumInt +"座桥");
	            break;
	      case"桥梁indicator":
	    	    return(getPro2(acode)+"桥梁监测"+ anumInt +"次");
	            break;
	      case"隧道":
	        	return(getPro2(acode)+""+ anumInt +"座隧道");
	            break;
	      case"MQI":
	        	return(getPro2(acode)+str1+ anumInt +"公里");
	            break;
	      case"PQI":
	        	return(getPro2(acode)+str1+ anumInt +"公里 ");
	            break;
	      case"BCI":
	     	    return(getPro2(acode)+str1+ anumInt +"公里 ");
	            break;
	      case"SCI":
	        	return(getPro2(acode)+str1+ anumInt +"公里 ");
	            break;
	      case"TCI":
	        	return(getPro2(acode)+str1+ anumInt +"公里 ");
	            break;
	      case"PCI":
	        	return(getPro2(acode)+str1+ anumInt +"公里 ");
	            break;
	      case"RQI":
	        	return(getPro2(acode)+str1+ anumInt +"公里 ");
	            break;
	      case"RDI":
	        	return(getPro2(acode)+str1+ anumInt +"公里 ");
	            break;
	      case"SRI":
	        	return(getPro2(acode)+str1+ anumInt +"公里 ");
	            break;
	      case"PSSI":
	        	return(getPro2(acode)+str1+ anumInt +"公里 ");
	            break;
	      case"DR":
	        	return(getPro2(acode)+str1+ anumInt +"公里 ");
	            break;
	      case"RD":
	        	return(getPro2(acode)+str1+ anumInt +"公里 ");
	            break;
	      case"SFC":
	        	return(getPro2(acode)+str1+ anumInt +"公里 ");
	            break;
	      case"SSI":
	        	return(getPro2(acode)+str1+ anumInt +"公里 ");
	            break;		      
	      case"路面预警":
	    	    return(getPro2(acode)+"    ");
		        break;
	     case"桥梁预警":
	    	    return(getPro2(acode)+"    ");
		        break;		
	     case"隧道预警":
	    	    return(getPro2(acode)+"    ");
		        break;		           
		  default:
		        return("");
		}		
	}
	
	function getMqilevel(avNum){
		return(Math.ceil((100 - parseFloat( (avNum<60)?59:avNum))/10)); 
	}
	
	
	function YuJingMathceil(atxt){	
		return(Math.round(atxt*100)/100?Math.round(atxt*100)/100:0);	
	}
	 
	function LoadPie(aprotxt){
	    require(["esri/map","esri/geometry/Point", "esri/layers/FeatureLayer", "esri/layers/ArcGISTiledMapServiceLayer", "esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/renderers/SimpleRenderer", "esri/Color","CustomModules/ChartInfoWindow", "CustomModules/CustomTheme", "CustomModules/geometryUtils",	"dojo/_base/array",	"dojo/dom-construct","dojo/_base/window","dojox/charting/Chart","dojox/charting/action2d/Highlight", "dojox/charting/action2d/Tooltip", "dojox/charting/plot2d/Pie", "esri/dijit/InfoWindow","dojo/domReady!"],function (Map,Point, FeatureLayer, ArcGISTiledMapServiceLayer,SimpleLineSymbol, SimpleFillSymbol,SimpleRenderer, Color,ChartInfoWindow,CustomTheme, geometryUtils,array,domConstruct,win,Chart,Highlight, Tooltip,Pie,InfoWindow) {    	
	    	var strpie="";    	
	    	var jsonBarData = [];
	    	/*
	        for (var j = 0; j < jsonBarData21.length; j++){
	        	var row1 = {};
	        	row1.f1= jsonBarData21[j].f1;
	        	row1.f2= jsonBarData21[j].f2;
	        	row1.f3= jsonBarData21[j].f3;
	        	row1.f4= jsonBarData21[j].f4;
	        	row1.f5= jsonBarData21[j].f5;
	        	row1.UNIT= '公里';
	        	row1.x= new Point(GetProvPoint(jsonBarData21[j].sid)).x;
	        	row1.y= new Point(GetProvPoint(jsonBarData21[j].sid)).y;       	
	        	jsonBarData.push(row1);
	        	 //alert("13");         	
	        }
	        */
	        for (var j = 0; j < aprotxt.length; j++){
	        	var row1 = {};
	        	row1.f1= aprotxt[j].length10;
	        	row1.f2= aprotxt[j].length11;
	        	row1.f3= aprotxt[j].length12;
	        	row1.f4= aprotxt[j].length13;
	        	row1.f5= aprotxt[j].length14;
	        	row1.f6= aprotxt[j].length15;
	        	row1.UNIT= '公里';
	        	row1.x= new Point(GetProvPoint(aprotxt[j].id)).x;
	        	row1.y= new Point(GetProvPoint(aprotxt[j].id)).y;       	
	        	jsonBarData.push(row1);
	        	 //alert("13");         	
	        }
	    	    	    	 
	        //////
	    	createChartInfoWindow();    	
	        function createChartInfoWindow(){
	        	
	            var max = maxAttribute();            
	            var featureSums = []; 
	            for (var i = 0; i < jsonBarData.length; i++) {
	                var sum = jsonBarData[i].f1 + jsonBarData[i].f2 + jsonBarData[i].f3 + jsonBarData[i].f4 + jsonBarData[i].f5;               
	                featureSums.push(sum);               
	            } 
	            var sumMax = -10000;
	            array.forEach(featureSums, function (featureSum) {
	                if (sumMax < featureSum){                 	
	                	sumMax = featureSum};
	            });
	            var optinalChart = null;
	            numb_pienodeTest = jsonBarData.length;
	            for (var i = 0; i < jsonBarData.length; i++) {            	
	                var infoWindow = new ChartInfoWindow({
	                    domNode: domConstruct.create("div", { id: 'pienodeTest' + i.toString()}, document.getElementById("arcgisDiv"))
	                });
	                infoWindow.setMap(extMap);
	                
	                var curSum =jsonBarData[i].f1 + jsonBarData[i].f2 + jsonBarData[i].f3 + jsonBarData[i].f4 + jsonBarData[i].f5;                
	                //var radius = 80 * curSum / sumMax + 28;                
	                var radius =50;                
	                var styleStr = "width:" + radius + "px;height:" + radius + "px";                
	                var nodeChart = domConstruct.create("div", { id: 'pnodeTest' + i.toString(), style: styleStr }, win.body());                
	                var chart = makePieChart(nodeChart, jsonBarData[i], "MQI" + i.toString());
	                
	                var optinal = true;                
	                if (optinal == true) {
	                    optinalChart = chart;
	                }  
	                
	                infoWindow.resize(radius, radius);               
	                infoWindow.align = "Center";
	                
	                var labelPt = new Point(jsonBarData[i].x,  jsonBarData[i].y, cmap_SpatialReference);
	                infoWindow.setContent(nodeChart);
	                infoWindow.__mcoords = labelPt;
	                infoWindow.show(extMap.toScreen(labelPt));                
	            }  
	        }
	    	 
	        function maxAttribute(){
	            var max = -100000;           
	            for (var i = 0; i < jsonBarData.length; i++) {
	                if(max < jsonBarData[i].f1){max = jsonBarData[i].f1}
	                if(max < jsonBarData[i].f2){max = jsonBarData[i].f2}
	                if(max < jsonBarData[i].f3){max = jsonBarData[i].f3}
	                if(max < jsonBarData[i].f4){max = jsonBarData[i].f4}
	                if(max < jsonBarData[i].f5){max = jsonBarData[i].f5}            
	            }
	            return max;
	        } 
	     
	        function makePieChart(node, ajsonBarData,aName) {        	
	            var chart = new Chart(node, { margins: { l: 0, r: 0, t: 0, b: 0 } }).setTheme(CustomTheme).addPlot("default", { type: "Pie" ,font: "normal normal bold 8pt Tahoma", fontColor: "black",labelOffset: -20,precision:0, labels:false});
	
	            var serieValues = [];            
	            var regionName = aName;
	            var length = 5;
	            
	            serieValues.push({ y: ajsonBarData.f1, legend: "高速", region: ajsonBarData.UNIT});            
	            serieValues.push({ y: ajsonBarData.f2, legend: "一级", region: ajsonBarData.UNIT});            
	            serieValues.push({ y: ajsonBarData.f3, legend: "二级", region: ajsonBarData.UNIT});            
	            serieValues.push({ y: ajsonBarData.f4, legend: "三级", region: ajsonBarData.UNIT});            
	            serieValues.push({ y: ajsonBarData.f5, legend: "四级", region: ajsonBarData.UNIT}); 
	            
	            chart.addSeries("四级", serieValues, { stroke: {  color: "white" } });   
	            
	            var anim1 = new Highlight(chart, "default", {
	                highlight: function (e) {
	                    return "lightskyblue";
	                }
	            });
	            
	            var anim2 = new Tooltip(chart, "default", {
	                text: function (o) {
	                    var fieldName = o.chart.series[0].data[o.x].legend;
	                    return (fieldName + "" + o.y + "" + o.chart.series[0].data[o.x].region);
	                }
	            });
	            chart.render();
	            return chart;
	        } 
	    });    
	}
	
	function LoadPie1(aprotxt){
	    require(["esri/map","esri/geometry/Point", "esri/layers/FeatureLayer", "esri/layers/ArcGISTiledMapServiceLayer", "esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/renderers/SimpleRenderer", "esri/Color","CustomModules/ChartInfoWindow", "CustomModules/CustomThemeB", "CustomModules/geometryUtils",	"dojo/_base/array",	"dojo/dom-construct","dojo/_base/window","dojox/charting/Chart","dojox/charting/action2d/Highlight", "dojox/charting/action2d/Tooltip", "dojox/charting/plot2d/Pie", "esri/dijit/InfoWindow","dojo/domReady!"],function (Map,Point, FeatureLayer, ArcGISTiledMapServiceLayer,SimpleLineSymbol, SimpleFillSymbol,SimpleRenderer, Color,ChartInfoWindow,CustomTheme, geometryUtils,array,domConstruct,win,Chart,Highlight, Tooltip,Pie,InfoWindow) {    	
	    	var strpie="";    	
	    	var jsonBarData = [];
	    	/*
	        for (var j = 0; j < jsonBarData21.length; j++){
	        	var row1 = {};
	        	row1.f1= jsonBarData21[j].f1;
	        	row1.f2= jsonBarData21[j].f2;
	        	row1.f3= jsonBarData21[j].f3;
	        	row1.f4= jsonBarData21[j].f4;
	        	row1.f5= jsonBarData21[j].f5;
	        	row1.UNIT= '公里';
	        	row1.x= new Point(GetProvPoint(jsonBarData21[j].sid)).x;
	        	row1.y= new Point(GetProvPoint(jsonBarData21[j].sid)).y;       	
	        	jsonBarData.push(row1);
	        	 //alert("13");         	
	        }
	        */
	        for (var j = 0; j < aprotxt.length; j++){
	        	var row1 = {};
	        	row1.f1= aprotxt[j].length10;
	        	row1.f2= aprotxt[j].length11;
	        	row1.f3= aprotxt[j].length12;
	        	row1.f4= aprotxt[j].length13;
	        	row1.f5= aprotxt[j].length14;
	        	row1.UNIT= '座';
	        	row1.x= new Point(GetProvPoint(aprotxt[j].id)).x;
	        	row1.y= new Point(GetProvPoint(aprotxt[j].id)).y;       	
	        	jsonBarData.push(row1);
	        	 //alert("13");         	
	        }  
	        //alert(JSON.stringify(jsonBarData));
	        //////
	    	createChartInfoWindow();    	
	        function createChartInfoWindow(){
	        	
	            var max = maxAttribute();            
	            var featureSums = []; 
	            for (var i = 0; i < jsonBarData.length; i++) {
	                var sum = jsonBarData[i].f1 + jsonBarData[i].f2 + jsonBarData[i].f3 + jsonBarData[i].f4 + jsonBarData[i].f5;               
	                featureSums.push(sum);               
	            } 
	            var sumMax = -10000;
	            array.forEach(featureSums, function (featureSum){
	                if (sumMax < featureSum){                 	
	                	sumMax = featureSum};
	            });
	            var optinalChart = null;
	            numb_pienodeTest = jsonBarData.length;
	            for (var i = 0; i < jsonBarData.length; i++){            	
	                var infoWindow = new ChartInfoWindow({
	                    domNode: domConstruct.create("div", { id: 'pienodeTest' + i.toString()}, document.getElementById("arcgisDiv"))
	                });
	                infoWindow.setMap(extMap);
	                
	                var curSum =jsonBarData[i].f1 + jsonBarData[i].f2 + jsonBarData[i].f3 + jsonBarData[i].f4 + jsonBarData[i].f5;                
	                //var radius = 80 * curSum / sumMax + 28;                
	                var radius =50;                
	                var styleStr = "width:" + radius + "px;height:" + radius + "px";                
	                var nodeChart = domConstruct.create("div", { id: 'pnodeTest' + i.toString(), style: styleStr }, win.body());                
	                var chart = makePieChart(nodeChart, jsonBarData[i], "MQI" + i.toString());
	                
	                var optinal = true;                
	                if (optinal == true) {
	                    optinalChart = chart;
	                }  
	                
	                infoWindow.resize(radius, radius);               
	                infoWindow.align = "Center";
	                
	                var labelPt = new Point(jsonBarData[i].x,  jsonBarData[i].y, cmap_SpatialReference);
	                infoWindow.setContent(nodeChart);
	                infoWindow.__mcoords = labelPt;
	                infoWindow.show(extMap.toScreen(labelPt));                
	            }  
	        }
	    	 
	        function maxAttribute(){
	            var max = -100000;           
	            for (var i = 0; i < jsonBarData.length; i++) {
	                if(max < jsonBarData[i].f1){max = jsonBarData[i].f1}
	                if(max < jsonBarData[i].f2){max = jsonBarData[i].f2}
	                if(max < jsonBarData[i].f3){max = jsonBarData[i].f3}
	                if(max < jsonBarData[i].f4){max = jsonBarData[i].f4}
	                if(max < jsonBarData[i].f5){max = jsonBarData[i].f5}            
	            }
	            return max;
	        } 
	     
	        function makePieChart(node, ajsonBarData,aName){        	
	            var chart = new Chart(node, { margins: { l: 0, r: 0, t: 0, b: 0 } }).setTheme(CustomTheme).addPlot("default", { type: "Pie" ,font: "normal normal bold 8pt Tahoma", fontColor: "black",labelOffset: -20,precision:0, labels:false});
	
	            var serieValues = [];            
	            var regionName = aName;
	            var length = 5;
	            
	            serieValues.push({ y: ajsonBarData.f1, legend: vOut28_3, region: ajsonBarData.UNIT});            
	            serieValues.push({ y: ajsonBarData.f2, legend: vOut28_4, region: ajsonBarData.UNIT});            
	            serieValues.push({ y: ajsonBarData.f3, legend: vOut28_5, region: ajsonBarData.UNIT});            
	            serieValues.push({ y: ajsonBarData.f4, legend: vOut28_6, region: ajsonBarData.UNIT});            
	            serieValues.push({ y: ajsonBarData.f5, legend: vOut28_7, region: ajsonBarData.UNIT}); 
	            serieValues.push({ y: ajsonBarData.f5, legend: vOut28_8, region: ajsonBarData.UNIT}); 
	            
	            chart.addSeries(vOut28_7, serieValues, { stroke: {  color: "white" } });   
	            
	            var anim1 = new Highlight(chart, "default", {
	                highlight: function (e) {
	                    return "lightskyblue";
	                }
	            });
	            
	            var anim2 = new Tooltip(chart, "default",{
	                text: function (o) {
	                    var fieldName = o.chart.series[0].data[o.x].legend;
	                    return (fieldName + "" + o.y + "" + o.chart.series[0].data[o.x].region);
	                }
	            });
	            chart.render();
	            return chart;
	        } 
	    });    
	}
	
	function LoadPie2(aprotxt){
	    require(["esri/map","esri/geometry/Point", "esri/layers/FeatureLayer", "esri/layers/ArcGISTiledMapServiceLayer", "esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/renderers/SimpleRenderer", "esri/Color","CustomModules/ChartInfoWindow", "CustomModules/CustomTheme", "CustomModules/geometryUtils",	"dojo/_base/array",	"dojo/dom-construct","dojo/_base/window","dojox/charting/Chart","dojox/charting/action2d/Highlight", "dojox/charting/action2d/Tooltip", "dojox/charting/plot2d/Pie", "esri/dijit/InfoWindow","dojo/domReady!"],function (Map,Point, FeatureLayer, ArcGISTiledMapServiceLayer,SimpleLineSymbol, SimpleFillSymbol,SimpleRenderer, Color,ChartInfoWindow,CustomTheme, geometryUtils,array,domConstruct,win,Chart,Highlight, Tooltip,Pie,InfoWindow) {    	
	    	var strpie="";    	
	    	var jsonBarData = [];
	    	/*
	        for (var j = 0; j < jsonBarData21.length; j++){
	        	var row1 = {};
	        	row1.f1= jsonBarData21[j].f1;
	        	row1.f2= jsonBarData21[j].f2;
	        	row1.f3= jsonBarData21[j].f3;
	        	row1.f4= jsonBarData21[j].f4;
	        	row1.f5= jsonBarData21[j].f5;
	        	row1.UNIT= '公里';
	        	row1.x= new Point(GetProvPoint(jsonBarData21[j].sid)).x;
	        	row1.y= new Point(GetProvPoint(jsonBarData21[j].sid)).y;       	
	        	jsonBarData.push(row1);
	        	 //alert("13");         	
	        }
	        */
	        for (var j = 0; j < aprotxt.length; j++){
	        	var row1 = {};
	        	row1.f1= aprotxt[j].length10;
	        	row1.f2= aprotxt[j].length11;
	        	row1.f3= aprotxt[j].length12;
	        	row1.f4= aprotxt[j].length13;
	        	row1.f5= aprotxt[j].length14;
	        	row1.UNIT= '公里';
	        	row1.x= new Point(GetProvPoint(aprotxt[j].id)).x;
	        	row1.y= new Point(GetProvPoint(aprotxt[j].id)).y;       	
	        	jsonBarData.push(row1);
	        	 //alert("13");         	
	        }
	    	    	    	 
	        //////
	    	createChartInfoWindow();    	
	        function createChartInfoWindow(){
	        	
	            var max = maxAttribute();            
	            var featureSums = []; 
	            for (var i = 0; i < jsonBarData.length; i++) {
	                var sum = jsonBarData[i].f1 + jsonBarData[i].f2 + jsonBarData[i].f3 + jsonBarData[i].f4 + jsonBarData[i].f5;               
	                featureSums.push(sum);               
	            } 
	            var sumMax = -10000;
	            array.forEach(featureSums, function (featureSum) {
	                if (sumMax < featureSum){                 	
	                	sumMax = featureSum};
	            });
	            var optinalChart = null;
	            numb_pienodeTest = jsonBarData.length;
	            for (var i = 0; i < jsonBarData.length; i++) {            	
	                var infoWindow = new ChartInfoWindow({
	                    domNode: domConstruct.create("div", { id: 'pienodeTest' + i.toString()}, document.getElementById("arcgisDiv"))
	                });
	                infoWindow.setMap(extMap);
	                
	                var curSum =jsonBarData[i].f1 + jsonBarData[i].f2 + jsonBarData[i].f3 + jsonBarData[i].f4 + jsonBarData[i].f5;                
	                //var radius = 80 * curSum / sumMax + 28;                
	                var radius =50;                
	                var styleStr = "width:" + radius + "px;height:" + radius + "px";                
	                var nodeChart = domConstruct.create("div", { id: 'pnodeTest' + i.toString(), style: styleStr }, win.body());                
	                var chart = makePieChart(nodeChart, jsonBarData[i], "MQI" + i.toString());
	                
	                var optinal = true;                
	                if (optinal == true){
	                    optinalChart = chart;
	                }  
	                
	                infoWindow.resize(radius, radius);               
	                infoWindow.align = "Center";
	                
	                var labelPt = new Point(jsonBarData[i].x,  jsonBarData[i].y, cmap_SpatialReference);
	                infoWindow.setContent(nodeChart);
	                infoWindow.__mcoords = labelPt;
	                infoWindow.show(extMap.toScreen(labelPt));                
	            }  
	        }
	    	 
	        function maxAttribute(){
	            var max = -100000;           
	            for (var i = 0; i < jsonBarData.length; i++){
	                if(max < jsonBarData[i].f1){max = jsonBarData[i].f1}
	                if(max < jsonBarData[i].f2){max = jsonBarData[i].f2}
	                if(max < jsonBarData[i].f3){max = jsonBarData[i].f3}
	                if(max < jsonBarData[i].f4){max = jsonBarData[i].f4}
	                if(max < jsonBarData[i].f5){max = jsonBarData[i].f5}            
	            }
	            return max;
	        } 
	     
	        function makePieChart(node, ajsonBarData,aName){        	
	            var chart = new Chart(node, { margins: { l: 0, r: 0, t: 0, b: 0 } }).setTheme(CustomThemeT).addPlot("default", { type: "Pie" ,font: "normal normal bold 8pt Tahoma", fontColor: "black",labelOffset: -20,precision:0, labels:false});
	
	            var serieValues = [];            
	            var regionName = aName;
	            var length = 5;
	            
	            serieValues.push({ y: ajsonBarData.f1, legend: "高速", region: ajsonBarData.UNIT});            
	            serieValues.push({ y: ajsonBarData.f2, legend: "一级", region: ajsonBarData.UNIT});            
	            serieValues.push({ y: ajsonBarData.f3, legend: "二级", region: ajsonBarData.UNIT});            
	            serieValues.push({ y: ajsonBarData.f4, legend: "三级", region: ajsonBarData.UNIT});            
	            serieValues.push({ y: ajsonBarData.f5, legend: "四级", region: ajsonBarData.UNIT}); 
	            
	            chart.addSeries("四级", serieValues, { stroke: {  color: "white" } });   
	            
	            var anim1 = new Highlight(chart, "default", {
	                highlight: function (e) {
	                    return "lightskyblue";
	                }
	            });
	            
	            var anim2 = new Tooltip(chart, "default",{
	                text: function (o) {
	                    var fieldName = o.chart.series[0].data[o.x].legend;
	                    return (fieldName + "" + o.y + "" + o.chart.series[0].data[o.x].region);
	                }
	            });
	            chart.render();
	            return chart;
	        } 
	    });    
	}
	
	function DelPieBar(aid){
		flg_pienodeTest=0;
		numb_pienodeTest=8;
		for(var i = 0 ;i < numb_pienodeTest; i++){
	        var box = document.getElementById(aid + i.toString());
	        if(box==null){}
	        else{
	        box.parentNode.removeChild(box);
	        //box.			 // $("#cards-level3").css("display", "block");
	        //box.css("display", "none");
	        } 
		}
	}
	
	function LoadBar(){	
	    require(["esri/map","esri/geometry/Point", "esri/layers/FeatureLayer", "esri/layers/ArcGISTiledMapServiceLayer","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/renderers/SimpleRenderer", "esri/Color","CustomModules/ChartInfoWindow", "CustomModules/CustomTheme", "CustomModules/geometryUtils",	"dojo/_base/array",	"dojo/dom-construct","dojo/_base/window","dojox/charting/Chart","dojox/charting/action2d/Highlight", "dojox/charting/action2d/Tooltip","dojox/charting/plot2d/Pie", "esri/dijit/InfoWindow","dojox/charting/plot2d/ClusteredColumns","dojo/domReady!"],function (Map,Point, FeatureLayer, ArcGISTiledMapServiceLayer,SimpleLineSymbol, SimpleFillSymbol,SimpleRenderer, Color,ChartInfoWindow,CustomTheme, geometryUtils,array,domConstruct,win,Chart,Highlight, Tooltip,Pie,InfoWindow) {    	
	    	createChartInfoWindow();    	
	        function createChartInfoWindow(){        	
	            var max = maxAttribute();            
	            var featureSums = [];               
	            for (var i = 0; i < jsonPieData.length; i++) {
	                var sum = jsonBarData[i].GDP1 + jsonBarData[i].GDP2 + jsonBarData[i].GDP3 + jsonBarData[i].GDP4 + jsonBarData[i].GDP5;               
	                featureSums.push(sum);               
	            }                  
	            var sumMax = -10000;
	            array.forEach(featureSums, function (featureSum) {
	                if (sumMax < featureSum){                 	
	                	sumMax = featureSum};
	            });            
	            var optinalChart = null;            
	            for (var i = 0; i < jsonPieData.length; i++) {            	
	                var infoWindow = new ChartInfoWindow({
	                    domNode: domConstruct.create("div",  { id: 'barnodeTest' + i.toString()}, document.getElementById("arcgisDiv"))
	                });                
	                infoWindow.setMap(extMap);                
	                var curSum = jsonBarData[i].GDP1 + jsonBarData[i].GDP2 + jsonBarData[i].GDP3 + jsonBarData[i].GDP4 + jsonBarData[i].GDP5;;                
	                //var radius = 80 * curSum / sumMax + 28;                
	                var radius =150;                
	                var styleStr = "width:" + radius + "px;height:" + radius + "px";                
	                var nodeChart = domConstruct.create("div", { id: 'anodeTest' + i.toString(), style: styleStr }, win.body());                
	                var chart = makePieChart(nodeChart, jsonBarData[i], "GDP" + i.toString(), max);                                
	                var optinal = true;                
	                if (optinal == true){
	                   // optinalChart = chart;
	                }
	                infoWindow.resize(radius, radius);                
	                infoWindow.align = "Center";                
	                var labelPt = new Point(jsonPieData[i].x,  jsonPieData[i].y, cmap_SpatialReference);
	                //infoWindow.setContent("rqerqwerqwerqwerqwr");
	                infoWindow.setContent(nodeChart);
	                infoWindow.__mcoords = labelPt;
	                infoWindow.show(extMap.toScreen(labelPt));                  
	            }   
	            //DelPieBar("barnodeTest"); 
	        }    	 
	        function maxAttribute(){
	            var max = -100000;           
	            for (var i = 0; i < jsonPieData.length; i++) {
	                if(max < jsonBarData[i].GDP1){max = jsonBarData[i].GDP1}
	                if(max < jsonBarData[i].GDP2){max = jsonBarData[i].GDP2}
	                if(max < jsonBarData[i].GDP3){max = jsonBarData[i].GDP3}
	                if(max < jsonBarData[i].GDP4){max = jsonBarData[i].GDP4}
	                if(max < jsonBarData[i].GDP5){max = jsonBarData[i].GDP5}            
	            }
	            return max;
	        } 
	     
	        function makePieChart(node, ajsonBarData,aName, max){        	
	            var chart = new Chart(node, { margins: { l: 0, r: 0, t: 0, b: 0 } }).setTheme(CustomTheme).addPlot("default", { type: "Columns", gap: 0 });
	            var regionName = aName;
	            var length = 5;            
	            var serieValues = [];         
	            //serieValues.push(0);
	            serieValues.push(ajsonBarData.GDP1);            
	            chart.addSeries("GDP1", serieValues, { stroke: { color: "white" } });
	            serieValues = [];            
	            serieValues.push(0);
	            serieValues.push(ajsonBarData.GDP2);            
	            chart.addSeries("GDP2", serieValues, { stroke: { color: "white" } });
	            serieValues = [];            
	            serieValues.push(0);
	            serieValues.push(0);
	            serieValues.push(ajsonBarData.GDP3);            
	            chart.addSeries("GDP3", serieValues, { stroke: { color: "white" } });
	            serieValues = [];            
	            serieValues.push(0);
	            serieValues.push(0);
	            serieValues.push(0);
	            serieValues.push(ajsonBarData.GDP4);            
	            chart.addSeries("GDP4", serieValues, { stroke: { color: "white" } });
	            serieValues = [];            
	            serieValues.push(0);
	            serieValues.push(0);
	            serieValues.push(0);
	            serieValues.push(0);
	            serieValues.push(ajsonBarData.GDP5);            
	            chart.addSeries("GDP5", serieValues, { stroke: { color: "white" } }); 
	            serieValues = [];
	            for (var k = 0; k < 4; k++) {
	                serieValues.push(0);
	            }
	            serieValues.push(max);
	            chart.addSeries("隐藏", serieValues, { stroke: { color: new Color([0x3b, 0x44, 0x4b, 0]) }, fill: "transparent" });                        
	            var anim1 = new Highlight(chart, "default",{
	                highlight: function (e) {
	                    if (e.a == 0 && e.r == 0 && e.g == 0 && e.b == 0) {
	                    }
	                    else {
	                        return "lightskyblue";
	                    }
	                }
	            });
	            var anim2 = new Tooltip(chart, "default", {
	                text: function (o) {
	                    var fieldName = o.chart.series[o.index].name;
	                    if (fieldName == "隐藏") return "";
	                    return (fieldName + "：" + o.y);
	                }
	            });
	            chart.render();
	            return chart;/**/
	        }
	        
	    });    
	}
	
	function ShowMapMQI(aSid){
	    require(["esri/map","esri/InfoTemplate","esri/geometry/ScreenPoint","dojo/ready", "esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol", "esri/renderers/SimpleRenderer","esri/Color","esri/dijit/Measurement","esri/config","esri/layers/ArcGISTiledMapServiceLayer", "esri/layers/ArcGISDynamicMapServiceLayer", "dijit/registry", "esri/layers/GraphicsLayer",  "esri/layers/FeatureLayer", "esri/dijit/PopupTemplate", "esri/dijit/Legend","esri/graphic","esri/SpatialReference", "esri/geometry/Extent"],function(Map,InfoTemplate,ScreenPoint,ready,SimpleFillSymbol,SimpleLineSymbol,SimpleRenderer,Color,Measurement,esriConfig,ArcGISTiledMapServiceLayer, ArcGISDynamicMapServiceLayer, registry,GraphicsLayer, FeatureLayer, PopupTemplate,Legend,graphic,SpatialReference, Extent){ready(function(){
	 		    function addRoad(atxt){		    
			    	flayer2 = new FeatureLayer(gettxt(url23+"/"+atxt,3)
			    		,{outFields: ["*"] ,id:"fla4666er"+atxt}
					    		);		    
			    	flayer2.on("click",function(event){ 	   				    	
	   				    	});		    
			    	flayer2.on("mouse-move",function(event){
			    		//alert("");
			    		 
	   				    });	
			    	flayer2.setRenderer(new SimpleRenderer(new SimpleLineSymbol().setWidth(4).setColor(new Color([255,0,0,0.1]))));    			    	
			    	extMap.addLayer(flayer2,4);		    	
			    }
			    
			    for (var i = 1; i < 16; i++) {
			    	if((i==0)||(i==4)||(i==8)||(i==12)){		    		
			    	}else{
			    		
			    	}
			    }
			    
	   				    //extMap.addLayer(new ArcGISDynamicMapServiceLayer(url10030,{id:"mqi"}));
			    flayer = new FeatureLayer(url10031
				    		,{outFields: ["*"] ,id:"fla44444yer"}
				    		);
	   				    
	//   				               flayer.setDefinitionExpression("LXBM = 'G1'");
	   				/*
	   				    var symbol = new SimpleFillSymbol(
	   				      SimpleFillSymbol.STYLE_SOLID,
	   				      new SimpleLineSymbol(
	   				        SimpleLineSymbol.STYLE_SOLID,
	   				        new Color([0,0,0,1]),
	   				        1
	   				      ),
	   				      new Color([0,0,0,1])
	   				    );
	   				    flayer.setRenderer(new SimpleRenderer(symbol)); 
	   				*/                
	   				    
	   				    
	   				   var template = new InfoTemplate("Attributes", "${*}");
	   				    template.setTitle("路况信息");
	   				    template.setContent("路线编码："+"${LXBM}" + "<br>"    		            
	   				            +"起点桩号："+"${QDZH}" + "<br>"
	   				   //         +"终点桩号："+"${ZDZH}" + "<br>"
	   				           // +"PQI："+"${PQI}" + "<br>"
	   				            +"PCI："+"${PCI}" + "<br>"
	   				          //  +"RQI："+"${RQI}" + "<br>"
	   				          //  +"RDI："+"${RDI}" + "<br>"
	   				            );
	   				    flayer.setInfoTemplate(template);
	   				    flayer.on("mouse-move",function(event){
	   				    	   extMap.infoWindow.resize(139, 180);
	   				    	   extMap.infoWindow.setContent("路线编码："+ event.graphic.attributes['LXBM'] + "<br>"    		            
	   				            +"起点桩号："+event.graphic.attributes['QDZH'] + "<br>" +"PCI："+event.graphic.attributes['PCI'] + "<br>");
	   				           
	   				           //Apoint = event.graphic.geometry.getPoint(0, 0);
	   				           if(Flg_XD==1){docDraw_point22(layer15);}else{extMap.infoWindow.show(Apoint);}
	   				          }
	   				    );
	   				    flayer.on("mouse-out",function(event){extMap.infoWindow.hide();;});
	   				    flayer.on("click",function(event){ 
	   				    	//Apoint = event.graphic.geometry.getPoint(0, 0);
	   				    	docDraw_point22(layer15); 
	   				    	Flg_XD==1?Flg_XD=0:Flg_XD=1;
	   				    	});
	   				    extMap.addLayer(flayer,2);
	   				   // flayer.setDefinitionExpression("LXBM = 'G999' and sid='21'");
	   				   if(aSid!=""){
	   					   alert(aSid);
	   				       flayer.setDefinitionExpression(aSid);   					   
	   				   }else{
	   					flayer.setDefinitionExpression("LXBM = 'G999'");  
	   				   }
	   				   // flayer.visible = false;
	   				//extMap.getLayer("mqi").visible = false;         
	   				 /*   extMap.removeLayer(extMap.getLayer("mqi"));
	   				  if(extMap.getLayer("fla44444yer")==null){ 
	   				       alert(extMap.graphicsLayerIds);
	   				   }
	   				*/                
	   				  
	   				   // extMap.addLayer(new FeatureLayer("http://172.16.210.251:6080/arcgis/rest/services/map2015/MapServer/6"));
	   				    
	   				    //
	   				    //extMap.addLayer(new ArcGISDynamicMapServiceLayer("http://172.16.210.251:6080/arcgis/rest/services/PQI_LWZX/MapServer"));
	   				   // alert("333");
	    					 
	   				 });
	    });
		
	}
	
	
	function ShowMapLX(aSid){
	    require(["esri/map","esri/InfoTemplate","esri/geometry/ScreenPoint","dojo/ready", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/renderers/SimpleRenderer","esri/Color","esri/dijit/Measurement","esri/config","esri/layers/ArcGISTiledMapServiceLayer", "esri/layers/ArcGISDynamicMapServiceLayer","dijit/registry", "esri/layers/GraphicsLayer",  "esri/layers/FeatureLayer", "esri/dijit/PopupTemplate", "esri/dijit/Legend","esri/graphic","esri/SpatialReference", "esri/geometry/Extent"], function(Map,InfoTemplate,ScreenPoint,ready,SimpleFillSymbol,SimpleLineSymbol,SimpleRenderer,Color,Measurement,esriConfig,ArcGISTiledMapServiceLayer, ArcGISDynamicMapServiceLayer, registry,GraphicsLayer, FeatureLayer, PopupTemplate, Legend,graphic,SpatialReference, Extent){ready(function(){   				       
	    	flayer.setDefinitionExpression(aSid);   				       
	   				       });
	    });	
	}
	 
	function GetLXBMbyPt(){
		 require(["esri/map","esri/InfoTemplate","esri/layers/ArcGISDynamicMapServiceLayer","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/tasks/IdentifyTask","esri/tasks/IdentifyParameters","esri/dijit/Popup","dojo/_base/array","esri/Color","dojo/dom-construct","dojo/domReady!"], function (Map, InfoTemplate, ArcGISDynamicMapServiceLayer, SimpleFillSymbol,SimpleLineSymbol, IdentifyTask, IdentifyParameters, Popup,arrayUtils, Color, domConstruct){
		            var identifyTask = new IdentifyTask(url23);
		            var identifyParams = new IdentifyParameters();
		            identifyParams.tolerance = 3;
		            identifyParams.returnGeometry = true;
		            identifyParams.layerIds = [0];
		            identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_ALL;
		            identifyParams.width = extMap.width;
		            identifyParams.height = extMap.height;
		            identifyParams.geometry = Apoint.geometry;
		            identifyParams.mapExtent = cmap_SpatialReference;	            
		            //alert(extMap.extent.x);
		            identifyTask.execute(identifyParams, function (idResults) {
		            	alert("46");
		                //addToMap(idResults, evt.geometry);
		            });
		            
		            /*
		            var deferred = identifyTask.execute(identifyParams).addCallback(function (response){
		            	 alert("46");
		                 return arrayUtils.map(response, function (result) {
		            	   alert("32");
		            	 var feature = result.feature;
		                 var layerName = result.layerName;
		                
	                  
		                feature.attributes.layerName = layerName;
		                if (layerName === 'Tax Parcels') {
		                  var taxParcelTemplate = new InfoTemplate("",
		                    "${Postal Address} <br/> Owner of record: ${First Owner Name}");
		                  feature.setInfoTemplate(taxParcelTemplate);
		                }
		                else if (layerName === 'Building Footprints') {
		                  console.log(feature.attributes.PARCELID);
		                  var buildingFootprintTemplate = new InfoTemplate("",
		                    "Parcel ID: ${PARCELID}");
		                  feature.setInfoTemplate(buildingFootprintTemplate);
		                }
		                return feature; 
		               
		          });
	            });*/
	       
	      });
		
	}
	
	function  draw_aRoadclick(aid,aname,aqdzh,azdzh,alc,ayear){
		M_Road_clck(aid,aname,aqdzh,azdzh,alc,ayear);	
	}
	
	
	function  draw_aBrightclick(aid,aname,aroad,aroadpos,alc,ayear){
		M_Bridge_clck(aid,aname,aroad,aroadpos,alc,ayear);	
	}
	
	function  draw_aTunnelclick(aid,aname,aroad,aroadpos,alc,ayear){
	   M_Tunnel_clck(aid,aname,aroad,aroadpos,alc,ayear);	
	}
	
	function  draw_aMQIclick(aid,aname,aroad,aroadpos,alc,ayear){
	   //SetMapPOS9(aid,aname);	
	   M_MQI_clck(aid,aname,aroad,aroadpos,alc,ayear);		
	}
	
	function aLyVisale(aly,aflg,anm){   
		     require(["esri/map","esri/InfoTemplate","esri/geometry/ScreenPoint","dojo/ready", "esri/layers/FeatureLayer","extend/ExtArcMap","esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/renderers/SimpleRenderer","esri/Color","esri/dijit/Measurement","esri/config","esri/layers/ArcGISTiledMapServiceLayer", "esri/layers/ArcGISDynamicMapServiceLayer","dijit/registry", "esri/layers/GraphicsLayer",  "esri/layers/FeatureLayer", "esri/dijit/PopupTemplate", "esri/dijit/Legend","esri/graphic","esri/SpatialReference", "esri/geometry/Extent"], 
		    		 function(Map,InfoTemplate,ScreenPoint,ready,FeatureLayer,ExtArcMap,SimpleFillSymbol,SimpleLineSymbol,SimpleRenderer,Color,Measurement,esriConfig,ArcGISTiledMapServiceLayer, ArcGISDynamicMapServiceLayer, registry,GraphicsLayer, FeatureLayer, PopupTemplate, Legend,graphic,SpatialReference, Extent)
		    		 {ready(function(){   			  
		    			 aflg==1?SetAshow():aly.hide();
		    			 function SetAshow(){aly.show();anm==3?extMap.setLevel(8):0;
		    			 }
		    		 });					  	
		    		 });
		     }
	 
	function docDraw_pointclk(aly){
		  require(["esri/map","esri/dijit/Measurement", "dojo/ready", "esri/Color","extend/ExtArcMap", "dijit/registry", "dijit/Tooltip","esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/ArcGISTiledMapServiceLayer","esri/layers/GraphicsLayer","esri/geometry/Point","esri/geometry/Polyline","esri/geometry/Polygon","esri/symbols/PictureMarkerSymbol","esri/symbols/LineSymbol","esri/symbols/MarkerSymbol","esri/symbols/PictureFillSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleMarkerSymbol","esri/symbols/Symbol","esri/symbols/TextSymbol","esri/symbols/FillSymbol","esri/InfoTemplate","esri/graphic","esri/SpatialReference"],
			    function(Map,Measurement,ready,Color,ExtArcMap,registry,Tooltip,ArcGISDynamicMapServiceLayer,ArcGISTiledMapServiceLayer,GraphicsLayer,Point,Polyline,Polygon,PictureMarkerSymbol,LineSymbol,MarkerSymbol,PictureFillSymbol,SimpleFillSymbol,SimpleLineSymbol,SimpleMarkerSymbol,Symbol,TextSymbol,FillSymbol,InfoTemplate,graphic,SpatialReference) {  
				ready(function(){
					Toolmark?aly.add(new esri.Graphic(Apoint , new PictureMarkerSymbol("../common/images/navigation/23.png", 40, 50))):0;					

				});			
		  	});	
	}
	
	function docMsreSetTool(aTool){        
		measurement.clearResult();
		docclearmap(layer16);
		ToolFlg=false;
		measurement.setTool(aTool, true);
	    measurement.on(aMeasureEnd, function(evt){draw_aTextMsur(MqiMathceil(evt.values) + docGetUnit(aTool)); measurement.setTool(aTool, false);ToolFlg=true;});
	}
	
	
