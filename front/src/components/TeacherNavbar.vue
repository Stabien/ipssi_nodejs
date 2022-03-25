<template>
  <v-app-bar
      color="#FF7F00"
      class="d-flex justify-center"
      app
  >
    <router-link to="/teacherDashboard" class="nav-item">Dashboard</router-link>
    <router-link to="/teacherHomeworks" class="nav-item">Devoirs</router-link>
    <router-link to="/teacherChat" class="nav-item">Contactez vos élèves</router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TeacherNavbar',
}
</script>

<style scoped>
.nav-item {
  text-decoration: none;
  color: white;
  margin-right: 30px;
}

</style>