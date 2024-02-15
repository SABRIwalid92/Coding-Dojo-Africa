package com.lou.beltreview.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lou.beltreview.models.Project;
import com.lou.beltreview.repositories.ProjectRepository;


@Service
public class ProjectService {

	
	@Autowired
	private ProjectRepository projectRepo;
		
	public List<Project> allProjects(){
		return projectRepo.findAll();
	}
		
	public Project createProject(Project b) {
		return projectRepo.save(b);
	}
		
	
	public Project findProjectById(Long id) {
		Optional<Project> maybeProject = projectRepo.findById(id);
		return maybeProject.isPresent()?maybeProject.get():null;			
	}
		
	public Project updateProject(Project b) {
		return projectRepo.save(b);
	}
		
	public void deleteProject(Long id) {
		projectRepo.deleteById(id);
	}
	
	
}
