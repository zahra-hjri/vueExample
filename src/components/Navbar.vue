<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light col-lg-7 mt-3">
    <a class="navbar-brand" href="#">
        <img src="./../assets/logo.png" class="w-50 m-auto" alt="logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">خانه</router-link>
        </li>
    
        <li class="nav-item">
          <router-link to="/login" class="nav-link">ثبت نام</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/map" class="nav-link">آدرس یاب</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/address" class="nav-link">آدرس ها</router-link>
        </li>
        
        
      </ul>
      
    </div>
  </nav>
</template>

<script>
export default {
    name:'Navbar',
}
</script>