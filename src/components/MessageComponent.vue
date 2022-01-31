<template>
  <div>
    <h1>{{ getMember(this.id) }} : {{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "MessageComponent",
  props: ['message', 'id'],
  methods : {
    getMember(id) {
      console.log(id)
      let member = this.$store.state.members.find(el => el.id === id)
      return member.fullname
    }
  }
}
</script>

<style scoped>

</style>