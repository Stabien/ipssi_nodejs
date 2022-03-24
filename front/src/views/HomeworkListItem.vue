<template>
  <v-card>{{ homework }}</v-card>
</template>

<script>
export default {
  name: 'HomeworkListItem',
  props: {
    homework: {
      required: true,
      type: Number
    }
  }
}
</script>

<style scoped>

</style>