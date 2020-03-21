<template>
  <footer class="bg-light footer-container">
    <p class="contact-text">Contact us and contribute: info@deelab.co</p>
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

  .footer-container{
    flex: 0 0 0 50px;
    padding: 0.1rem;
    display: flex;
  }

  .contact-text{
    padding: 1rem;
    font-weight: 600;
  }

</style>
