package com.lou.dojoandninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lou.dojoandninjas.models.Ninja;
import com.lou.dojoandninjas.repositories.NinjaRepository;

@Service
public class NinjaService {

	@Autowired
	private NinjaRepository ninjaRepo;

	public List<Ninja> allNinjas() {
		return ninjaRepo.findAll();
	}

	public Ninja createNinja(Ninja b) {
		return ninjaRepo.save(b);
	}

//	public Ninja findNinjaById(Long id) {
//		Optional<Ninja> maybeNinja = ninjaRepo.findById(id);
//		return maybeNinja.isPresent() ? maybeNinja.get() : null;
//	}

	

	

}
