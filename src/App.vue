<template>
    <div class="container">   
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">              
        <router-view></router-view>
    </div>
</template>

<script>
    import Home from './components/Home.vue'

    export default {
        name: 'app',
        components: {  
            appHome: Home
        },
        data (){
            return{

            }
        }
    }


  
</script>

<style>

</style>
