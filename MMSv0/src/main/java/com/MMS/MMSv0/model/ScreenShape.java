package com.MMS.MMSv0.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ScreenShape")
public class ScreenShape {
	
	@Id
	private int screenShapeId;
	
	@Column(name = "screen_id")
	private int screenId;
	
	@Column(name = "class_id")
	private int cassId;
	
	@Column(name = "no_of_seats_left")
	private int noLeft;
	
	@Column(name = "no_of_seats_middle")
	private int noMiddle;
	
	@Column(name = "no_of_seats_right")
	private int noRight;

	public ScreenShape() {
		super();
	}

	public ScreenShape(int screenShapeId, int screenId, int cassId, int noLeft, int noMiddle, int noRight) {
		super();
		this.screenShapeId = screenShapeId;
		this.screenId = screenId;
		this.cassId = cassId;
		this.noLeft = noLeft;
		this.noMiddle = noMiddle;
		this.noRight = noRight;
	}

	public int getScreenShapeId() {
		return screenShapeId;
	}

	public void setScreenShapeId(int screenShapeId) {
		this.screenShapeId = screenShapeId;
	}

	public int getScreenId() {
		return screenId;
	}

	public void setScreenId(int screenId) {
		this.screenId = screenId;
	}

	public int getCassId() {
		return cassId;
	}

	public void setCassId(int cassId) {
		this.cassId = cassId;
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
	
	
}
