package com.lou.daikichi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

	@GetMapping("/travel/{city}")
	public String travel(@PathVariable("city") String city) {

		return "Congratulations! You will soon travel to " + city + "!";
	}

	@GetMapping("/lotto/{num}")
	public String lotto(@PathVariable("num") int num) {

		return num % 2 == 0 ? "You will take a grand journey in the near future, but be weary of tempting offers"
				: "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
	}

}
