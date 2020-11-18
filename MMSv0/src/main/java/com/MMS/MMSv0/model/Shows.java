package com.MMS.MMSv0.model;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Shows")
public class Shows {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int showId;
	
	//@OneToOne(fetch = FetchType.LAZY)
	@Column(name = "screen_id")
	private int screenId;
	
	//@OneToOne(fetch = FetchType.LAZY)
	@Column(name = "movie_id")
	private int movieId;
	
	@Column(name = "start_time")
	private Time startTime;
	
	@Column(name = "show_day")
	private Date showDay;

	public Shows() {
		
	}

	public Shows(int showId, int screenId, int movieId, Time startTime, Date showDay) {
		super();
		this.showId = showId;
		this.screenId = screenId;
		this.movieId = movieId;
		this.startTime = startTime;
		this.showDay = showDay;
	}
	
	

	public Date getShowDay() {
		return showDay;
	}

	public void setShowDay(Date showDay) {
		this.showDay = showDay;
	}

	public int getShowId() {
		return showId;
	}

	public void setShowId(int showId) {
		this.showId = showId;
	}

	public int getScreenId() {
		return screenId;
	}

	public void setScreenId(int screenId) {
		this.screenId = screenId;
	}

	public int getMovieId() {
		return movieId;
	}

	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}

	public Time getStartTime() {
		return startTime;
	}

	public void setStartTime(Time startTime) {
		this.startTime = startTime;
	}
	
	
}
