package com.MMS.MMSv0.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MMS.MMSv0.exception.ResourceNotFoundException;
import com.MMS.MMSv0.model.Ticket;
import com.MMS.MMSv0.repository.TicketRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TicketController {
	
	@Autowired
	TicketRepository ticketRepository;
	
	@GetMapping("/customers/tickets")
	public List<Ticket> getAllTickets(){
		return ticketRepository.findAll();
	}
	
	@GetMapping("/customers/ticket/{ticketNo}")
	public ResponseEntity<Ticket> getTicket(@PathVariable Long ticketNo){
		Ticket ticket  = ticketRepository.findById(ticketNo).orElseThrow(() -> new ResourceNotFoundException("Ticket does not exist"));
		return ResponseEntity.ok(ticket);
	}

}
