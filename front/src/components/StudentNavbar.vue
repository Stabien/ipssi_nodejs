<template>
  <v-app-bar
    app
    class="d-flex justify-center"
    color="#00B8FF"
  >
    <router-link class="nav-item" to="/studentHomeworks">Mes devoirs</router-link>
    <router-link class="nav-item" to="/studentChat">Contacter mes professeurs</router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  .nav-item {
    color: white;
    text-decoration: none;
    margin: 0 20px;
  }
</style>