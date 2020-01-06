package com.qingyun.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.qingyun.entity.User;
import com.qingyun.service.LicenseService;
import com.qingyun.service.UserService;
/**
 * @Description index的控制类
 * @author 张立增
 * @Date 2019年1月20日 下午5:04:27
 */
@RestController
public class IndexController {

	@Autowired
	UserService userService;
	
	@Autowired
	LicenseService licenseService;
	
	/**
	 * @Description 跳转到主页的方法
	 * @author 张立增[zhanglizeng] Tel：18860126570
	 * @createDate 2019年1月25日 上午10:41:21
	 */
	@RequestMapping("/index")
	public ModelAndView index() {
		System.out.println("hello world!");
		ModelAndView mv = new ModelAndView("pages/index");
		List<User> userList = userService.findUserList();
		mv.addObject("userList", userList);
		return mv;
	}
	
	/**
	 * @Description 跳转到首页页面的方法
	 * @author 张立增[zhanglizeng] Tel：18860126570
	 * @createDate 2019年1月25日 上午10:41:52
	 */
	@RequestMapping("/pageHome")
	public ModelAndView pageHome() {
		ModelAndView mv = new ModelAndView("pages/pageHome");
		return mv;
	}
	
	/**
	 * @Description 跳转到登录页面的方法
	 * @author 张立增[zhanglizeng] Tel：18860126570
	 * @createDate 2019年1月25日 上午10:41:52
	 */
	@RequestMapping("/login")
	public ModelAndView login() {
		ModelAndView mv = new ModelAndView("pages/login");
		return mv;
	}
	
	/**
	 * @Description 验证登录用户名、密码是否正确的方法
	 * @author 张立增[zhanglizeng] Tel：18860126570
	 * @createDate 2019年1月25日 上午11:13:28
	 */
	@RequestMapping(value = "/checkLogin",method = RequestMethod.POST)
	public ModelAndView checkLogin(HttpServletRequest request) {
		String userName = request.getParameter("userName").trim();
		if(userName != null && userName.length() > 0) {
			List<User> userList = userService.getUserListByName(userName);
			if(userList != null && userList.size() > 0) {
				String passWord = request.getParameter("passWord").trim();
				if(passWord != null && passWord.length() > 0) {
					for(int i = 0;i < userList.size();i++) {
						User user = userList.get(i);
						if(passWord.equals(user.getPassword())) {
							return new ModelAndView("pages/index");
						}
					}
				}
			}
		}
		return new ModelAndView("pages/login");
	}
	
	@RequestMapping("/profile")
	public String profile() {
		return "pages/profile";   
	}
	
	
	
	
	
}
