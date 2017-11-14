<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Welcome!</title>
</head>
<body>
	<#-- 模板 + 数据模型 = 输出 -->
	<h1>Welcome ${user}!</h1>
	<p>
		${age} 
		<#if age lt average >
			you are too young!
		<#else>
			you are too old!	
		</#if>
	</p>
	<a href="${latestProduct.url}">${latestProduct.name}</a>
</body>
</html>