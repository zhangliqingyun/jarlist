package com.qingyun.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.qingyun.dao.AuthCodeDao;
import com.qingyun.entity.AuthCode;
import com.qingyun.utils.DESUtils;
import com.qingyun.utils.DateUtils;
import com.qingyun.utils.DiskUtils;

@Service
public class LicenseService {

     @Autowired
     AuthCodeDao authCodeDao;
		   
     public List<AuthCode> findAuthCodeList() {
		return authCodeDao.findAuthCodeList();
     }

    /**
     * @Description 通过用户名查询用户集合的方法
     * @author 张立增[zhanglizeng] Tel：18860126570
     * @createDate 2019年1月25日 上午11:21:45
     */
	public List<AuthCode> getAuthCodeListByCode(String authCode) {
		return authCodeDao.getAuthCodeListBySerialNumber(authCode);
	}

	/**
	 * @Description 检测系统是否授权的方法
	 * @author 张立增
	 * @Date 2019年7月1日 下午1:59:22
	 */
	public boolean existAuthCode() {
		try {
			String serialNumber = DiskUtils.getSerialNumber("C");     //硬盘编号
			List<AuthCode> authCodeList = authCodeDao.getAuthCodeListBySerialNumber(serialNumber);
			if(authCodeList != null && authCodeList.size() > 0) {
				AuthCode authCode = authCodeList.get(0);
				String decryAuthCode = DESUtils.decrypt(authCode.getAuthCode());     //密文转成明文的方法
				String [] decryAuthCodeArr = decryAuthCode.split(","); //授权码：checkOk+标识+硬盘编号+开始时间+结束时间
				if("checkOk".equals(decryAuthCodeArr[0]) && "qingyun".equals(decryAuthCodeArr[1])
				  && serialNumber.equals(decryAuthCodeArr[2]) && DateUtils.formatDateStr(authCode.getStartDate()).equals(decryAuthCodeArr[3])) {
					Date endDate = authCode.getEndDate();
					if(null == endDate && decryAuthCodeArr.length == 4) {                  //没有截止日期，永久权限
						return true;
					}else {                                                                //有截止日期
						if(DateUtils.formatDateStr(endDate).equals(decryAuthCodeArr[4])) { //判断密文的截止日期与end_date字段值是否相等
							Date startDate = new Date();                                   //有截止日期，判断当前日期是否小于等于截止日期
							return DateUtils.compareDateFormat(startDate,endDate);
						}else {
							return false;
						}
					}
				}else {
					return false;
				}
			}else {
				return false;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	/**
	 * @Description 生成系统申请码的方法
	 * @author 张立增
	 * @Date 2019年7月1日 下午2:03:28
	 */
	public String getApplCode() {
		try {
			String projectName = "qingyun";
			String nowDate = DateUtils.currenttime;
			String diskNumber = DiskUtils.getSerialNumber("C");     //硬盘编号
			String cipher = projectName+","+diskNumber+","+nowDate; //密文：标识+硬盘编号+当前时间
			return DESUtils.encrypt(cipher);                        //得到加密后的字符
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public static void main(String[] args) {
		LicenseService licenseService= new LicenseService();
		System.out.println(licenseService.getApplCode());
	}

	/**
	 * @Description 生成授权码的方法
	 * @author 张立增
	 * @Date 2019年7月1日 下午3:14:46
	 */
	public String makeAuthCode(String applCode, String date) {
	    try {  
			String decryption = DESUtils.decrypt(applCode);     //密文转成明文的方法
			if(decryption != null && decryption.length() > 0) {
				String cipher = "checkOk"+","+decryption;    
				if(date != null && date.length() > 0) {
					 cipher = cipher+","+date;
				}  
				return JSON.toJSONString(DESUtils.encrypt(cipher));                //得到加密后的字符   
			}
			return null;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	/**
	 * @Description 检查和保存授权码的方法
	 * @author 张立增
	 * @Date 2019年7月1日 下午3:53:39
	 */
	public String checkSaveAuthCode(String applCode, String authCode) {
		try {
			String msg = "";
			if(applCode != null && applCode.length() > 0 && authCode != null && authCode.length() > 0) {
				String decryApplCode = DESUtils.decrypt(applCode);     //密文转成明文的方法
				String decryAuthCode = DESUtils.decrypt(authCode);     //密文转成明文的方法
				String [] decryApplCodeArr = decryApplCode.split(","); //申请码：标识+硬盘编号+当前时间  
				String [] decryAuthCodeArr = decryAuthCode.split(","); //授权码：checkOk+标识+硬盘编号+当前时间+结束时间
				String diskNumber = DiskUtils.getSerialNumber("C");    //硬盘编号 
				if(decryApplCodeArr.length == 3 && decryAuthCodeArr.length >=4) {
					if("qingyun".equals(decryApplCodeArr[0]) && "checkOk".equals(decryAuthCodeArr[0]) && "qingyun".equals(decryAuthCodeArr[1])
					  && diskNumber.equals(decryApplCodeArr[1]) && diskNumber.equals(decryAuthCodeArr[2]) && decryApplCodeArr[2].equals(decryAuthCodeArr[3])) {
						AuthCode authCodeEntity = new AuthCode();
						authCodeEntity.setAuthCode(authCode);
						authCodeEntity.setSerialNumber(diskNumber);
						authCodeEntity.setStartDate(DateUtils.formatDate(decryAuthCodeArr[3]));
						authCodeEntity.setEndDate(null);
						if(decryAuthCodeArr.length == 5) {
							String endDate = decryAuthCodeArr[4];    //结束日期
							String startDate = decryAuthCodeArr[3];  //开始时间
							if(DateUtils.compareDate(startDate,endDate)) { //开始时间小于等于结束时间   
								msg = "success";
								authCodeEntity.setEndDate(DateUtils.formatDate(decryAuthCodeArr[4]));
								authCodeDao.deleteBySerialNumber(diskNumber);//根据机器的编号删除授权信息
								authCodeDao.saveAuthCode(authCodeEntity); //保存授权码
							}else {
								msg = "errorDate";
							}
						}else {
							msg = "success";
							authCodeDao.deleteBySerialNumber(diskNumber); //根据机器的编号删除授权信息
							authCodeDao.saveAuthCode(authCodeEntity);     //保存授权码
						}
					}else {
						msg = "errorCode";
					}
				}else {
					msg = "errorFormat";
				}
			}
			return JSON.toJSONString(msg);   
		} catch (Exception e) {
			return null;
		}
	}
}
