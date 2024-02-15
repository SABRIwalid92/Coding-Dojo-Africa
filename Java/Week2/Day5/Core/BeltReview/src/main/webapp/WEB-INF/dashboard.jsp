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
<title>Title</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	${oneProject.lead.id == user_id}
	<h1>welcome, ${loggedinUser.userName}</h1>
	<a href="/logout">Logout</a>
	<br />
	<a href="/projects/new">+ new Project</a>
	<br />
	<h2>All Porjects</h2>
	<table>
		<thead>
			<tr>
				<th>Project</th>
				<th>Team Lead</th>
				<th>Due Date</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${allProjects}" var="oneProject">
				<c:if test="${oneProject.lead.id == user_id}">
					<tr>
						<td>${oneProject.title}</td>
						<td>${oneProject.lead.userName}</td>
						<td>${oneProject.dueDate}</td>
					</tr>
				</c:if>
			</c:forEach>
		</tbody>
	</table>
	<table>
		<thead>
			<tr>
				<th>Project</th>
				<th>Team Lead</th>
				<th>Due Date</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${allProjects}" var="oneProject">
				<c:if test="${oneProject.lead.id != user_id}">
					<tr>
						<td>${oneProject.title}</td>
						<td>${oneProject.lead.userName}</td>
						<td>${oneProject.dueDate}</td>
						<td><a href="/projects/edit/${oneProject.id}">Edit</a></td>
					</tr>
				</c:if>
			</c:forEach>
		</tbody>
	</table>

</body>
</html>

