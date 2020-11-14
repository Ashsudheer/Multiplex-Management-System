package com.MMS.MMSv0.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Screen")
public class Screen {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int screenId;
	
	@Column(name = "screen_no")
	private int screenNo;
	
	@Column(name = "multiplex_id")
	private int multiplexId;
	
	@Column(name = "total_seats")
	private int totalSeats;
	
	@Column(name = "no_of_rows")
	private int noOfRows;
	
	/*
	@OneToOne(mappedBy = "Screen", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private ScreenShape screenShape;
	
	@OneToOne(mappedBy = "Screen", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Shows shows;
	*/

	public Screen() {
		
	}
	
	public Screen(int screenId, int screenNo, int multiplexId, int totalSeats, int noOfRows) {
		super();
		this.screenId = screenId;
		this.screenNo = screenNo;
		this.multiplexId = multiplexId;
		this.totalSeats = totalSeats;
		this.noOfRows = noOfRows;
	}

	public int getScreenId() {
		return screenId;
	}

	public void setScreenId(int screenId) {
		this.screenId = screenId;
	}

	public int getScreenNo() {
		return screenNo;
	}

	public void setScreenNo(int screenNo) {
		this.screenNo = screenNo;
	}

	public int getMultiplexId() {
		return multiplexId;
	}

	public void setMultiplexId(int multiplexId) {
		this.multiplexId = multiplexId;
	}

	public int getTotalSeats() {
		return totalSeats;
	}

	public void setTotalSeats(int totalSeats) {
		this.totalSeats = totalSeats;
	}

	public int getNoOfRows() {
		return noOfRows;
	}

	public void setNoOfRows(int noOfRows) {
		this.noOfRows = noOfRows;
	}
	
	

}
