<template>
  <div class="container">
    <div v-for="membre in this.membres">
      <div class="box mt-3">
        <MembreComponent v-on:refreshMembers="removeMembersData($event)" :membre="membre"/>
      </div>
    </div>
  </div>
</template>

<script>
import MembreComponent from "../components/MembreComponent";
export default {
  name: "Membres",
  components: {MembreComponent},
  beforeCreate() {
    if(!this.$store.state.token) {
      this.$router.push('connexion')
    }
  },
  mounted() {
    this.$api.get("/members").then(reponse => {
      this.membres = reponse.data
    })
  },
  data() {
    return{
      membres: [],
    }
  },
  methods : {
    removeMembersData(idDelete) {
      this.membres = this.membres.filter(membre => membre.id !== idDelete)
    }
  }
}
</script>

<style scoped>

</style>
