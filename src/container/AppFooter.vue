<template>
  <footer class="fixed-bottom bg-light">
    <div class="container-fluid">
      <strong class="contact-text">Contact us to contribute: info@deelab.co</strong>
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
