<template>
  <div>
    <h1>Liste de vos devoirs</h1>
    <homework-list class="homework-list" :data="homeworks"/>
  </div>
</template>

<script>
import HomeworkList from '../HomeworkList';

export default {
  name: 'StudentHomeworks',
  components: {
    HomeworkList
  }
}
</script>

<style scoped>
h1 {
  margin-top: 20px;
}
.homework-list {
  margin-top: 20px;
}
</style>