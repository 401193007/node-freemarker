<#include "/common/header.ftl">	
	<#-- 模板 + 数据模型 = 输出 -->
	<h1>Welcome ${name}!</h1>
	<p>
		${age} 
		<#if age lt average >
			you are too young!
		<#else>
			you are too old!	
		</#if>
	</p>
	<a href="${latestProduct.url}">${latestProduct.name}</a>
<#include "/common/footer.ftl">