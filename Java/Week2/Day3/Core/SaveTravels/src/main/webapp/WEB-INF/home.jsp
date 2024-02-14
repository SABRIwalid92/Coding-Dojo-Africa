<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>SaveTravels</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

</head>
<body>
	<div class="container">
		<h1>Save Travels</h1>
		<!-- 		Display all Books -->
		${allExpenses  }
		<table class="table">
			<thead>
				<tr>
					<th>Expense</th>
					<th>Vendor</th>
					<th>Amount</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${allExpenses }" var="oneExpense">
					<tr>
						<td><a href="/expenses/${oneExpense.id}" >${oneExpense.name}</a>  </td>
						<td>${oneExpense.vendor}</td>
						<td>${oneExpense.amount} $</td>
						<td><a href="/expenses/edit/${oneExpense.id }">Edit</a>
							<form action="/expenses/${oneExpense.id}" method="post">
								<input type="hidden" name="_method" value="delete"> <input
									type="submit" value="Delete">
							</form></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		<hr>
		<!-- 		Add an expense -->
		<form:form action="/expenses/processExpense" method="post"
			modelAttribute="expense">
			<form:errors path="*" />
			<p>
				<form:label path="name">Expense Name: </form:label>

				<form:input path="name" />
			</p>
			<p>
				<form:label path="vendor">Vendor: </form:label>

				<form:input path="vendor" />
			</p>

			<p>
				<form:label path="amount">Amount: </form:label>

				<form:input type="number" path="amount" />
			</p>
			
			<p>
				<form:label path="description">Description: </form:label>

				<form:textarea path="description" />
			</p>
			<input type="submit" value="Submit" />
		</form:form>
	</div>
</body>
</html>