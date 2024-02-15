package com.lou.dojoandninjas.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.lou.dojoandninjas.models.Ninja;

public interface NinjaRepository extends CrudRepository<Ninja, Long> {

	List<Ninja> findAll();
}