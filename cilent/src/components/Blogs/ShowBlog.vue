<template>
	<div>
		<h1>ข้อมูลสายพันธ์ุเเมว</h1>
		<form v-on:submit.prevent="editBlog">
		    <p>ชื่อสายพันธุ์: {{ blog.title }}</p>
		    <p>ลักษณะนิสัย: {{ blog.category }}</p>
		    <p>ราคา: {{ blog.status }} บาท</p>
            <p>รูปภาพ: </p>
			    
		    <div class="blog-pig">
				<Transition name="fade">
			        <div class="thumbnail-pic" v-if="blog.thumbnail != 'null'">
					  <img :src="BASE_URL+blog.thumbnail" alt="thumbnail">
					</div>  
				</Transition>
			</div>
			<br>
			<br>
			<br>
			<br>
			<br>

			<p>
			  <button v-on:click="navigateTo('/blog/edit/' + blog.id)">แก้ไขข้อมูล</button>
			  <button v-on:click="deleteBlog(blog)"> ลบข้อมูล </button>
			  <button v-on:click="navigateTo('/blogs')">กลับ</button>
		    </p>
        </form>
	</div>
</template>

<script>
import BlogsService from "@/services/BlogsService";
import VueCkeditor from 'vue-ckeditor2'

export default {
	data() {
		return {
			BASE_URL: "http://localhost:8081/assets/uploads/",
			blog: {
				title: "",
				thumbnail: "null",
				pictures: "null",
				content: "",
				category: "",
				comment: "",
				status: "",
			},

		    config:{
			    toolbar: [
				    {
				        name: "document",
				        items: [
						    "Source",
						    "-",
						    "Save",
						    "NewPage",
						    "Preview",
						    "Print",
						    "-",
						    "Templates",
					    ],
				    },

				    {
					    name: "clipboard",
					    items: [
						    "Cut",
						    "Copy",
						    "Paste",
					     	"PasteText",
					    	"PasteFromWord",
					    	"-",
						    "Undo",
						    "Redo",
					    ],
				    },

				    {
					    name: "editing",
					    items: ["Find", "Replace", "-", "SelectAll", "-", "Scayt"],
				    },

					{
						name: "forms",
						items: [
							"Form",
							"Checkbox",
							"Radio",
							"TextField",
							"Textarea",
							"Select",
							"Button",
							"ImageButton",
							"HiddenField",
						],
					},
					"/",

					{
						name: "basicstyles",
						items: [
							"Bold",
							"Italic",
							"Underline",
							"Strike",
							"Subscript",
							"Superscript",
							"-",
							"CopyFormatting",
							"RemoveFormat",
						],
					},

					{
						name: "paragraph",
						items: [
							"NumberedList",
							"BulletedList",
							"-",
							"Outdent",
							"Indent",
							"-",
							"Blockquote",
							"CreateDiv",
							"-",
							"JustifyLeft",
							"JustifyCenter",
							"JustifyRight",
							"JustifyBlock",
							"-",
							"BidiLtr",
							"BidiRtl",
							"Language",
						],
					},
					{ name: "links", items: ["Link", "Unlink", "Anchor"] },

					{
						name: "insert",
						items: [
							"Image",
							"Flash",
							"Table",
							"HorizontalRule",
							"Smiley",
							"SpecialChar",
							"PageBreak",
							"Iframe",
							"InsertPre",
						],
					},
					"/",
					{ name: "styles", items: ["Styles", "Format", "Font", "FontSize"] },
					{ name: "colors", items: ["TextColor", "BGColor"] },
					{ name: "tools", items: ["Maximize", "ShowBlocks"] },
					{ name: "about", items: ["About"] },
				],
				height: 300
			}
		};
	},

	async created() {
		try {
			let blogId = this.$route.params.blogId;
			this.blog = (await BlogsService.show(blogId)).data;
		}catch (error) {
			console.log(error);
		}
	},

	methods: {
		navigateTo(route) {
			this.$router.push(route);
		},

        async editBlog() {
			try {
				await BlogsService.put(this.blog);
				this.$router.push({
					name: "blogs",
				});
			}catch (err) {
				console.log(err);
			}
		},

		async deleteUser(user){
            let result = confirm("Want to delete")
            if(result){
                try{
                    await UsersService.delete(user)
                    this.refreshData()
                }catch(error){
                    console.log(error)
                }
            }
        },

        async deleteBlog (blog) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await BlogsService.delete(blog)
                    this.refreshData()
                }catch (err) {
                    console.log(err)
                }
            }
        },

		async refreshData () {
            this.users = (await UsersService.index()).data
        },

        async refreshData() {
            this.blogs = (await BlogsService.index()).data
        }
	},

	components:{
		VueCkeditor
	}	
};
</script>

<style scoped>
</style>
