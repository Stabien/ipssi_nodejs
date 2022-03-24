<template>
  <v-app id="app">
    <student-navbar v-if="auth === 'STUDENT'"/>
    <teacher-navbar v-if="auth === 'TEACHER'"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import StudentNavbar from './components/StudentNavbar';
import TeacherNavbar from './components/TeacherNavbar';

export default {
  name: 'App',
  components: {
    StudentNavbar,
    TeacherNavbar
  },
  data() {
    return {
      auth: 'STUDENT'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
