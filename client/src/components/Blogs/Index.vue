<template>
	<div>
		<center><h5>MEOW-CLUB โลก ของ แมว</h5>
		<h1>เคล็ดลับ การเลี้ยงแมว แมวเปอร์เซีย แมว ไทย ของ คนรักแมว</h1></center>
		
		<p><img src="@/assets/a1.png"></p>

		<br><h4>แมว สัตว์เลี้ยงน่ารัก ที่หลายท่านต้องการเลี้ยง แต่ความเป็นจริงแล้ว ก่อนที่จะ เลี้ยงแมว สักตัว จะต้องหา ข้อมูล การเลี้ยงแมว
				 ให้มากที่สุดก่อน เว็บ Meow-club แหล่งรวมความรู้ เรื่อง แมว ที่ ทาสแมว ต้องรู้ ไม่ว่าจะเป็น ข้อมูลพื้นฐาน สายพันธุ์แมว
				  แมวเปอร์เซีย แมวไทย แมวสายพันธุ์อื่นๆ เทคนิค วิธีดูแลแมว ตั้งแต่ แมวเด็ก จนถึง แมวโต โรคแมว ที่ต้องระวัง
				   นอกจากนี้ยังมี รีวิว อุปกรณ์เลี้ยงแมว บ้านแมว กระบะทรายแมว ของเล่นแมว และ อาหารแมว สูตรต่างๆ รวมไว้ที่นี่ที่เดียว
			</h4>	   

			    <center><br><h4>▪ สายพันธุ์แมว แมวเปอร์เซีย แมวไทย</h4></center>
				<center><br><h4>▪ การเลี้ยงแมว วิธีการดูแลแมว โรคแมว</h4></center>   
				<center><br><h4>▪ รีวิว บ้านแมว กระบะทรายแมว ของเล่นแมว</h4></center>


		<p><button v-on:click="logout">Logout</button></p>
		<h4>จํานวน blog {{ blogs.length }}</h4>
		<p><button v-on:click="navigateTo('/blog/create')">สร้าง blog</button></p>
		<div v-for="blog in blogs" v-bind:key="blog.id">
			<p>id: {{ blog.id }}</p>
			<p>title: {{ blog.title }}</p>
			<p>content: {{ blog.content }}</p>
			<p>category: {{ blog.category }}</p>
			<p>status: {{ blog.status }}</p>
			<p>
				<button v-on:click="navigateTo('/blog/' + blog.id)">ดู blog</button>
				<button v-on:click="navigateTo('/blog/edit/' + blog.id)">
					แก้ไข blog
				</button>
				<button v-on:click="deleteBlog(blog)">ลบข้อมูล</button>
			</p>
			<hr />
		</div>
	</div>
</template>
<script>
import BlogsService from "@/services/BlogsService";
export default {
	data() {
		return {
			blogs: [],
		};
	},
	async created() {
		this.blogs = (await BlogsService.index()).data;
	},
	methods: {
		logout() {
			this.$store.dispatch("setToken", null);
			this.$store.dispatch("setBlog", null);
			this.$router.push({
				name: "login",
			});
		},
		navigateTo(route) {
			this.$router.push(route);
		},
		async deleteBlog(blog) {
			let result = confirm("Want to delete?");
			if (result) {
				try {
					await BlogsService.delete(blog);
					this.refreshData();
				} catch (err) {
					console.log(err);
				}
			}
		},
		async refreshData() {
			this.blogs = (await BlogsService.index()).data;
		},
	},
};
</script>
<style scoped>
</style>
