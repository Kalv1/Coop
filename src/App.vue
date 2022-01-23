<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>


<script>
import Header from "./components/Header";
export default {
  components: {Header},
  mounted() {
    this.$api.get('ping');
  }
}
</script>

<style lang="scss">

</style>
