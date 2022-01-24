<template>
</template>

<script>
export default {
  name: "Deconnexion",
  beforeCreate() {
    this.$api.delete('/members/signout').then(response => {
      console.log(response)
      this.$store.commit('clearData')
      this.$router.push('/connexion')
    })
  }
}
</script>

<style scoped>

</style>
