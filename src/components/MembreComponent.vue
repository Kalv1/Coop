<template>
    <div class="is-flex is-justify-content-space-between">
      <div>
        <h1>{{ membre.fullname }}</h1>
        <p>{{ membre.email }}</p>
      </div>
      <div class="is-flex">
        <router-link :to="{ name:'MembreProfil' , params:{ id: membre.id }}"><button class="button is-primary mr-2">Profil</button></router-link>
        <button v-if="membre.id !== this.$store.state.membre.id" class="button is-primary" @click="deleteUser">Supprimer</button>
      </div>
    </div>
</template>

<script>
export default {
  name: "MembreComponent",
  props: ["membre"],
  data() {
    return {
      id : this.$props.membre.id
    }
  },
  methods : {
    deleteUser() {
      this.$api.delete(`/members/${this.id}`).then(response => {
        this.$emit('refreshMembers', this.id)
      })
    }
  }
}
</script>

<style scoped>

</style>
