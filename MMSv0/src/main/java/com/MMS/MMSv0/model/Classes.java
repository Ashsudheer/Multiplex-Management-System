package com.MMS.MMSv0.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Class")
public class Classes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int classId;
	
	@Column(name = "class_name")
	private String className;
	
	@Column(name = "ticket_price")
	private int ticketPrice;

	/*
	@OneToOne(mappedBy = "Class", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private ScreenShape screenShape;
	*/
	
	public Classes() {
		
	}


	public Classes(int classId, String className, int ticketPrice) {
		super();
		this.classId = classId;
		this.className = className;
		this.ticketPrice = ticketPrice;
	}


	public int getClassId() {
		return classId;
	}


	public void setClassId(int classId) {
		this.classId = classId;
	}


	public String getClassName() {
		return className;
	}


	public void setClassName(String className) {
		this.className = className;
	}


	public int getTicketPrice() {
		return ticketPrice;
	}


	public void setTicketPrice(int ticketPrice) {
		this.ticketPrice = ticketPrice;
	}
	
	
}
