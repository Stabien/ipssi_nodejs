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
      passwordInput: ''
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
        method: 'POST',
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(response => {
        if (response.role) {
          localStorage.setItem('userId', response.id);
          localStorage.setItem('userRole', response.role);
          if (response.role === 'STUDENT') {
            this.$router.push('/studentDashboard')
          } else {
            this.router.push('/teacherDashboard')
          }
        } else {
          console.log(response);
        }
      })
    }
  }
}
</script>

<style scoped>
</style>