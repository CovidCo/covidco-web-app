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

<style scoped>

  .footer-container{
    flex: 0 0 0 80px;
    padding: 0.1rem;
    display: flex;
  }

  .contact-text{
    padding: 0.2rem;
    font-size: 0.8rem;
    font-weight: 800;
    margin: 0;
    display: block;
  }

  .terms-text{
    padding: 0.2rem;
    font-size: 0.8rem;
  }


@media (max-width: 320px) {
  
  .contact-text{
    padding: 0.2rem;
    font-size: 0.6rem;
    font-weight: 800;
    margin: 0;
  }
  
  .terms-text{
    font-size: 0.5rem;
  }

}


</style>
