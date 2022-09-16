<template>
  <Navbar/>
  
  <router-view class="container" />
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name:'App',
  components: {
    Navbar
  
  },
  mounted(){
    this.$store.commit("onStart")
  }
}
</script>


<style>
@import './assets/css/main.css';

#app {
-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
