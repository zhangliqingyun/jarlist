	var layer; //图层
	var layer1; //图层
	var layer2; //图层
	var layer3; //图层
	var layer4; //图层
	var layer5; //图层
	var layer6; //图层
	var layer7; //图层
	var layer8; //图层
	var layer9; //图层
	var layer10; //图层
	var layer11; //图层
	var layer12; //图层
	var layer13; //图层
	var layer14; //图层
	var layer15; //图层
	var layer15_1; //图层
	var layer15_2; //图层
	var layer15_3; //图层
	var layer15_4; //图层
	var layer16; //图层
	var layer17; //图层
	var layer17_3; //图层
	var layer18; //图层   
	var layer19; //图层
	var layer20; //图层
	var layer21; //图层
	var layer22; //图层
	var layer23; //图层
	var layer24; //图层
	var layer901; //图层
	var layer902; //图层
	var layer903; //图层
	var layer904; //图层
	var layer905; //图层
	var layer906; //图层
	var layer907; //图层
	var layer908; //图层
	var layer909; //图层
	var layer910; //图层
	var layer911; //图层

	var layer9001; //图层
	var layer9002; //图层
	var layer9003; //图层
	var layer9004; //图层
	var layer9005; //图层
	var layer9006; //图层
	var layer9007; //图层
	var layer9008; //图层
	var layer9009; //图层
	var layer9010; //图层

	var layarray;
	var customBasemap;
	var map1;
	var map2;
	var map3;
	var map4;
	var map5;
	var map6;
	var map7;
	var map8;
	var view; 
	var extent1;
	var pt;
	var vlines;
	var vpoints;
	var valin;//单线
	var vcolors;
	var vPosition = [114, 38];
	var vpaths = [[0, 0], [112.94, 32.89]];
	var url2 = "http://172.16.210.29:6080/arcgis/rest/services/test8/MapServer"
	url2 = "http://172.16.210.29:6080/arcgis/rest/services/PCI150000_2017/MapServer";
	var url1 = "http://172.16.210.29:6080/arcgis/rest/services/China_new/MapServer"; 
	var url3= "http://42.236.7.25:6080/arcgis/rest/services//FoundationData/ChinaAdmi/MapServer/2";
	var url4= "http://42.236.7.25:6080/arcgis/rest/services//FoundationData/ChinaAdmi/MapServer/1";
	var url5= "http://42.236.7.25:6080/arcgis/rest/services//FoundationData/ChinaAdmi/MapServer/0";
	var url6= "http://42.236.7.25:6080/arcgis/rest/services//FoundationData/Milestone/MapServer/0";
	var url7 = "http://42.236.7.25:6080/arcgis/rest/services/RoadNet/LX_Identify/MapServer/0";
	var url17="http://42.236.7.25:6080/arcgis/rest/services/ThematicMap/BridgeThematicMap/MapServer/1";
	//
	var url18="http://42.236.7.25:6080/arcgis/rest/services/BaseMaps/World2ChinaMapLabel/MapServer";
	var url19="http://42.236.7.25:6080/arcgis/rest/services/BaseMaps/World2ChinaMapBG/MapServer";
	var url20="http://42.236.7.25:6080/arcgis/rest/services//BaseMaps/DarkBlueMap/MapServer";
	var url21="http://42.236.7.25:6080/arcgis/rest/services/ThematicMap/BridgeThematicMap/MapServer";
	var url22="http://42.236.7.25:6080/arcgis/rest/services/ThematicMap/TunnelThematicMap/MapServer";
	var url23="http://42.236.7.25:6080/arcgis/rest/services/ThematicMap/RoadNetThematicMap/MapServer";
	var url24="http://42.236.7.25:6080/arcgis/rest/services/FoundationData/Milestone/MapServer";
	var url25="http://42.236.7.25:6080/arcgis/rest/services/ThematicMap/RoadNetThematicMap/MapServer";//1,2,3
	var url26="http://42.236.7.25:6080/arcgis/rest/services/FoundationData/Bridge/MapServer";
	var url27="http://42.236.7.25:6080/arcgis/rest/services/FoundationData/Tunnel/MapServer";
	var url28="http://42.236.7.25:6080/arcgis/rest/services//ThematicMap/71118ThematicMap/MapServer";
	
	var url10028 ="http://172.16.210.251:6080/arcgis/rest/services/GJ201217/MapServer/0";//roadmaint
	var url10029 ="http://172.16.210.251:6080/arcgis/rest/services/PQI_LWZX/MapServer";//roadmaint
	var url10030 ="http://172.16.210.251:6080/arcgis/rest/services/GJ201217/MapServer";//roadmaint
	var url10031 ="http://172.16.210.251:6080/arcgis/rest/services/GJ2012172/MapServer/0";//roadmaint
	

	var url9001 ="http://42.236.7.25:6080/arcgis/rest/services//ThematicMap/BridgeThematicMap/MapServer";	
	var url9002 ="http://42.236.7.25:6080/arcgis/rest/services//ThematicMap/TunnelThematicMap/MapServer";	
	var url9003 ="http://42.236.7.25:6080/arcgis/rest/services//ThematicMap/RoadNetThematicMap/MapServer";	
	var url9004 ="http://42.236.7.25:6080/arcgis/rest/services//ThematicMap/71118ThematicMap/MapServer";	
	var url9005 ="http://42.236.7.25:6080/arcgis/rest/services//ThematicMap/RoadConditions/MapServer";		
	var url9006 ="http://42.236.7.25:6080/arcgis/rest/services//RoadNet/GL_NB_GS/MapServer";	
	var url9007 ="http://42.236.7.25:6080/arcgis/rest/services//ThematicMap/GL_CDSL/MapServer";	
	var url9008 ="http://42.236.7.25:6080/arcgis/rest/services//ThematicMap/GL_JSDJ/MapServer";	
	var url9009 ="http://42.236.7.25:6080/arcgis/rest/services//ThematicMap/GL_MCLX/MapServer";		
	var url9010 ="http://42.236.7.25:6080/arcgis/rest/services//ThematicMap/MileStoneMap/MapServer";
	
	
	var linesize = 3;
	var linesize26 = 5;
	var linesize27 = 4;
	var linesize28 = 16;
	var linesize282 = 32;
	var linesize29 = 24;
	var linesize30 = 24;
	var linesize31 = 24;
	var linesize28 = 32;
	var linesize29 = 32;
	var linesize30 = 32;
	var linesize31 = 32;
	var linesize32 = 4;
	var linesize35 = 2;
	var linesize36 = 6;
	var v0or1= 1;
	var vcolor22 = [180, 180, 180];
	var vcolor111=[153,204,255];
	var vcolor112=[153,214,255];
	var vcolor113=[153,224,255];
	var vcolor114=[153,234,255];
	var vcolor115=[153,244,255];
	var vcolor116=[153,254,255];
	var vcolor26=[140,188,255,0.8];
	var vcolor27=[140,188,255,0.8];
	var vcolor28=[255,0,0,0.5];
	var vcolor29=[255,0,0,0.5];
	var vcolor30=[0,255,0,0.5];
	var vcolor31=[255,0,0,0.5];
	var vcolor33=[255,0,0,0.5];
	var vcolor34=[255,150,150,0.4];
	var Polygons;
	var find;
	var params;
	var measureButton;
	var asButton;
	var asButtonclear;
	var asButtonPosition;
	var asButtonFind;
	var asButtonpoly;
	var locationGraphic;
	var qrywhere = "河北";
	var vMQI_S;
	var vPQI_S;
	var vPCI_S;
	var vRQI_S;
	var vRDI_S;
	var vSRI_S;
	var vPSSI_S;
	var vAADT_S;
	var vYHFA_S;
	var vLine_S;
	var vPoint_S;
	var cmap_SpatialReference;
	var query;
	var queryTask; 
	var Apoint;
	var vxmin = 60;
	var vymin = 10;
	var vxmax = 120;
	var vymax = 60;
	var Div_Gis = "arcgisDiv";
	var cmap_token="";
	var vOut28="QLBM";
	var vOut28_1="桥梁编码:";
	var vOut28_2="桥梁名称:";
	var vOut28_3="一类";
	var vOut28_4="二类";
	var vOut28_5="三类";
	var vOut28_6="四类";
	var vOut28_7="五类";
	var vOut28_8="六类";
	var vOut28_9="座";
	var vOut29;
	var vOut30="SDBM";
	var vOut31;
	var vOut32="QLMC";
	var vOut33="SDMC";
	
	var vlxbmqs;
	
	var jion_txt = [{"image": "https://distilleryimage11.instagram.com/231895caaf2211e19dc71231380fe523_6.jpg", "caption": "another crappy day at work...", "link": "https://instagr.am/p/Lfz0O-Io5_/", "full_name": "gino beltran", "lat": "33.540744", "lng": "117.782432"},{"image": "https://distilleryimage4.instagram.com/3c82fe5caf2111e19dc71231380fe523_6.jpg", "caption": "No more June gloom", "link": "https://instagr.am/p/LfzFAppLO8/", "full_name": "Sachi Cunningham", "lat": "33.552143096", "lng": "117.776512145"},{"image": "https://distilleryimage4.instagram.com/2d2bb0c0af2111e1aebc1231381b647a_6.jpg", "caption": "Pretty day", "link": "https://instagr.am/p/LfzBxBtsx0/", "full_name": "marleerochelle", "lat": "33.510166168", "lng": "117.75150299"},{"image": "https://distilleryimage11.instagram.com/d6e2ecdaaf1e11e1bf341231380f8a12_6.jpg", "caption": "Finally some sun in Cali", "link": "https://instagr.am/p/LfxHPaD1g_/", "full_name": "ooflipmikeoo", "lat": "33.514331817", "lng": "117.757499694"},{"image": "https://distilleryimage5.instagram.com/cbf612c0af1e11e19e4a12313813ffc0_6.jpg", "caption": "Lucky charms with strawberries \u2764", "link": "https://instagr.am/p/LfxFAMKIg5/", "full_name": "Emily :)", "lat": "33.520999908", "lng": "117.76132965"},{"image": "https://distilleryimage4.instagram.com/b7a6aaf0af1e11e18bb812313804a181_6.jpg", "caption": "Learn something new everyday! Wtf fruit is this", "link": "https://instagr.am/p/LfxA2Aj1g8/", "full_name": "ooflipmikeoo", "lat": "33.542999267", "lng": "117.782165527"},{"image": "https://distilleryimage9.instagram.com/ae9877a4af1e11e181bd12313817987b_6.jpg", "caption": "Whats left", "link": "https://instagr.am/p/Lfw-0boke1/", "full_name": "nbatstussy", "lat": "33.532417297", "lng": "117.773918151"},{"image": "https://distilleryimage6.instagram.com/885300b4af1e11e1a92a1231381b6f02_6.jpg", "caption": "Last day at this amazing place", "link": "https://instagr.am/p/Lfw3A3D1g2/", "full_name": "ooflipmikeoo", "lat": "33.514348792", "lng": "117.757687569"},{"image": "https://distilleryimage9.instagram.com/15e13b68af1e11e180d51231380fcd7e_6.jpg", "caption": "I wish. \ud83c\udf34", "link": "https://instagr.am/p/LfwftQxQuB/", "full_name": "kikifast", "lat": "33.528130634", "lng": "117.770369913"},{"image": "https://distilleryimage3.instagram.com/9d3905c0af1c11e1aebc1231381b647a_6.jpg", "caption": "Dolphins while drinking my coffee. \ud83d\udc2c\u2615", "link": "https://instagr.am/p/LfvSkiiSUb/", "full_name": "Kaylynn Lee", "lat": "33.528202056", "lng": "117.771316528"},{"image": "https://distilleryimage4.instagram.com/0f780120af1511e192e91231381b3d7a_6.jpg", "caption": "", "link": "https://instagr.am/p/LfpGiJPBUo/", "full_name": "zack", "lat": "33.550384521", "lng": "117.800720214"},{"image": "https://distilleryimage0.instagram.com/014f4c2aaf1511e1ab011231381052c0_6.jpg", "caption": "", "link": "https://instagr.am/p/LfpDqFQz9k/", "full_name": "Eduard", "lat": "33.531554", "lng": "117.7654334"},{"image": "https://distilleryimage3.instagram.com/c2b42a3aaf1411e1ab011231381052c0_6.jpg", "caption": "", "link": "https://instagr.am/p/Lfo21owz9f/", "full_name": "Eduard", "lat": "33.531554", "lng": "117.7654334"},{"image": "https://distilleryimage1.instagram.com/3a4f9c22af0211e180d51231380fcd7e_6.jpg", "caption": "Sometimes Im really pretty.", "link": "https://instagr.am/p/LfZrKaNs45/", "full_name": "marleerochelle", "lat": "33.552589416", "lng": "117.75792694"},{"image": "https://distilleryimage11.instagram.com/994a6b4caeff11e1b2fe1231380205bf_6.jpg", "caption": "4 am. Cant sleep. Boyfriends sweatshirt. Criminal minds.", "link": "https://instagr.am/p/LfXhVgts4b/", "full_name": "marleerochelle", "lat": "33.552589416", "lng": "117.758094787"},{"image": "https://distilleryimage8.instagram.com/3503fc5caeff11e180c9123138016265_6.jpg", "caption": "Its like school but not lol", "link": "https://instagr.am/p/LfXMzNDW1s/", "full_name": "Daniel", "lat": "33.562470055", "lng": "117.765640287"},{"image": "https://distilleryimage10.instagram.com/b10dfcd6aefe11e1a92a1231381b6f02_6.jpg", "caption": "Cant sleep. Criminal minds. Boyfriend sweatshirt. 4 am.", "link": "https://instagr.am/p/LfWxonNs4O/", "full_name": "marleerochelle", "lat": "33.552677154", "lng": "117.757850646"},{"image": "https://distilleryimage10.instagram.com/7857c872aefe11e1be6a12313820455d_6.jpg", "caption": "", "link": "https://instagr.am/p/LfWmJIts4K/", "full_name": "marleerochelle", "lat": "33.552589416", "lng": "117.758094787"},{"image": "https://distilleryimage8.instagram.com/cfb834f4aefd11e1b2fe1231380205bf_6.jpg", "caption": "Boyfriend sweatshirt. 4 am. Cant sleep.", "link": "https://instagr.am/p/LfWDoCNs3w/", "full_name": "marleerochelle", "lat": "33.552589416", "lng": "117.758094787"}];
	var inienvts= new Array("esri/map", "esri/geometry/ScreenPoint","dojo/ready", "extend/ExtArcMap","esri/layers/ArcGISTiledMapServiceLayer","esri/symbols/TextSymbol", "esri/Color", "esri/symbols/Font","esri/tasks/query", "dijit/registry", "esri/layers/GraphicsLayer","esri/graphic","esri/SpatialReference","esri/geometry/Polygon","esri/geometry/Extent");
	//var picstr28 = "../common/js/arcgis/images/strct/QL_4.png";
	var picstr28 = "../common//images/ql820.png";
	var picstr29 = "../common/js/arcgis/images/strct/QL_4_s.png";
	var picstr30 = "../common/js/arcgis/images/strct/SD_4.png";
	var picstr30_1 = "../common/js/arcgis/images/strct/timg.jpg";
	var picstr31 = "../common/js/arcgis/images/strct/SD_4_s.png";
	var picstr28 = "../common//images/navigation/23.png";
	var picstr29 = "../common//images/navigation/21.png";
	var picstr30 = "../common//images/navigation/23.png";
	
	var picstr201 = "../common//images/navigation/201.png";
	var picstr202 = "../common//images/navigation/202.png";
	var picstr203 = "../common//images/navigation/203.png";
	var picstr204 = "../common//images/navigation/204.png";
	var picstr205 = "../common//images/navigation/205.png";
	
	var vclr33 = 0.8;
	
	//蓝色  公路桥隧资产
	var vcolor33_1=[200, 208, 255, vclr33];
	var vcolor33_2=[190, 218, 255, vclr33];
	var vcolor33_3=[140, 188, 255, vclr33];
	var vcolor33_4=[90, 168, 255, vclr33];
	var vcolor33_5=[30, 144, 255, vclr33];
	var vcolor33_6=[255, 139, 131, 0];
	
	//技术状况    公路
	var vcolor331_1=[120, 224, 57, vclr33];
	var vcolor331_2=[97, 251, 231, vclr33];
	var vcolor331_3=[224, 238, 115, vclr33];
	var vcolor331_4=[255, 170, 82, vclr33];
	var vcolor331_5=[250, 84, 2, vclr33];
	var vcolor331_6=[255, 139, 131, 0];
	
	//技术状况  隧道
	var vcolor332_1=[0,204,0, vclr33];
	var vcolor332_2=[0,0,255, vclr33];
	var vcolor332_3=[255,255,0, vclr33];
	var vcolor332_4=[255,204,0, vclr33];
	var vcolor332_5=[255,0,0, vclr33];
	var vcolor332_6=[204,204,204, 0];
	
	/*
	//红色
	var vcolor33_1=[255, 255, 240, vclr33];
	var vcolor33_2=[255, 238, 224, vclr33];
	var vcolor33_3=[255, 205, 193, vclr33];
	var vcolor33_4=[255, 179, 164, vclr33];
	var vcolor33_5=[255, 139, 131, vclr33];
	var vcolor33_6=[255, 139, 131, 0];
	*/
	/*
	var vcolor33_1=[255, 255, 240, vclr33];
	var vcolor33_2=[238, 238, 224, vclr33]; 
	var vcolor33_3=[205, 205, 193, vclr33];
	var vcolor33_4=[179, 179, 164, vclr33];
	var vcolor33_5=[139, 139, 131, vclr33];
	*/
	/*
	var vcolor33_1=[120, 224, 57, vclr33];
	var vcolor33_2=[97, 251, 231, vclr33];
	var vcolor33_3=[224, 238, 115, vclr33];
	var vcolor33_4=[255, 170, 82, vclr33];
	var vcolor33_5=[250, 84, 2, vclr33];
	*/
	
	var clusterLayer;
	/* 
	var jsonBarData1 = [{ GDP1: 13414, GDP2: 32684, GDP3: 235687, GDP4: 236598, GDP5: 86549, UNIT: "万元", x: 121.988, y: 39.094 },
	    { GDP1: 34514, GDP2: 52684, GDP3: 135687, GDP4: 96598, GDP5: 106549, UNIT: "万元", x: 121.844, y: 39.481 },
	    { GDP1: 789014, GDP2: 42684, GDP3: 335687, GDP4: 86598, GDP5: 96549, UNIT: "万元", x: 122.191, y: 39.533 },
	    { GDP1: 56414, GDP2: 122684, GDP3: 435687, GDP4: 136598, GDP5: 116549, UNIT: "万元", x: 122.476, y: 39.445 },
	    { GDP1: 23414, GDP2: 92684, GDP3: 535687, GDP4: 436598, GDP5: 76549, UNIT: "万元", x: 122.651, y: 39.979 }];
	*/
	var jsonBarData = [{ f1: 89414, f2: 82684, f3: 635687, f4: 536598, f5: 66549, UNIT: "公里", x: 81.639, y: 39.563 },
		{ f1: 111414, f2: 62684, f3: 735687, f4: 636598, f5: 126549, UNIT: "公里", x: 89.891, y: 19.229 },
		{ f1: 23614, f2: 72684, f3: 835687, f4: 736598, f5: 136549, UNIT: "公里", x: 97.211, y: 29.813 },
		{ f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{ f1: 63414, f2: 222684, f3: 145687, f4: 116598, f5: 156549, UNIT: "公里", x: 123.144, y: 39.865}];
	
	var jsonBarData21 = [{sid:11, f1: 89414, f2: 82684, f3: 635687, f4: 536598, f5: 66549, UNIT: "公里", x: 81.639, y: 39.563 },	
		{sid:12,  f1: 23614, f2: 72684,  f3: 835687, f4: 736598, f5: 136549, UNIT: "公里", x: 97.211, y: 29.813 },
		{sid:13,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:14,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:15,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:21,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:22,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:23,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:31,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:32,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:33,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:34,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:35,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:36,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:37,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:41,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:42,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:43,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:44,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:45,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:46,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:50,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:51,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:52,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:53,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:54,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:61,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:62,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:63,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:64,  f1: 93414, f2: 132684, f3: 935687, f4: 126598, f5: 146549, UNIT: "公里", x: 105.614, y: 49.652 },
		{sid:65,  f1: 63414, f2: 222684, f3: 145687, f4: 116598, f5: 156549, UNIT: "公里", x: 123.144, y: 39.865}];
	
	 
	var flayer;
	var flayer2;
	var flg_layer=0;
	var Flg_XD=0;
	
	 
	var identifyTask;
	var identifyParams;
	
	var DisId909 = 000000;
	var DisFlg = 0;
	
	var flg_pienodeTest=0;
	var numb_pienodeTest=0;
	var WZY_ID; 
	var WZY_ID2;
	var aMapPos99;
	var aMapPos_level=14;
	
	var vRoadCode0906="";
	
	var ToolFlg=true;
	var Toolmark=false; 	
	var ToolMremtPln=false; 
	var ToolMremtPly=false; 
	var aMeasureEnd = "measure-end";
	var measurement;
	
	function alertShow(astr){
		//alert(astr);   
	}
	
	
	
