package com.MMS.MMSv0.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Customer")
public class Customer {
	
	@Id
	private String username;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "c_name")
	private String cName;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "contact_no")
	private long contactNo;
	
	public Customer() {
		
	}
	
	public Customer(String username, String password, String c_name, String email, long contact_no) {
		super();
		this.username = username;
		this.password = password;
		this.cName = c_name;
		this.email = email;
		this.contactNo = contact_no;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getCName() {
		return cName;
	}
	public void setCName(String cName) {
		this.cName = cName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getContactNo() {
		return contactNo;
	}
	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}
	
	
}
