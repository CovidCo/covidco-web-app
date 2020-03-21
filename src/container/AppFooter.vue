<template>
  <footer class="bg-light footer-container">
    <p class="contact-text">Contact us and contribute: info@deelab.co</p>
    <a class="terms-text" v-on:click="openInBlankPage('terms')">Términos y Condiciones</a>
  </footer>
</template>

<script>

export default {
    name: 'app_footer',
    data(){
        return{
        }
    },
    methods: {
      openInBlankPage: function(page){
        if(page == 'terms'){
          let route = this.$router.resolve({path: '/terms'});
          window.open(route.href, '_blank');
        }
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

  .terms-text{
    padding: 1rem;
  }

</style>
