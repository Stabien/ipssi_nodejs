<template>
  <v-navigation-drawer
      class="home"
      absolute
      permanent
      left
  >
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/92.jpg">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Jane Smith</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list dense>
      <h1>Vos professeurs</h1>
      <v-list-item
          v-for="(value, index) in teachers"
          :key="index"
          link
      >
        <v-list-item-content>
          <v-list-item-title>{{value.firstname}} {{value.lastname}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'StudentChat',

  computed: {
    teachers() {
      return this.$store.getters.teachers
    },
  }
}
</script>
