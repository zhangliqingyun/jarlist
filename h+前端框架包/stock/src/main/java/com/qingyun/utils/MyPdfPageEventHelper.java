package com.qingyun.utils;
/**
 * @author : ShiLei
 * @time ：2018年5月7日 上午10:06:44
 * @introduction : 自定义PdfPageEventHelper：iText5中并没有之前版本HeaderFooter对象设置页眉和页脚，可以利用PdfPageEventHelper来完成页眉页脚及相关水印的设置工作。
 */
import java.io.IOException;
 
import com.itextpdf.text.BadElementException;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.Image;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.Rectangle;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.ColumnText;
import com.itextpdf.text.pdf.PdfContentByte;
import com.itextpdf.text.pdf.PdfPageEventHelper;
import com.itextpdf.text.pdf.PdfTemplate;
import com.itextpdf.text.pdf.PdfWriter;
    
public class MyPdfPageEventHelper extends PdfPageEventHelper {  
    
    // 页眉   
    public String yeMei;  
    
    // 页脚签名    
    public String footerDesc;  
    
    // 纸张大小  
    public Rectangle pageSize;  
 
    // 模板  
    public PdfTemplate template;  
    
    // 设置 中文
    public BaseFont baseFont;
    
    // 字体 样式
    public Font font;
    
    // 字体大小
    public static final int fontSize=12;  
    
    // 文字水印内容
    public String waterMarkText;
    
    // 水印图片路径
    public String imgUrl;
    
    /** 
     * 
     * @param yeMei 
     *            页眉详情描述 
     * @param footerDesc 
     *            页脚签名 
     * @param baseFont 
     *            中文字体 基本对象 
     * @param pageSize 
     *            页面文档大小，A4，A5，A6横转翻转等Rectangle对象 
     * @param waterMarkText 
     *            文字水印内容 
     * @param imgUrl 
     *            水印图片路径
     */  
    public MyPdfPageEventHelper(String yeMei,String footerDesc, BaseFont baseFont, Rectangle pageSize) {  
        this.yeMei = yeMei;  
        this.footerDesc = footerDesc;  
        this.pageSize = pageSize;  
        this.baseFont = baseFont;
    }
    
    public MyPdfPageEventHelper(String yeMei,String footerDesc, BaseFont baseFont, Rectangle pageSize,String waterMarkText) {  
    	this.yeMei = yeMei;  
    	this.footerDesc = footerDesc;  
    	this.baseFont = baseFont;
    	this.pageSize = pageSize;  
    	this.waterMarkText=waterMarkText;
    }
    
    public MyPdfPageEventHelper(String yeMei, String footerDesc,String imgUrl,BaseFont baseFont, Rectangle pageSize) {  
    	this.yeMei = yeMei;  
    	this.footerDesc = footerDesc;  
    	this.imgUrl=imgUrl;
    	this.baseFont = baseFont;
    	this.pageSize = pageSize;  
    }  
    
    // 文档打开时创建模板 
    public void onOpenDocument(PdfWriter writer, Document document) {
    	// 添加所生成的pdf文件 信息
        document.addSubject("GCX表格数据生成PDF");
        document.addCreationDate();
        document.addCreator("GCX");
    
        template = writer.getDirectContent().createTemplate(50, 50);// 共 页 的矩形的长宽高  
    }  
    
    // 关闭每页的时候，写入页眉，写入'第几页共'这几个字。 
    public void onEndPage(PdfWriter writer, Document document) {  
    
    	// 设置所支持的中文字体的 字体样式大小
    	font = new Font(baseFont, fontSize, Font.NORMAL);  
    	// 获取PdfContentByte  
        PdfContentByte cb = writer.getDirectContent();
    	
    	// 1.写入页眉  
        ColumnText.showTextAligned(cb, Element.ALIGN_LEFT, new Phrase(yeMei,font), document.left(), document.top() + 20, 0);  
           
        // 2.写入前半部分的 第 X页/共  
        int pageS = writer.getCurrentPageNumber();  
        String foot1 = "第 " + pageS + " 页 /共";  
        Phrase footer = new Phrase(foot1, font);  
    
        // 3.计算前半部分的foot1的长度，后面好定位最后一部分的'Y页'这俩字的x轴坐标，字体长度也要计算进去 = len
        float len = baseFont.getWidthPoint(foot1, fontSize);
    
        // 4.设置 页脚签名    
        Phrase footerLeft = new Phrase(footerDesc, font);  
        ColumnText.showTextAligned(cb, Element.ALIGN_LEFT, footerLeft, document.left(), document.bottom() - 20, 0);  
        
        //  5.写入页脚1   
        // x轴就是(右margin+左margin + right() -left()- len)/2.0F 再给偏移20F适合人类视觉感受，否则肉眼看上去太偏左 ,
        // y轴就是底边界-20,否则容易与页脚签名重叠；注意Y轴是从下往上累加的，最上方的Top值是大于Bottom好几百开外的。  
        ColumnText.showTextAligned(cb, Element.ALIGN_CENTER, footer, 
        	(document.rightMargin() + document.right() + document.leftMargin() - document.left() - len) / 2.0F + 20F, document.bottom() - 20, 0);  
    
        // 6.写入页脚2的模板（就是页脚的Y页这俩字）添加到文档中，计算模板的和Y轴,X=(右边界-左边界 - 前半部分的len值)/2.0F + len ， y 轴和之前的保持一致，底边界-20  
        cb.addTemplate(template, (document.rightMargin() + document.right() + document.leftMargin() - document.left()) / 2.0F + 20F, document.bottom() - 20); // 调节模版显示的位置  
        
        // 添加图片水印
        if (!"".equals(imgUrl) && imgUrl!=null) {
        	try {
        		Image image = Image.getInstance(imgUrl);
        		for(int i=1; i<= writer.getPageNumber(); i++){
        			
        			PdfContentByte content = writer.getDirectContentUnder();
        			try {
        				content.addImage(getSingletonWaterMarkImage(image,20f,40f));
        			} catch (DocumentException e) {
        				e.printStackTrace();
        			}
        		}
        	} catch (BadElementException | IOException  e) {
        		e.printStackTrace();
        	}
	}
		
	// 添加文字水印
        if (!"".equals(waterMarkText) && waterMarkText!=null) {
        	for(int i=1; i<= writer.getPageNumber(); i++){
        		PdfContentByte content = writer.getDirectContentUnder();
        		content.beginText();    
        		content.setColorFill(BaseColor.CYAN);// 文字水印 颜色  
        		content.setFontAndSize(baseFont,38);// 文字水印 字体及字号  
        		content.setTextMatrix(300, 350);// 文字水印 起始位置  
        		content.showText(waterMarkText);
        		content.endText();
        	}
	}
		
    }  
    
    // 关闭文档时，替换模板，完成整个页眉页脚组件   
    public void onCloseDocument(PdfWriter writer, Document document) {  
        // 7.关闭文档的时候，将模板替换成实际的 Y 值  
        template.beginText();  
        template.setFontAndSize(baseFont, fontSize);// 生成的模版的字体、颜色  
        String foot2 = " " + (writer.getPageNumber()) + " 页";  
        template.showText(foot2);// 模版显示的内容  
        template.endText();  
        template.closePath();  
    }
    
    //调整图片位置
    public Image getSingletonWaterMarkImage(Image waterMarkImage,float xPosition,float yPosition){  
        waterMarkImage.setAbsolutePosition(xPosition, yPosition);//坐标  
        waterMarkImage.setRotation(-20);//旋转 弧度  
        waterMarkImage.setRotationDegrees(-45);//旋转 角度  
        waterMarkImage.scalePercent(100);//依照比例缩放  
        return waterMarkImage;  
    }
}
