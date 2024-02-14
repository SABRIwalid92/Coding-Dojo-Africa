package com.lou.dojoandninjas.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lou.dojoandninjas.models.Dojo;
import com.lou.dojoandninjas.services.DojoService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/dojos")
public class DojoController {

	@Autowired
	private DojoService dojoServ;

	@GetMapping("/new")
	public String home(@ModelAttribute("dojo") Dojo dojo, Model m) {

		return "newDojo.jsp";
	}

	@PostMapping("/processDojo")
	public String createDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result, Model m) {
		if (result.hasErrors()) {

			return "newDojo.jsp";
		} else {
			dojoServ.createDojo(dojo);
			return "redirect:/dojos/new";
		}
	}
	
	@GetMapping("/{id}")
	public String showOneDojo(@PathVariable("id") Long id, Model m) {
		

		if(dojoServ.findDojoById(id) !=null) {
			m.addAttribute("dojo", dojoServ.findDojoById(id));
			return "oneDojo.jsp";
		}else {
			return "redirect:/dojos/new";
		}
	}
	
	
	

}
