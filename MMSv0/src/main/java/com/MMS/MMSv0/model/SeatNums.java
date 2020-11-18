package com.MMS.MMSv0.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import com.MMS.MMSv0.annotations.SeatNumsId;

@Entity
@Table(name = "SeatNums")
@IdClass(SeatNumsId.class)
public class SeatNums {

	//@Column(name = "ticket_no")
	@Id
	private int ticketNo;
	
	//@Column(name = "row_id")
	@Id
	private int rowId;
	
	//@Column(name = "seat_no")
	@Id
	private int seatNo;

	public SeatNums() {
		
	}

	public SeatNums(int ticketNo, int rowId, int seatNo) {
		super();
		this.ticketNo = ticketNo;
		this.rowId = rowId;
		this.seatNo = seatNo;
	}

	public int getTicketNo() {
		return ticketNo;
	}

	public void setTicketNo(int ticketNo) {
		this.ticketNo = ticketNo;
	}

	public int getRowId() {
		return rowId;
	}

	public void setRowId(int rowId) {
		this.rowId = rowId;
	}

	public int getSeatNo() {
		return seatNo;
	}

	public void setSeatNo(int seatNo) {
		this.seatNo = seatNo;
	}
	
	
}
