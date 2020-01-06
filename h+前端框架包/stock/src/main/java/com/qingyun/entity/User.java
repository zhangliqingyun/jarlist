package com.qingyun.entity;

/**
 * @Description 用户实体类
 * @author 张立增[zhanglizeng] Tel：18860126570
 * @createDate 2019年1月23日 下午3:36:46
 */
public class User {

	private Integer id;
	private String name;
	private String password;
	
	public User() {
		super();
	}

	public User(Integer id, String name, String password) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	

}
