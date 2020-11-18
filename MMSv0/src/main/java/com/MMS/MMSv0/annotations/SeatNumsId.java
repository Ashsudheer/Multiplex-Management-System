package com.MMS.MMSv0.annotations;

import java.io.Serializable;

public class SeatNumsId implements Serializable{

	private int ticketNo;
	
	private int rowId;
	
	private int seatNo;

	public SeatNumsId() {
		
	}

	public SeatNumsId(int ticketNo, int rowId, int seatNo) {
		super();
		this.ticketNo = ticketNo;
		this.rowId = rowId;
		this.seatNo = seatNo;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + rowId;
		result = prime * result + seatNo;
		result = prime * result + ticketNo;
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
		SeatNumsId other = (SeatNumsId) obj;
		if (rowId != other.rowId)
			return false;
		if (seatNo != other.seatNo)
			return false;
		if (ticketNo != other.ticketNo)
			return false;
		return true;
	}
	
	
}
