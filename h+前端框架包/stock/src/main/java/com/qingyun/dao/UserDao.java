package com.qingyun.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.qingyun.entity.User;

@Repository
public interface UserDao {

	List<User> findUserList();

    /**
     * @Description 通过用户名查询用户集合的方法
     * @author 张立增[zhanglizeng] Tel：18860126570
     * @createDate 2019年1月25日 上午11:21:45
     */
	List<User> getUserListByName(@Param("userName")String userName);  
	
	
}
