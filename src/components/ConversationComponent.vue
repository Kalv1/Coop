<template>
  <div>
    <h1>{{ label }}</h1>
    <p> {{ topic }}</p>
    <p> {{ datecrea }}</p>
  </div>
</template>

<script>
export default {
  name: "ConversationComponent",
  props: ['label', 'topic', 'datecrea']
}
</script>

<style scoped>

</style>
