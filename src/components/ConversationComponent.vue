<template>
  <div v-if="display" class="is-flex is-justify-content-space-between box mt-5">
    <router-link :to="{ name:'ConversationDetails' , params:{ id: this.id }}" style="text-decoration: none; color: inherit;">
      <div>
        <h1>{{ label }}</h1>
        <p> {{ topic }}</p>
      </div>
    </router-link>
    <div>
      <button class="button" @click=""><i class="fas fa-edit"></i></button>
      <button class="button" @click="deleteTopic"><i class="fas fa-trash-alt"></i></button>
    </div>
  </div>

</template>

<script>
export default {
  name: "ConversationComponent",
  props: ['label', 'topic', 'id'],
  data() {
    return {
      display : true
    }
  },
  methods : {
    deleteTopic(){
      this.$api.delete(`/channels/${this.id}`)
      this.display = false
    }
  }
}
</script>

<style scoped>

</style>
