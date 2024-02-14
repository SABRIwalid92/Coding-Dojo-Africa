package com.lou.dojoandninjas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lou.dojoandninjas.models.Dojo;
import com.lou.dojoandninjas.models.Ninja;
import com.lou.dojoandninjas.services.DojoService;
import com.lou.dojoandninjas.services.NinjaService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/ninjas")
public class NinjaController {

	@Autowired
	private NinjaService ninjaServ;

	@Autowired
	private DojoService dojoServ;

	@GetMapping("/new")
	public String home(@ModelAttribute("ninja") Ninja ninja, Model m) {
		List<Dojo> allDojos = dojoServ.allDojos();
		m.addAttribute("allDojos", allDojos);
		return "newNinja.jsp";
	}

	@PostMapping("/processNinja")
	public String createNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, Model m) {
		if (result.hasErrors()) {
			List<Ninja> allNinjas = ninjaServ.allNinjas();
			m.addAttribute("allNinjas", allNinjas);
			return "home.jsp";
		} else {
			Ninja newNinja = ninjaServ.createNinja(ninja);
			return "redirect:/ninjas/new";
		}
	}

	
}
