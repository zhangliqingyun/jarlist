package com.qingyun.entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * @Description 授权码实体类
 * @author 张立增[zhanglizeng] Tel：18860126570
 * @createDate 2019年1月23日 下午3:36:46
 */
public class AuthCode {

	private Integer id;
	private String authCode;
	private Date startDate;
	private Date endDate;
	private String serialNumber;
	
	public AuthCode() {
		super();
	}

	public AuthCode(Integer id, String authCode, Date startDate, Date endDate, String serialNumber) {
		super();
		this.id = id;
		this.authCode = authCode;
		this.startDate = startDate;
		this.endDate = endDate;
		this.serialNumber = serialNumber;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAuthCode() {
		return authCode;
	}

	public void setAuthCode(String authCode) {
		this.authCode = authCode;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getSerialNumber() {
		return serialNumber;
	}

	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}
	
	

}
