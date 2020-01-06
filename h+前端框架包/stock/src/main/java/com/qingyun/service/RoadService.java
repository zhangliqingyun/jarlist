package com.qingyun.service;

import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSONObject;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.qingyun.dao.RoadDao;
import com.qingyun.entity.BRoad;
import com.qingyun.entity.Message;
import com.qingyun.utils.MyPdfPageEventHelper;

@Service
public class RoadService {

    @Autowired
    RoadDao roadDao;
	
	public String getRoadFileNameList() {
		List<BRoad> list = roadDao.getRoadFileNameList();
		return JSONObject.toJSONString(list);  
	}

	public String getRoadList(String fileName) {
		List<BRoad> list = roadDao.getRoadList(fileName);
		return JSONObject.toJSONString(list);  
	}

	public String uploadfile(MultipartFile file, HttpServletRequest request, HttpServletResponse response) {
		Message message = new Message();
		try {
				request.setCharacterEncoding("utf-8");
				response.setCharacterEncoding("utf-8");
				InputStream fileInput = file.getInputStream();                      //输入流
				String fileName = file.getOriginalFilename();     
				List<BRoad> roadList = new ArrayList<BRoad>();
				SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
				String newDate = sdf.format(new Date());
			    Workbook workBook = getWorkBook(fileInput,fileName); 
			    if(workBook != null){
			    	  message = parseFileAndSetList(workBook,fileName,roadList,newDate);  //解析和存储信息到list中
			    	  if(message.getType()== 200){                                    //解析没有问题才保存到数据库中
			    		  if (roadList != null && roadList.size() > 0) { // 有数值则添加
			    			  roadDao.save(roadList);
						  }  
			    	  }
			    }else {        
			    	message.setType(100);
			    	message.setMsg(fileName+"为空，上传解析失败");
			    }  
		} catch (Exception e) {
			e.printStackTrace();
			message.setType(Message.ERROR);
			message.setMsg("文件解析错误");
		}
		return JSONObject.toJSONString(message);
	}
	
	private Message parseFileAndSetList(Workbook workBook, String fileName, List<BRoad> roadList, String newDate) {
		Message message = new Message();
		try {
	    	for(int sheetNum=0;sheetNum< workBook.getNumberOfSheets();sheetNum++){
	    		Sheet sheet = workBook.getSheetAt(sheetNum);
	            if(sheet.getLastRowNum() == 0 && sheet.getPhysicalNumberOfRows() == 0){      
	                continue; 
	            }        
	            message = checkSheetColTitle(sheet,fileName,roadList,newDate);
	            if(message.getType() != 200){    //有一个sheet不符合判断此解析文档无效
	        	    return message;     
	            }
	  	    }
		} catch (Exception e) {
			return new Message(Message.ERROR,fileName+"文件上传解析失败");
		}
		return message;
	}

	private Message checkSheetColTitle(Sheet sheet, String fileName, List<BRoad> roadList, String newDate) {
		Message message = new Message();   
		try {      
			if(checkColTitle(sheet)){                //判断excel的列标题是否和模板一致
		    	message = parseSheet(sheet,roadList,fileName,newDate);         
		    }else{
				message.setType(100);    
				message.setMsg(fileName+"文件中的列标题顺序或内容不符合要求，请参照模板填写，上传解析失败!");
			}
		} catch (Exception e) { 
		   return new Message(Message.ERROR,fileName+"存在为空的sheet，建议删除空sheet,文件上传解析失败");
		}
		return message;
	}

	private Message parseSheet(Sheet sheet, List<BRoad> roadList, String fileName, String newDate) {
		int temp=0;     
		try {      
			for(int rowNum=3;rowNum <= sheet.getPhysicalNumberOfRows();++rowNum){             
				Row row = sheet.getRow(rowNum);     
				if(row == null){   
					continue;
	            }    
				temp = rowNum;  
				parseRow(row,roadList,fileName,newDate);         //解析新的模板行
			 }
		} catch (Exception e) {   
			return new Message(Message.ERROR,fileName+(temp+1)+"行文本内容不符合模板要求解析失败");      
		}
		return new Message(Message.OK,fileName+"文件解析成功");
	}

	private void parseRow(Row row, List<BRoad> roadList, String fileName, String newDate) {
		String rowCol0 = parseCell(row.getCell(0)).trim();           //路线编码
		String rowCol1 = parseCell(row.getCell(1)).trim();           //路线名称
		String rowCol2 = parseCell(row.getCell(2)).trim();           //政区
		String rowCol3 = parseCell(row.getCell(3)).trim();           //单位
		String rowCol4 = parseCell(row.getCell(4)).trim();           //起点地名
		String rowCol5 = parseCell(row.getCell(5)).trim();           //终点地名
		String rowCol6 = parseCell(row.getCell(6)).trim();           //起点
		String rowCol7 = parseCell(row.getCell(7)).trim();           //终点
		String rowCol8 = parseCell(row.getCell(8)).trim();           //长度
		String rowCol9 = parseCell(row.getCell(9)).trim();           //PCI
		String rowCol10 = parseCell(row.getCell(10)).trim();         //RQI
		String rowCol11 = parseCell(row.getCell(11)).trim();         //SRI
		String rowCol12 = parseCell(row.getCell(12)).trim();         //PSSI
		String rowCol13 = parseCell(row.getCell(13)).trim();         //RDI
		String rowCol14 = parseCell(row.getCell(14)).trim();         //RD
		String rowCol15 = parseCell(row.getCell(15)).trim();         //DR
		String rowCol16 = parseCell(row.getCell(16)).trim();         //SR
		if(rowCol0 != null || rowCol1!= null|| rowCol2!= null|| rowCol3!= null|| rowCol4!= null|| rowCol5!= null|| rowCol6!= null|| rowCol7!= null|| rowCol8!= null|| rowCol9!= null|| rowCol10!= null|| rowCol11!= null|| rowCol12!= null|| rowCol13!= null|| rowCol14!= null|| rowCol15!= null|| rowCol16!= null) {
			BRoad broad = new BRoad();
			broad.setfA(rowCol0);
			broad.setfB(rowCol1);
			broad.setfC(rowCol2);
			broad.setfD(rowCol3);
			broad.setfE(rowCol4);
			broad.setfF(rowCol5);
			broad.setfG(rowCol6);
			broad.setfH(rowCol7);
			broad.setfI(rowCol8);
			broad.setfJ(rowCol9);
			broad.setfK(rowCol10);
			broad.setfL(rowCol11);
			broad.setfM(rowCol12);
			broad.setfN(rowCol13);
			broad.setfO(rowCol14);
			broad.setfP(rowCol15);
			broad.setfQ(rowCol16);
			broad.setfR(fileName+"-"+newDate);
			broad.setfS(new Date());
			roadList.add(broad);
		}
	}

	private boolean checkColTitle(Sheet sheet) {
		String roadDetail = parseCell(sheet.getRow(0).getCell(0)).toUpperCase().trim();          //路线明细表													
		String rowOneCol0 = parseCell(sheet.getRow(1).getCell(0)).toUpperCase().trim();           //路线编码
		String rowOneCol1 = parseCell(sheet.getRow(1).getCell(1)).toUpperCase().trim();           //路线名称
		String rowOneCol2 = parseCell(sheet.getRow(1).getCell(2)).toUpperCase().trim();           //政区
		String rowOneCol3 = parseCell(sheet.getRow(1).getCell(3)).toUpperCase().trim();           //单位
		String rowOneCol4 = parseCell(sheet.getRow(1).getCell(4)).toUpperCase().trim();           //起点地名
		String rowOneCol5 = parseCell(sheet.getRow(1).getCell(5)).toUpperCase().trim();           //终点地名
		String rowOneCol6 = parseCell(sheet.getRow(1).getCell(6)).toUpperCase().trim();           //起点
		String rowOneCol7 = parseCell(sheet.getRow(1).getCell(7)).toUpperCase().trim();           //终点
		String rowOneCol8 = parseCell(sheet.getRow(1).getCell(8)).toUpperCase().trim();           //长度
		String rowOneCol9 = parseCell(sheet.getRow(1).getCell(9)).toUpperCase().trim();           //PCI
		String rowOneCol10 = parseCell(sheet.getRow(1).getCell(10)).toUpperCase().trim();         //RQI
		String rowOneCol11 = parseCell(sheet.getRow(1).getCell(11)).toUpperCase().trim();         //SRI
		String rowOneCol12 = parseCell(sheet.getRow(1).getCell(12)).toUpperCase().trim();         //PSSI
		String rowOneCol13 = parseCell(sheet.getRow(1).getCell(13)).toUpperCase().trim();         //RDI
		String rowOneCol14 = parseCell(sheet.getRow(1).getCell(14)).toUpperCase().trim();         //RD
		String rowOneCol15 = parseCell(sheet.getRow(1).getCell(15)).toUpperCase().trim();         //DR
		String rowOneCol16 = parseCell(sheet.getRow(1).getCell(16)).toUpperCase().trim();         //SR
		if("路线明细表".equals(roadDetail) && "路线编码".equals(rowOneCol0) && "路线名称".equals(rowOneCol1) && "政区".equals(rowOneCol2) 
		  && "单位".equals(rowOneCol3) && "起点地名".equals(rowOneCol4) && "终点地名".equals(rowOneCol5) && "起点".equals(rowOneCol6) && "终点".equals(rowOneCol7)
		  && "长度".equals(rowOneCol8) && "PCI".equals(rowOneCol9) && "RQI".equals(rowOneCol10) && "SRI".equals(rowOneCol11) && "PSSI".equals(rowOneCol12)
		  && "RDI".equals(rowOneCol13) && "RD".equals(rowOneCol14) && "DR".equals(rowOneCol15) && "SR".equals(rowOneCol16)) {    //此为固定的列头，再判断后续的列头与数据字典是否一致
			return true;
		}else {      
			return false;
		}
	}

	/**
	 * 
	 * @Description 根据输入流得到Workbook的方法
	 * @author 张立增[zhanglizeng] Tel：18860126570
	 * @createDate 2018年4月25日 上午10:46:34
	 */
	public Workbook getWorkBook(InputStream in,String fileName) throws Exception  {
		Workbook workbook = null;
		try {
		    if(fileName.endsWith("xls")){ //根据文件后缀名不同(xls和xlsx)获得不同的Workbook实现类对象
	            workbook = new HSSFWorkbook(in);
	        }else if(fileName.endsWith("xlsx")){ //2007 及2007以上
	            workbook = new XSSFWorkbook(in); //2003
	        }
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		return workbook;
	}
	
	/**
	 * 
	 * @Description 解析cell的方法
	 * @author 张立增[zhanglizeng] Tel：18860126570
	 * @createDate 2018年4月25日 下午1:08:17
	 */
	public String parseCell(Cell cell) {
		String cellValue = "";  
		SimpleDateFormat sdf = new  SimpleDateFormat("yyy-MM-dd");//日期格式化  
		if(cell != null && !"".equals(cell)){
			switch (cell.getCellType()){
	        case Cell.CELL_TYPE_NUMERIC:   //数字
	             if("General".equals(cell.getCellStyle().getDataFormatString())) {  
	            	 cellValue = cell.getNumericCellValue()+"";     
                 }else if("m/d/yy".equals(cell.getCellStyle().getDataFormatString())) {  
                	 cellValue = sdf.format(cell.getDateCellValue());  
                 }else if(HSSFDateUtil.isCellDateFormatted(cell)){  
                     Date date = cell.getDateCellValue();  
                     cellValue = sdf.format(date);                 
                 }else {  
                	 cellValue = cell.getNumericCellValue()+"";  
                 }              
	            break;
	        case Cell.CELL_TYPE_STRING: //字符串
	            cellValue = String.valueOf(cell.getStringCellValue());
	            break;
	        case Cell.CELL_TYPE_BOOLEAN: //Boolean
                cellValue = String.valueOf(cell.getBooleanCellValue());
                break;
            case Cell.CELL_TYPE_FORMULA: //公式
                cellValue = String.valueOf(cell.getNumericCellValue());          
                break;
            case Cell.CELL_TYPE_BLANK: //空值
                cellValue = "";
                break;
            case Cell.CELL_TYPE_ERROR: //故障
                cellValue = "";
                break;
            default:
                cellValue = "";
                break;   
		    }
		}
        return cellValue;
	}

	public void printPdf(String fileName, HttpServletRequest request, HttpServletResponse response){
		try {
			// 默认的iText5字体设置不支持中文字体,需要下载远东字体包,否则不能往PDF文档中输出中文字体。
			BaseFont bfChinese = BaseFont.createFont("STSong-Light", "UniGB-UCS2-H", BaseFont.NOT_EMBEDDED);
			Font titleCN = new Font(bfChinese, 17,Font.NORMAL);
			Font contentCN = new Font(bfChinese, 12,Font.NORMAL);
			String[] titles = {"路线编码","路线名称","起点桩号","终点桩号"};
				
			//获取数据集合 及 数据总数
			List<BRoad> list = roadDao.getRoadList(fileName);
			int total = list.size();
			// step 1 创建文档
			Document document = new Document();
				 
			// step 2  设置下载头  并将PdfWriter定向到response的输出流上
			// response.setContentType("application/pdf");
			response.setHeader("Content-Disposition", "attachment;filename="+ new String(("路线数据"+System.currentTimeMillis() + ".pdf").getBytes(), "iso-8859-1"));
			PdfWriter writer = PdfWriter.getInstance(document, response.getOutputStream());
				
			// step 3 通过setPageEvent事件 添加页眉，页脚，分页及水印等信息
		    MyPdfPageEventHelper helper = new MyPdfPageEventHelper("","",bfChinese,PageSize.A4);
		    writer.setPageEvent(helper);  
		        
			// step 3 开启文档  
			document.open(); 
	 
			// step 4  设置基本表格样式 及 添加列数据
			PdfPTable table = new PdfPTable(4); //指定为4列
			table.setWidthPercentage(100); // 自定义宽度 100% 
			table.setSpacingBefore(10f); 
			table.setSpacingAfter(10f);  
			float[] columnWidths = {1f, 1f, 1f, 1f};//设置列宽
		    table.setWidths(columnWidths);
		    PdfPCell cell = createCell("   记录总数（条）："+total,titleCN);  //添加总记录，设置合并单元格
		    cell.setRowspan(1);
		    cell.setColspan(4);
		    table.addCell(cell); 
		    table.addCell(createCell(titles[0],titleCN));   //添加标题
		    table.addCell(createCell(titles[1],titleCN));
		    table.addCell(createCell(titles[2],titleCN));
		    table.addCell(createCell(titles[3],titleCN));
		    document.add(table);  //step 5 将表格挂载到文档上 并进行资源关闭
		    
			PdfPTable tableTemp = new PdfPTable(4); //指定为4列
			tableTemp.setWidthPercentage(100); // 自定义宽度 100% 
			tableTemp.setSpacingBefore(10f); 
			tableTemp.setSpacingAfter(10f);  
			
		    Random rand = new Random(); 
		    int randInt = rand.nextInt(3) + 3;   //随机数：3-5
		    int iteraNum = 0;                    //遍历次数
	        for(int i = 0;i < list.size();i++){
                if(iteraNum >= randInt) {         //遍历次数大于随机数，先把上一个table放到文档中，把遍历次数标识重置0，再重新建table,重新生成随机数
                	document.add(tableTemp);    //step 5 将表格挂载到文档上 并进行资源关闭
                	iteraNum = 0;
                	randInt = rand.nextInt(3) + 3;   //随机数：3-5
                	tableTemp = new PdfPTable(4); //指定为4列
        			tableTemp.setWidthPercentage(100); // 自定义宽度 100% 
        			tableTemp.setSpacingBefore(10f); 
        			tableTemp.setSpacingAfter(10f);  
                }
	        	tableTemp.addCell(createCell(list.get(i).getfA(),contentCN)); 
	        	tableTemp.addCell(createCell(list.get(i).getfB(),contentCN)); 
	        	tableTemp.addCell(createCell(list.get(i).getfG(),contentCN)); 
	        	tableTemp.addCell(createCell(list.get(i).getfH(),contentCN)); 
	        	iteraNum++;
	        	if(i == list.size()-1) {
	        		document.add(tableTemp);  //step 5 将表格挂载到文档上 并进行资源关闭
	        	}
	        }        
			document.close();
			writer.close();
			System.out.println( "PDF文件生成完成" );
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	//生成单元格
	public static PdfPCell createCell(Object value,Font font) {
		PdfPCell cell = new PdfPCell(new Paragraph(value.toString(),font));
        cell.setBorderColor(BaseColor.BLACK);
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);
        cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
        return cell;
	}
	

	
	
}
