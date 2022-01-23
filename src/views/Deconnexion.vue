<template>
</template>

<script>
export default {
  name: "Deconnexion",
  beforeCreate() {
    window.localStorage.removeItem('vuex')
    this.$store.commit('clearData')
    this.$router.push('/connexion')
  }
}
</script>

<style scoped>

</style>
