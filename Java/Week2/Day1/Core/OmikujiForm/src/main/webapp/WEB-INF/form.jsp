<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Send Omikuji!</h1>
	<form action="/omikuji/processForm" method="POST">
	
	pick any number from 5 to 25 <br>
	<input type="number" name="number" > <br>
	
	Enter the name of any real person <br>
	<input name="person" ><br>

	Enter the name of any city <br>
	<input name="city" ><br>
	
	Enter professional endeavor or hobby <br>
	<input name="hobby" ><br>
	
	Enter any type of a living thing <br>
	<input name="living" ><br>
	
	Say something nice to someone <br>
	<textarea name="description" ></textarea> <br>
	<br>
	
	<button>Send</button>
	
	</form>
</body>
</html>