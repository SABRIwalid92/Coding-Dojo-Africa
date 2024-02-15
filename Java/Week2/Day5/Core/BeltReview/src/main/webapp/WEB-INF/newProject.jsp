<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
	<form:form action="/projects/processProject" method="post"
			modelAttribute="project">
			<form:errors path="*" />
			<p>
				<form:label path="title">Title</form:label>

				<form:input path="title" />
			</p>
			<p>
				<form:label path="description">Description</form:label>

				<form:textarea path="description" />
			</p>
			

			<p>
				<form:label path="dueDate">Due Date</form:label>

				<form:input type="date" path="dueDate" />
			</p>
			<button><a href="/dashboard">Cancel</a></button>
			<input type="submit" value="Submit" />
		</form:form>
</body>
</html>
