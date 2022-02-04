<template>
  <transition name="fade">
    <div v-if="display" class="box mt-5">
      <div class="is-flex is-justify-content-space-between">
        <router-link :to="{ name:'ConversationDetails' , params:{ id: this.id }}" style="text-decoration: none; color: inherit;">
          <div>
            <h1>{{ title }}</h1>
            <p> {{ desc }}</p>
          </div>
        </router-link>
        <div>
          <button class="button" @click="edit = !edit"><i class="fas fa-edit"></i></button>
          <button class="button" @click="deleteTopic"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
      <div v-if="edit === true">
        <textarea class="textarea mt-5" placeholder="Ecrivez le nom du topic" rows="1" v-model="newTopic"/>
        <textarea class="textarea mt-2" placeholder="Ecrivez le sujet du topic" rows="1" v-model="newLabel"/>
        <button @click="sendEdit" class="button is-primary mt-2">Envoyer</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ConversationComponent",
  props: ['label', 'topic', 'id'],
  data() {
    return {
      display : true,
      title : this.label,
      desc : this.topic,
      edit : false,
      newTopic : '',
      newLabel : '',
    }
  },
  methods : {
    deleteTopic(){
      this.$api.delete(`/channels/${this.id}`)
      this.display = false
    },
    sendEdit(){
      this.title = this.newLabel
      this.desc = this.newTopic
      this.$api.put(`/channels/${this.id}`, { topic: this.newTopic, label: this.newLabel})
      this.newTopic = ''
      this.newLabel = ''
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
