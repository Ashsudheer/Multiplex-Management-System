package com.MMS.MMSv0.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MMS.MMSv0.model.Screen;
import com.MMS.MMSv0.repository.ScreenRepository;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ScreenController {

	@Autowired
	private ScreenRepository screenRepository;
	
	//get all screens
	@GetMapping("/screens")
	public List<Screen> getAllScreens(){
		return screenRepository.findAll();
	}
	
}
