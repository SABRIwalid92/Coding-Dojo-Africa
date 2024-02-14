package com.lou.dojoandninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lou.dojoandninjas.models.Dojo;
import com.lou.dojoandninjas.repositories.DojoRepository;

@Service
public class DojoService {

	@Autowired
	private DojoRepository dojoRepo;

	public List<Dojo> allDojos() {
		return dojoRepo.findAll();
	}

	public Dojo createDojo(Dojo b) {
		return dojoRepo.save(b);
	}

	public Dojo findDojoById(Long id) {
		Optional<Dojo> maybeDojo = dojoRepo.findById(id);
		return maybeDojo.isPresent() ? maybeDojo.get() : null;
	}

	

	

}
