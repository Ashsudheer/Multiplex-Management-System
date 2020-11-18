package com.MMS.MMSv0.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Ticket")
public class Ticket {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long ticketNo;
	
	@Column(name = "show_id")
	private int showId;
	
	@Column(name = "no_seats")
	private int noSeats;
	
	@Column(name = "total_price")
	private int totalPrice;
	
	@Column(name = "ticket_day")
	private Date ticketDay;
	
	@Column(name = "booking_day")
	private Date bookingDay;
	
	@Column(name = "paid")
	private Boolean paid;
	
	@Column(name = "cancelled")
	private Boolean cancelled;

	public Ticket() {
		// TODO Auto-generated constructor stub
	}

	public Ticket(Long ticketNo, int showId, int noSeats, int totalPrice, Date ticketDay, Date bookingDay, Boolean paid,
			Boolean cancelled) {
		super();
		this.ticketNo = ticketNo;
		this.showId = showId;
		this.noSeats = noSeats;
		this.totalPrice = totalPrice;
		this.ticketDay = ticketDay;
		this.bookingDay = bookingDay;
		this.paid = paid;
		this.cancelled = cancelled;
	}

	public Long getTicketNo() {
		return ticketNo;
	}

	public void setTicketNo(Long ticketNo) {
		this.ticketNo = ticketNo;
	}

	public int getShowId() {
		return showId;
	}

	public void setShowId(int showId) {
		this.showId = showId;
	}

	public int getNoSeats() {
		return noSeats;
	}

	public void setNoSeats(int noSeats) {
		this.noSeats = noSeats;
	}

	public int getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Date getTicketDay() {
		return ticketDay;
	}

	public void setTicketDay(Date ticketDay) {
		this.ticketDay = ticketDay;
	}

	public Date getBookingDay() {
		return bookingDay;
	}

	public void setBookingDay(Date bookingDay) {
		this.bookingDay = bookingDay;
	}

	public Boolean getPaid() {
		return paid;
	}

	public void setPaid(Boolean paid) {
		this.paid = paid;
	}

	public Boolean getCancelled() {
		return cancelled;
	}

	public void setCancelled(Boolean cancelled) {
		this.cancelled = cancelled;
	}

	
	
	
}
