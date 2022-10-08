<template>
	<div>
		<section>
			<BODY BACKGROUND="a3.png"> </BODY>  
		<center><p><img src="@/assets/a2.png" width="100" height="100"></p></center>
	    </section>
		<div class="nv-navbar">
			<ul class="nav">
				<li><router-link :to="{ name: 'blogs' }">หน้าเเรก</router-link></li>
				<li><router-link :to="{ name: 'users' }">สายพันธ์ุเเมว</router-link></li>
				<li><router-link :to="{ name: 'comments' }">อุปกรณ์การเลี้ยงเเมว</router-link></li>
				<li><router-link :to="{ name: 'login' }">การเลี้ยงเเมว</router-link></li>
				<li><router-link :to="{ name: 'blogs' }">ติดต่อเรา</router-link></li>
			</ul>
			<div class="clearfix" />
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.nv-navbar {
	background-color: rgb(50, 208, 171);
	width: 100%;
	padding: 10px 0px 10px 0px;
}
.nv-navbar .nav {
	list-style: none;
	margin: 0;
	padding: 0;
	float: left;
}
.nv-navbar .nav li {
	float: left;
}
.nv-navbar .nav li a {
	padding: 10px;
	text-decoration: none;
	color: rgb(255, 255, 255);
	font-weight: bold;
}
.nv-navbar .nav li a:hover {
	padding: 10px;
	text-decoration: none;
	color: rgb(255, 255, 255);
}
.nv-navbar .nav li a.router-link-active {
	background-color: rgb(226, 136, 97);
	color: rgb(255, 255, 255);
}
.clearfix {
	clear: left;
}
</style>
