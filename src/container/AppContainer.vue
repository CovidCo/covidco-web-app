<template>
  <div>
    <AppHeader/>
    <div class="app-body">
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
    name: 'AppContainer',
    data(){
        return{
        }
    },
    components: {
      AppHeader,
      AppFooter
    }
}
</script>

<style>

</style>
