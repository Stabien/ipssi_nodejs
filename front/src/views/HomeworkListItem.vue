<template>
  <div>
    <v-card class="">
      <template>
        <v-card-title>{{homeworkTitle}}</v-card-title>
        <v-card-subtitle class="d-flex">{{homework.date}}</v-card-subtitle>
      </template>
      <v-card-text class="d-flex flex-column align-start">
        <div class="my-4 text-subtitle-1">
          Note: {{homework.note || 'Non noté'}}
        </div>
        <div
            class="my-4 text-subtitle-1"
            v-bind:class="{'font-italic': !isCommented }"
        >
          Commentaires: {{homework.comments || 'À remplir'}}
        </div>
      </v-card-text>
      <v-card-actions>
        <template>
          <v-btn
              text
              color="primary"
              @click="openFormDialog"
          >
            <v-icon small>
              {{isCorrected ? 'mdi-pencil' : 'mdi-plus-circle'}}
            </v-icon>
            {{ isCorrected ? 'Modifier' : 'Noter' }}
          </v-btn>
        </template>
      </v-card-actions>
    </v-card>
    <template>
      <v-dialog
          v-model="showFormDialog"
          width="500"
      >
        <v-card>
          <v-card-title class="text-h5">
            {{isCorrected ? 'Modifier une note' : 'Ajouter une note'}}
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <v-form
                ref="noteForm"
                v-model="isValidForm"
            >
              <v-text-field
                  v-model="note"
                  required
                  label="Note"
                  :counter="8"
                  :rules="noteRules"
                  autofocus
              />

              <v-textarea
                  v-model="comments"
                  solo
                  name="comments"
                  label="Comments"
              />

            </v-form>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                :disabled="!isValidForm"
                color="primary"
                @click="submit"
            >
              Enregistrer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </div>
</template>

<script>
export default {
  name: 'HomeworkListItem',
  props: {
    homework: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      showFormDialog: false,
      isValidForm: false,
      note: '',
      comments: '',
      noteRules: [
        v => !!v || 'Note is required',
        v => (v && v.length <= 8) || 'The note must be less than 8 characters',
        v => /^\d{2}\d{0,2}\/\d{1,2}$/.test(v) || /^\d{2}[.,]\d{0,2}\/\d{1,2}$/.test(v) || 'This note is not valid',
      ],
    }
  },
  computed: {
    homeworkTitle() {
      return `${this.homework.firstname} ${this.homework.firstname} - ${this.homework.subject}`;
    },
    isCommented() {
      return this.homework.comments !== '';
    },
    isCorrected() {
      return this.homework.note !== '';
    }
  },
  methods: {
    openFormDialog() {
      return this.showFormDialog = true;
    },
    closeFormDialog() {
      return this.showFormDialog = false;
    },

    submit() {
      axios({
        method: 'put',
        url: '', //TODO Ajouter la bonne route
        data: {
          note: this.note,
          comments: this.comments,
        }
      });
      this.closeFormDialog();
    },
  }
}
</script>

<style scoped>

</style>