<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App', 
  beforeCreate(){
    this.$store.dispatch('fetchLoggedInUserId')
    let userRole = this.$store.getters.userRole
    let userId = this.$store.getters.userId 
    if ((userRole == null || userRole == '') && userId != null){
        this.$store.dispatch('fetchUser', {'userId': userId}).then(() => {
        console.log('session created')
      }).catch((e) => {
        console.log('session lost: ' + e)
      })
    }
    }
}
</script>

<style lang="scss">
  // $fa-font-path: '~font-awesome/fonts/';
  // @import '~font-awesome/scss/font-awesome.scss';
  // Import Main styles for this application
  @import 'assets/scss/main';
  // data
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
