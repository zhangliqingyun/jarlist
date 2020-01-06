package com.qingyun.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qingyun.dao.UserDao;
import com.qingyun.entity.User;

@Service
public class UserService {

     @Autowired
     UserDao userDao;
		   
     public List<User> findUserList() {
		return userDao.findUserList();
     }

    /**
     * @Description 通过用户名查询用户集合的方法
     * @author 张立增[zhanglizeng] Tel：18860126570
     * @createDate 2019年1月25日 上午11:21:45
     */
	public List<User> getUserListByName(String userName) {
		return userDao.getUserListByName(userName);
	}
}
