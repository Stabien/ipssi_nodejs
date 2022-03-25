<template>
  <div>
    <h1>Liste de vos devoirs</h1>
    <homework-list user="STUDENT" class="homework-list"/>
    <v-btn @click="displayModal" class="button-add-homework mt-10">Ajouter un devoir</v-btn>
    <v-dialog width="500" v-model="isModalDisplayed">
      <v-card>
        <v-card-actions class="pa-10">
          <v-row>
            <v-col cols="12">
              <h3>Ajouter un devoir</h3>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="documentName" outlined label="Nom du document"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select v-model="documentSubject" outlined label="Sélectionnez une matière" :items="subjects">
              </v-select>
            </v-col>
            <v-col cols="12">
              <v-btn class="justify-center" @click="hideModal">Envoyer</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import HomeworkList from '../HomeworkList';

export default {
  name: 'StudentHomeworks',
  components: {
    HomeworkList
  },
  data() {
    return {
      isModalDisplayed: false,
      subjects: [
          'Français',
          'Anglais',
          'Mathématiques',
          'Histoire',
          'Géographie',
          'Sport'
      ],
      documentName: '',
      documentSubject: ''
    }
  },
  methods: {
    displayModal() {
      this.isModalDisplayed = true;
    },
    hideModal() {
      this.isModalDisplayed = false;
      const body = {
        user_id: localStorage.getItem('userId'),
        subject: this.documentSubject,
        firstName: localStorage.getItem('userFirstname'),
        lastName: localStorage.getItem('userLastname')
      }
      fetch('http://localhost:4000/homeworks', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(body)
      })
      .then(() => this.$store.dispatch('initializeHomeworks'));
      this.documentSubject = '';
      this.documentName = '';
    }
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