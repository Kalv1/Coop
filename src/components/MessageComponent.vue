<template>
  <div>
    <div v-if="this.member" class="is-flex">
      <img class='mr-2' :src="mailtoMD5" width="20" height="20" alt="">
      <h1><strong><router-link :to="{ name:'MembreProfil' , params:{ id: this.id }}">{{ member.fullname }}</router-link></strong> : {{ message }}</h1>
    </div>
    <div v-else>
        <h1>Deleted user : {{ message }}</h1>
    </div>

  </div>
</template>

<script>
import md5 from "crypto-js/md5";

export default {
  name: "MessageComponent",
  props: ['message', 'id'],
  data() {
    return {
      member: {},
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

</style>