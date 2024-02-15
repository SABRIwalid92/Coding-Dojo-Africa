package com.lou.beltreview.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lou.beltreview.models.Project;
import com.lou.beltreview.models.User;
import com.lou.beltreview.services.ProjectService;
import com.lou.beltreview.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/projects")
public class ProjectController {

	
	@Autowired
	private ProjectService projectServ;

	@Autowired
	private UserService userServ;
	
	@GetMapping("/new")
	public String createForm(@ModelAttribute Project project) {
		return "newProject.jsp";
	}
	
	@PostMapping("/processProject")
	public String processForm(@Valid @ModelAttribute Project project, BindingResult result, HttpSession session) {
		if(result.hasErrors()) {
			return "newProject.jsp";
		}
		 Long userId = (Long) session.getAttribute("user_id");
		 User loggedinUser = userServ.findUserById(userId);
		 project.setLead(loggedinUser);
		 projectServ.createProject(project);
		 
		 return "redirect:/dashboard";
		 
	}
	
	
	
	
	
	
}
