package com.qingyun.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.qingyun.entity.AuthCode;

@Repository
public interface AuthCodeDao {

	List<AuthCode> findAuthCodeList();

	List<AuthCode> getAuthCodeListBySerialNumber(@Param("serialNumber")String serialNumber);

	/**
	 * @Description 保存授权码
	 * @author 张立增
	 * @Date 2019年7月1日 下午5:26:23
	 */
	void saveAuthCode(AuthCode authCodeEntity);

	/**
	 * @Description 根据机器的编号删除授权信息
	 * @author 张立增
	 * @Date 2019年7月1日 下午5:52:58
	 */
	void deleteBySerialNumber(@Param("serialNumber")String serialNumber);  
	
	
}
