<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
          COVID-CO
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
  </nav>
</template>

<script>

export default {
    name: 'app_header',
    data(){
        return{
        }
    }
}
</script>

<style>
/* Style the navigation bar */
.navbar {
  width: 100%;
}

/* Navbar links */
.navbar a {
  float: left;
  text-align: center;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
}

/* Navbar links on mouse-over */
.navbar a:hover {
  background-color: #ced2d8;
}

.header{
    text-align: center;

}
</style>
