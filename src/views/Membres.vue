<template>
  <div class="container">
    <div v-for="membre in this.membres">
      <div class="box mt-3">
        <MembreComponent :membre="membre"/>
      </div>
    </div>
  </div>
</template>

<script>
import MembreComponent from "../components/MembreComponent";
export default {
  name: "Membres",
  components: {MembreComponent},
  mounted() {
    this.$api.get("/members").then(reponse => {
      this.membres = reponse.data
    })
  },
  data() {
    return{
      membres: [],
    }
  }
}
</script>

<style scoped>

</style>
