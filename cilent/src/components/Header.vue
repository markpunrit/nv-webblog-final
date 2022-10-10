<template>
  <div>
    <center>
      <p>
      <img src="@/assets/a2.png" width="100" height="100">
    </p>
  </center>
    
    <div class="nv-navbar">
      <ul class="nav">
        <li><router-link :to="{ name: 'blogs' }"> เเมว </router-link></li>
        <li><router-link :to="{ name: 'comments' }"> สายพันธุ์เเมว </router-link></li>
        <li><router-link :to="{ name: 'users' }"> Users </router-link></li>
        <li><router-link :to="{ name: 'login' }"> Login </router-link></li>
        <li><a v-on:click.prevent="logout" href="#"> Logout </a></li>  
      </ul>
      <div class="clearfix"></div>
    </div>
  </div> 
</template>

<script>

export default {
  methods:{
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
         name: 'login'
      })
    }
  }
}
</script>

<style scoped>
.nv-navbar {
  background-color: #39fce2;
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
  color: #fffefd;
  font-weight: bold;
}
.nv-navbar .nav li a:hover {
  padding: 10px;
  text-decoration: none;
  color: rgb(251, 246, 246);
}
.nv-navbar .nav li a.router-link-active {
  background-color: #facd06;
  color: rgb(251, 251, 251);
}
.clearfix {
  clear: left;
}
</style>