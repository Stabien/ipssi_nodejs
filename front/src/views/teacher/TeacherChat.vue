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
      <v-list-group v-for="(values, name) in schoolClasses" :key=name >
        <template v-slot:activator>
          <v-list-item-title>{{name}}</v-list-item-title>
        </template>
        <v-list-item
            v-for="(value, index) in values"
            :key="index"
            link
        >
          <v-list-item-content>
            <v-list-item-title>{{value.firstname}} {{value.lastname}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'TeacherChat',

  computed: {
    schoolClasses() {
      return this.$store.getters.schoolClasses
    }
  }
}
</script>
