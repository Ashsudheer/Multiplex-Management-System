package com.MMS.MMSv0.annotations;

import java.io.Serializable;

public class CTRefId implements Serializable{

	private String username;
	
	private Long ticketNo;

	public CTRefId() {
		
	}

	public CTRefId(String username, Long ticketNo) {
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((ticketNo == null) ? 0 : ticketNo.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CTRefId other = (CTRefId) obj;
		if (ticketNo == null) {
			if (other.ticketNo != null)
				return false;
		} else if (!ticketNo.equals(other.ticketNo))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}
	
	
}
