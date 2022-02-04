<template>
  <transition name="fade">
  <div v-if="display" class="box ml-5">
    <div v-if="this.member">
      <div class="is-flex">
        <img class='mr-2' :src="mailtoMD5" width="20" height="20" alt="">
        <h1><strong><router-link :to="{ name:'MembreProfil' , params:{ id: this.id }}">{{ member.fullname }}</router-link></strong> : </h1>
        <button v-if="id === this.$store.state.membre.id" class="ml-2 button is-small" @click="edit = !edit"><i class="fas fa-edit"></i></button>
        <button v-if="id === this.$store.state.membre.id" class="ml-2 button is-small" @click="deleteMsg"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="mt-3">
        <span v-html="messageNoEdit"/>
      </div>

    </div>
    <div v-else>
        <h1>Deleted user : {{ message }}</h1>
    </div>
    <div v-if="edit === true">
      <textarea class="textarea mt-5" placeholder="Ecrivez votre messages ici" rows="10" v-model="messageEdit"/>
      <button @click="sendEdit" class="button is-primary mt-2">Envoyer</button>
    </div>
  </div>
  </transition>
</template>

<script>
import md5 from "crypto-js/md5";

export default {
  name: "MessageComponent",
  props: ['message', 'id', 'idmsg'],
  data() {
    return {
      messageNoEdit : this.message,
      member: {},
      edit: false,
      display : true,
      messageEdit : '',
    }
  },
  methods : {
    deleteMsg(){
      this.$api.delete(`channels/${this.$route.params.id}/posts/${this.idmsg}`)
      this.display = false
    },
    sendEdit(){
      this.$api.put(`/channels/${this.$route.params.id}/posts/${this.idmsg}`, {message : this.messageEdit}).then(response => {
        this.messageNoEdit = this.messageEdit
        this.messageEdit = ''
        this.edit = false
      })
    }
  },
  mounted() {
      this.member = this.$store.state.members.find(el => el.id === this.id)
  },
  computed: {
    mailtoMD5() {
      let res = md5(this.member.email).toString()
      return 'https://www.gravatar.com/avatar/' + res + '?d=identicon'
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
