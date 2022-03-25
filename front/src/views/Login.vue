<template>
  <v-row class="mt-16">
    <v-col cols="10" offset="1" md="6" offset-md="3">
      <v-form>
        <v-text-field
          outlined
          label="Adresse email"
          required
          :value="emailInput"
          @input="onEmailChange"
        >
        </v-text-field>
        <v-text-field
          outlined
          label="Mot de passe"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          required
          :value="passwordInput"
          @input="onPasswordChange"
        >
        </v-text-field>
        <v-btn @click="submit">connexion</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      emailInput: '',
      passwordInput: '',
      showPassword: false,
    }
  },
  methods: {
    onEmailChange(value) {
      this.emailInput = value;
    },
    onPasswordChange(value) {
      this.passwordInput = value;
    },
    submit() {
      const body = {
        email: this.emailInput,
        password: this.passwordInput
      }
      fetch('http://localhost:4000/users/authentication', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(response => {
        if (response.results[0].role) {
          localStorage.setItem('userId', response.results[0]._id);
          localStorage.setItem('userRole', response.results[0].role);
          localStorage.setItem('userFirstname', response.results[0].firstname);
          localStorage.setItem('userLastname', response.results[0].lastname);
          if (localStorage.getItem('userRole') === 'STUDENT') {
            this.$router.push('/studentHomeworks')
            console.log(this.$store.getters.userRole)
          } else {
            this.$router.push('/teacherHomeworks')
          }
        }
      })
    }
  }
}
</script>

<style scoped>
</style>