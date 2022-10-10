<template>
    <div>  
        <center>
            <p>
                <img src="@/assets/a1.png" width="304" height="228">
            </p>
        </center>

        <h2> เเมวสายพันธุ์ต่างๆ </h2>
        <!-- <p><button v-on:click="logout"> Logout </button></p> -->
        <h4> จำนวนเเมว {{blogs.length}} สายพันธุ์</h4>
        <div v-for="blog in blogs" v-bind:key="blog.id">
            <p>ชื่อสายพันธุ์: {{ blog.title }} </p>
            <p>ลักษณะนิสัย: {{ blog.category }} </p>
            <p>ราคา: {{ blog.status }}บาท </p>
            <p>
              <button v-on:click="navigateTo('/blog/'+ blog.id)"> แสดงข้อมูล </button> 
            </p>
            <hr>
        </div>
    </div>
</template>

<script>
import BlogsService from '@/services/BlogsService'
import UsersService from '@/services/UsersService'
import CommentsService from '@/services/CommentsService'

export default {
    data () {
        return { 
            blogs: []
        }
        return{
            comments: []
        }
         return{
            users: []
        }
    },
    
    async created () {
        this.blogs = (await BlogsService.index()).data
    },

    methods: {
         logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setBlog', null)
            this.$router.push({
                name: 'login'
            })
        }, 

        navigateTo (route) {
            this.$router.push(route)
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
    }
}
</script>

<style scoped>
</style>