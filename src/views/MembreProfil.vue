<template>
  <div class="container">
    <div class="is-flex box">
      <div>
        <img src="" alt="">
      </div>
      <div>
        <h5 class="title is-5">Fullname : {{ this.membre.fullname }}</h5>
        <h5 class="title is-5">Email : {{ this.membre.email }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MembreProfil",
  data() {
    return {
      membre : []
    }
  },
  created() {
    this.$api.get('https://allweb.fun/coop/api/members').then(response => {
      this.membre = response.data.find(el => {
        if(el.id === this.$route.params.id) {
          return el.id
        }
      })
    })
  }
}
</script>

<style scoped>

</style>
