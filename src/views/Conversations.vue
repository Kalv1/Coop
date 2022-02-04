<template>
  <div class="container p-3">
    <router-link to="/creationconv"><button class="button is-primary">Créer une conversation</button></router-link>
    <p class="mt-3 mb-3">Connecté en tant que : <strong>{{ this.$store.state.membre.fullname }}</strong></p>
    <template v-for="conv in convs">
      <ConversationComponent :label="conv.label" :topic="conv.topic" :id="conv.id" />
    </template>
  </div>
</template>

<script>
import ConversationComponent from "@/components/ConversationComponent";

export default {
  name: "Conversations",
  components: {ConversationComponent},

  data() {
    return {
      convs: [],
    }
  },
  mounted() {
    if (!this.$store.state.token) {
      this.$router.push('connexion')
    }
    this.$api.get('channels').then(response => {
      this.convs = response.data
    })
  }
}
</script>

<style scoped>

</style>
