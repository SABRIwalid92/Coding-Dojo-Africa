package com.lou.daikichi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class DaikichiController {
	@GetMapping("")
	public String welcome() {
		
		return "Welcome!";
	}
	@GetMapping("/today")
	public String today() {
		
		return "Today Bla bla bla.. blaa blabla blaaaaaaaAAA!";
	}
	@GetMapping("/tomorrow")
	public String tomorrow() {
		
		return "Tomorrow Bla.";
	}

}
