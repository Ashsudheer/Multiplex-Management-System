package com.MMS.MMSv0.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import com.MMS.MMSv0.annotations.CTRefId;

@Entity
@Table(name = "seatNums")
@IdClass(CTRefId.class)
public class CTRef {

	@Id
	private String username;
	
	@Id
	private Long ticketNo;

	public CTRef() {
		// TODO Auto-generated constructor stub
	}

	public CTRef(String username, Long ticketNo) {
		super();
		this.username = username;
		this.ticketNo = ticketNo;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Long getTicketNo() {
		return ticketNo;
	}

	public void setTicketNo(Long ticketNo) {
		this.ticketNo = ticketNo;
	}
	
	
}
