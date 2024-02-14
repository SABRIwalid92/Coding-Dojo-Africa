package com.lou.savetravels.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lou.savetravels.models.Expense;
import com.lou.savetravels.services.ExpenseService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/expenses")
public class ExpenseController {
	
	@Autowired
	private ExpenseService ExpenseServ;
	
	
	@GetMapping("")
	public String home(@ModelAttribute("expense") Expense expense, Model m) {
		List<Expense> allExpenses = ExpenseServ.allExpenses();
		m.addAttribute("allExpenses", allExpenses);
		return "home.jsp";
	}


	@PostMapping("/processExpense")
	public String createExpense(@Valid @ModelAttribute("expense") Expense expense, BindingResult result, Model m) {
		if(result.hasErrors()) {
			List<Expense> allExpenses = ExpenseServ.allExpenses();
			m.addAttribute("allExpenses", allExpenses);
			return "home.jsp";
		} else {
			 ExpenseServ.createExpense(expense);
			return "redirect:/expenses";
		}
	}



	@GetMapping("/edit/{id}")
	public String editExpense(@PathVariable("id") Long id, Model m) {
		
		 m.addAttribute("expense", ExpenseServ.findExpenseById(id));
		return "edit.jsp";
	}
		
	@PutMapping("/{id}")
	public String editExpense(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
		if(result.hasErrors()) {
			return "edit.jsp";
		}else {
			ExpenseServ.updateExpense(expense);
			return "redirect:/expenses";
		}
	}


	@DeleteMapping("/{id}")
	public String deleteBoook(@PathVariable("id") Long id) {
		ExpenseServ.deleteExpense(id);
		return "redirect:/expenses";
	}
	
	
	@GetMapping("/{id}")
	public String showOneExpense(@PathVariable("id") Long id, Model m) {
		

		if(ExpenseServ.findExpenseById(id) !=null) {
			m.addAttribute("oneExpense", ExpenseServ.findExpenseById(id));
			return "oneExpense.jsp";
		}else {
			return "redirect:/expenses";
		}
	}


}
