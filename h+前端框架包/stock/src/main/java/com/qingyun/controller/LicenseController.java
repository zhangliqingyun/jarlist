package com.qingyun.controller;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.qingyun.service.LicenseService;
@RestController
public class LicenseController {

	@Autowired
	LicenseService licenseService;
	
	/**
	 * @Description 生成授权码的方法
	 * @author 张立增
	 * @Date 2019年7月1日 下午3:14:46
	 */
	@RequestMapping(value = "/makeAuthCode",method = RequestMethod.POST)
	public String makeAuthCode(HttpServletRequest request) {
		String applCode = request.getParameter("applCode").trim();
		String date = request.getParameter("date").trim();
		return licenseService.makeAuthCode(applCode,date);
	}
	
	/**
	 * @Description 检查和保存授权码的方法
	 * @author 张立增
	 * @Date 2019年7月1日 下午3:53:39
	 */
	@RequestMapping(value = "/checkSaveAuthCode",method = RequestMethod.POST)
	public String checkSaveAuthCode(HttpServletRequest request) {
		String applCode = request.getParameter("applCode").trim();
		String authCode = request.getParameter("authCode").trim();
		return licenseService.checkSaveAuthCode(applCode,authCode);
	}

}
