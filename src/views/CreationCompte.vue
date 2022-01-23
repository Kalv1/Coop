<template>
  <div class="container box">
    <h3 class="title is-3">Création de compte</h3>
    <div>
      <form @submit.prevent="validation">
        <div class="field">
          <label class="label">Fullname :</label>
          <div class="control">
            <input class="input" type="text" placeholder="Andrew Shepard" required v-model="fullname">
          </div>
        </div>
        <div class="field">
          <label class="label">Email :</label>
          <div class="control">
            <input class="input" type="text" placeholder="email@exemple.com" required v-model="email">
          </div>
        </div>
        <div class="field">
          <label class="label">Password :</label>
          <div class="control">
            <input class="input" type="password" placeholder="password" required v-model="password">
          </div>
        </div>
        <div class="field">
          <label class="label">Confirmation du Password :</label>
          <div class="control">
            <input class="input" type="password" placeholder="confirmation" required v-model="verifpassword">
          </div>
        </div>
        <div v-if="this.state" class="notification is-danger">
          {{ this.state }}
        </div>
        <button class="button">Valider</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreationCompte",
  data() {
    return {
      fullname: '',
      email: '',
      password: '',
      state : '',
      verifpassword : '',
    }
  },
  methods: {
    validation() {
      if(this.password === this.verifpassword) {
        this.$api.post('members', {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
        }).then(response => {
          console.log(response);
          this.state = 'Votre compte à été crée avec succès !'
          this.$router.push('/connexion')
        }).catch(error => {
          this.state = error.response.data.message
          alert(error.response.data.message)
        })
      } else {
        this.state = 'Merci de re-écrire votre mots de passe ils ne correspondent pas'
      }
    }
  }
}
</script>

<style scoped>

</style>
