<template>
  <v-container>
    <v-switch
        v-model="isCorrectedHomeworks"
        input-value=true
        inset
        label="Devoirs corrigés"
    ></v-switch>
    <v-row>
      <v-col
        v-for="(homework, index) in (homeworksChoice)"
        :key="index"
        lg="4"
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
  components: {
    HomeworkListItem
  },
  mounted() {
    this.$store.dispatch('initializeHomeworks');
  },
  data () {
    return {
      isCorrectedHomeworks: false,
    }
  },
  computed: {
    homeworksChoice() {
      const uncorrectedHomeworks = this.$store.getters.homeworks.filter(h => h.note === '');
      const correctedHomeworks = this.$store.getters.homeworks.filter(h => h.note !== '');

      return this.isCorrectedHomeworks ? correctedHomeworks : uncorrectedHomeworks
    }
  }
}
</script>

<style scoped>

</style>