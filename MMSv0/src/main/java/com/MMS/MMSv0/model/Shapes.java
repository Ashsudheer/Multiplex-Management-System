package com.MMS.MMSv0.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Shapes")
public class Shapes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int rowId;
	
	@Column(name = "screen_id")
	private int screenId;
	
	@Column(name = "class_id")
	private int classId;
	
	@Column(name = "no_of_seats_left")
	private int noLeft;
	
	@Column(name = "no_of_seats_middle")
	private int noMiddle;
	
	@Column(name = "no_of_seats_right")
	private int noRight;

	@Column(name = "row_alph")
	private String rowAlph;

	public Shapes() {
		// TODO Auto-generated constructor stub
	}

	public Shapes(int rowId, int screenId, int classId, int noLeft, int noMiddle, int noRight, String rowAlph) {
		super();
		this.rowId = rowId;
		this.screenId = screenId;
		this.classId = classId;
		this.noLeft = noLeft;
		this.noMiddle = noMiddle;
		this.noRight = noRight;
		this.rowAlph = rowAlph;
	}

	public int getRowId() {
		return rowId;
	}

	public void setRowId(int rowId) {
		this.rowId = rowId;
	}

	public int getScreenId() {
		return screenId;
	}

	public void setScreenId(int screenId) {
		this.screenId = screenId;
	}

	public int getClassId() {
		return classId;
	}

	public void setClassId(int classId) {
		this.classId = classId;
	}

	public int getNoLeft() {
		return noLeft;
	}

	public void setNoLeft(int noLeft) {
		this.noLeft = noLeft;
	}

	public int getNoMiddle() {
		return noMiddle;
	}

	public void setNoMiddle(int noMiddle) {
		this.noMiddle = noMiddle;
	}

	public int getNoRight() {
		return noRight;
	}

	public void setNoRight(int noRight) {
		this.noRight = noRight;
	}

	public String getRowAlph() {
		return rowAlph;
	}

	public void setRowAlph(String rowAlph) {
		this.rowAlph = rowAlph;
	}
	
	
	
	
	
}
