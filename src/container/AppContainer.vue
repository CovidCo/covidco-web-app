<template>
  <div>
    <AppHeader/>
    <div class="app-body">
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'

export default {
    name: 'AppContainer',
    data(){
        return{
        }
    },
    components: {
      AppHeader
    }
}
</script>

<style>

</style>
