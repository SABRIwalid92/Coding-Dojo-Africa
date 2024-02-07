package com.lou.omikujiform.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/omikuji")
public class OmikujiController {

	@GetMapping("")
	public String form() {
		return "form.jsp";
	}

	@PostMapping("/processForm")
	public String process(@RequestParam("number") int number, @RequestParam("person") String person,
			@RequestParam("city") String city, @RequestParam("hobby") String hobby,
			@RequestParam("living") String living, @RequestParam("description") String description, HttpSession s) {
		s.setAttribute("number",number);
		s.setAttribute("person",person);
		s.setAttribute("city",city);
		s.setAttribute("hobby",hobby);
		s.setAttribute("living",living);
		s.setAttribute("description",description);
		
		return "redirect:/omikuji/show";
	}
	@GetMapping("/show")
	public String show() {
		return "result.jsp";
	}
}
