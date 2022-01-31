<template>
  <div class="container">
    <div class="box">
      <h4 class="title is-4">Conversation : {{ this.topic.label }}</h4>
      <h5 class="subtitle is-5 mt-5">{{ this.topic.topic }}</h5>
    </div>
    <div v-for="rep in response" class="box ml-5">
      <MessageComponent :message="rep.message" :id="rep.member_id"/>
    </div>
    <textarea class="textarea" placeholder="Ecrivez votre messages ici" rows="10" v-model="message"/>
    <button @click="sendMessage" class="button is-primary mt-2">Envoyer</button>
  </div>
</template>

<script>
import MessageComponent from "@/components/MessageComponent";
export default {
  name: "Conversation",
  components: {MessageComponent},
  data() {
    return {
      topic : {},
      response: {},
      message : '',
    }
  },
  methods : {
    sendMessage(){
      this.$api.post(`/channels/${this.topic.id}/posts`, {
        channel_id : this.topic.id,
        member_id : this.$store.state.membre.id,
        message : this.message,
      }).then(response => {
        this.response.push(response.data)
        this.message = ''
      })
    },
  },
  created() {
    this.$api.get(`/channels/${this.$route.params.id}`).then(response => {
      this.topic = response.data
    })
    this.$api.get(`/channels/${this.$route.params.id}/posts`).then(response => {
      this.response = response.data
      this.response = this.response.reverse()
    })
  }
}
</script>

<style scoped>

</style>
