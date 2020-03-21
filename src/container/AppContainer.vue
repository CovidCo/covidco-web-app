<template>
  <div>
    <AppHeader/>
    <div class="app-body">
      <div class="body container">
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

  .app-body{
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
    flex-grow: 1;
    overflow-x: hidden;
    margin-bottom: 1rem;
    min-height: 100vh;
  }

</style>
