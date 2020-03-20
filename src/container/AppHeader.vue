<template>
    <b-navbar toggleable="lg" variant="light">
      <b-navbar-brand href="#"><strong>Covid-Co</strong></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!--
        <b-navbar-nav>
          <b-nav-item href="#">Sobre el proyecto </b-nav-item>
        </b-navbar-nav>
        -->
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Sobre el proyecto </b-nav-item>
          <!--
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>

export default {
    name: 'app_header',
    data(){
        return{
        }
    }
}
</script>

<style>

</style>
