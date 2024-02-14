<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>One Expense</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	<div class="d-flex justify-content-between">
		<h1 class="display-1">Expense Details</h1>
		<a href="/expenses"></a>

	</div>
	<table class="table table-borderless border border-3 border-dark">
		<tbody>
			<tr>
				<td></td>
				<td>Expense Name :</td>
				<td>${oneExpense.name}</td>
			</tr>
			<tr>
				<td></td>
				<td>Expense Description :</td>
				<td>${oneExpense.description}</td>
			</tr>
			<tr>
				<td></td>
				<td>Vendor :</td>
				<td>${oneExpense.vendor}</td>
			</tr>
			<tr>
				<td></td>
				<td>Amount S:</td>
				<td>$${oneExpense.amount}</td>
			</tr>
		</tbody>
	</table>
</body>
</html>

