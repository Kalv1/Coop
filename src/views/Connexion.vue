<template>
  <div class="container box">
    <div>
      <form class="p-5" @submit.prevent="connexion">
        <div class="field">
          <label class="label">Email : </label>
          <div class="control">
            <input class="input" type="text" placeholder="email@exemple.com" required v-model="email">
          </div>
        </div>
        <div class="field">
          <label class="label">Password : </label>
          <div class="control">
            <input class="input" type="password" placeholder="password" required v-model="password">
          </div>
        </div>
        <div>
          <p class="mb-2"><router-link to="inscription">Créer un compte </router-link></p>
          <button class="button">Valider</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Connexion",
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods : {
    connexion() {
      this.$api.post('/members/signin', {
        email : this.email,
        password : this.password
      }).then(response => {
        console.log(response.data.member.email)
        this.$store.commit('storeToken', response.data.token)
        this.$store.commit('storeMembre', response.data.member)
        this.$router.push('/')
      }).catch(error => {
        alert(error.response.data.message)
      })
    }
  }
}
</script>

<style scoped>

</style>
