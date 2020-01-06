package com.qingyun.controller;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.qingyun.service.RoadService;
@RestController
@RequestMapping("/road")
public class RoadController {

	@Autowired
	RoadService roadService;
	
	@RequestMapping(value = "/upload") 
	public ModelAndView upload(HttpServletRequest request) {
		return new ModelAndView("pages/upload");
	}
	
	@RequestMapping(value = "/getRoadFileNameList") 
	public String getRoadFileNameList(HttpServletRequest request) {
		return roadService.getRoadFileNameList();
	}
	
	@RequestMapping(value = "/getRoadList",method= {RequestMethod.POST,RequestMethod.GET}) 
	public String getRoadList(HttpServletRequest request) {
		String fileName = request.getParameter("fileName");
		return roadService.getRoadList(fileName);
	}

	@RequestMapping(value = "/uploadfile") 
	public String uploadfile(@RequestParam("file") MultipartFile file, HttpServletRequest request,HttpServletResponse response) {
		return roadService.uploadfile(file,request,response);
	}
	
	@RequestMapping(value="printPdf",produces={"text/html;charset=UTF-8"})
	@ResponseBody 
	public void printPdf(HttpServletRequest request,HttpServletResponse response) {
		String fileName = request.getParameter("fileName");
		roadService.printPdf(fileName,request,response);
	}
	
	
	
	
	
	

}
