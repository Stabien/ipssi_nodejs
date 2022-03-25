<template>
  <div>
    <homework-list user="TEACHER"/>
  </div>
</template>

<script>
import HomeworkList from "@/views/HomeworkList";
export default {
  name: 'TeacherHomeworks',
  components: {
    HomeworkList
  }
}
</script>

<style scoped>

</style>