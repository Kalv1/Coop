<template>
  <div class="container box">
      <h3 class="title is-3">Création d'une conversation</h3>
      <form @submit.prevent="validation">
        <label class="label">Label : </label>
        <input type="text" class="input" placeholder="Label de la conversation" required v-model="label">
        <label class="label mt-2">Texte :</label>
        <input type="text" class="input" placeholder="Texte de la conversation" required v-model="topic">
        <button class="button is-primary mt-3">Valider</button>
      </form>
  </div>
</template>

<script>
export default {
  name: "CreationConv",
  data () {
    return {
      label : '',
      topic : '',
    }
  },
  methods : {
    validation(){
      if(this.label && this.topic) {
        this.$api.post('channels', {
          label : this.label,
          topic : this.topic
        }).then(response => {
          console.log(response.data)
          this.$router.push('/')
        }).catch( error => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
