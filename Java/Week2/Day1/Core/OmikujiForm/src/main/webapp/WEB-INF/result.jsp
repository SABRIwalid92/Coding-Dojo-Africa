<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Here's Your Omikuji!</h1>
	<h3>
		In ${number} years, you will live in ${city} with ${person} as your
		roommate, ${hobby} for a living. <br> The next time you see a
		${living}, you will have a good luck. <br> Also, ${description}.
		<br>
	</h3>
	<a href="/omikuji">Go Back</a>
</body>
</html>