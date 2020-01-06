package com.qingyun.entity;

import java.util.Map;

/**
 * @Description 给App返回的实体类
 * @author 张立增
 * @Date 2019年10月14日 下午1:40:58
 */
public class Message {

    public static final Integer OK = 200;
  
    public static final Integer ERROR = 100;
  
    private Integer type;

    private String msg;
  
    private String detail;
  
    public Message() {
		super();
	}
    
	public Message(Integer type, String msg) {
		super();
		this.type = type;
		this.msg = msg;
	}


	public Message(Integer type, String msg, String detail) {
		super();
		this.type = type;
		this.msg = msg;
		this.detail = detail;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	
	  
	
	
}
