package com.MMS.MMSv0.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MMS.MMSv0.model.Classes;
import com.MMS.MMSv0.repository.ClassesRepository;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ClassesController {

	@Autowired
	private ClassesRepository classesRepository;
	
	//get all classes
	@GetMapping("/classes")
	public List<Classes> getAll(){
		return classesRepository.findAll();
	}
	
}
