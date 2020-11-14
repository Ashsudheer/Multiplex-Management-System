package com.MMS.MMSv0.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.MMS.MMSv0.model.Shows;
import com.MMS.MMSv0.repository.ShowsRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ShowsController {
	
	@Autowired
	private ShowsRepository showsRepository;
	
	//get all shows
	@GetMapping("/shows")
	public List<Shows> getAllShows(){
		System.out.print(showsRepository.findAll());
		return showsRepository.findAll();
	}
}
