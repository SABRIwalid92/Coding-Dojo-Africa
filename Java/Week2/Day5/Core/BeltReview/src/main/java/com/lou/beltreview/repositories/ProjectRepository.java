package com.lou.beltreview.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.lou.beltreview.models.Project;

public interface ProjectRepository extends CrudRepository<Project, Long> {

	List<Project> findAll();
}
