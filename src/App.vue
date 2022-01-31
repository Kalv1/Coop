<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>


<script>
import Header from "./components/Header";
export default {
  components: {Header},
  mounted() {
    this.$store.commit("setReady", false);
    this.$api.get('ping');
    if(!this.$store.state.token) {
      this.connexion()
    } else {
      this.$api.get(`members/${this.$store.state.membre.id}/signedin`)
          .then(this.demarrer)
          .catch(this.connexion)
    }
  },
  methods : {
    demarrer() {
      this.$api.get('members').then(response => {
        this.$store.commit("setMembers", response.data)
        this.$store.commit("setReady", true)
      })
    },
    connexion() {
      this.$store.commit("storeToken", '')
      this.$router.push('/connexion')
      this.$store.commit("setReady", true)
    }
  }
}
</script>

<style lang="scss">

</style>
