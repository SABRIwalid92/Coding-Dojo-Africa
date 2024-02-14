package com.lou.savetravels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lou.savetravels.models.Expense;
import com.lou.savetravels.repositories.ExpenseRepository;

@Service
public class ExpenseService {

	


	@Autowired
	private ExpenseRepository expenseRepo;
		
	public List<Expense> allExpenses(){
		return expenseRepo.findAll();
	}
		
	public Expense createExpense(Expense b) {
		return expenseRepo.save(b);
	}
		
	
	public Expense findExpenseById(Long id) {
		Optional<Expense> maybeExpense = expenseRepo.findById(id);
		return maybeExpense.isPresent()?maybeExpense.get():null;			
	}
		
	public Expense updateExpense(Expense b) {
		return expenseRepo.save(b);
	}
		
	public void deleteExpense(Long id) {
		expenseRepo.deleteById(id);
	}
}
