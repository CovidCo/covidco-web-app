<template>
  <footer class="fixed-bottom bg-light">
    <div class="container-fluid">
      <p class="contact-text">Contact us and contribute: info@deelab.co</p>
    </div>
  </footer>
</template>

<script>

export default {
    name: 'app_footer',
    data(){
        return{
        }
    }
}
</script>

<style>
  footer {
    position: fixed;
    height: 70px;
    bottom: 0;
    width: 100%;
  }

  .contact-text{
    margin-top: 5px;
    float: right;
    padding: 1rem;
  }

</style>
