<template>
  <div class="container">
    <div class="is-flex box">
      <div>
        <img class='mr-5' :src="mailtoMD5" alt="">
      </div>
      <div>
        <h5 class="title is-5">Fullname : {{ this.membre.fullname }}</h5>
        <h5 class="title is-5">Email : {{ this.membre.email }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'crypto-js/md5';

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
  },
  computed: {
    mailtoMD5: function () {
      let res = md5(this.membre.email).toString()
      return 'https://www.gravatar.com/avatar/' + res + '?d=identicon'
    }
  }
}
</script>

<style scoped>

</style>
