<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(homework, index) in homeworks"
        :key="index"
        lg="3"
        md="4"
        sm="6"
        cols="12"
      >
        <homework-list-item :homework="homework"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeworkListItem from './HomeworkListItem';

export default {
  name: 'HomeworksList',
  components: { HomeworkListItem },
  mounted() {
    this.$store.dispatch('initializeHomeworks')
  },
  computed: {
    homeworks() {
      return this.$store.getters.homeworks
    }
  }
}
</script>

<style scoped>

</style>