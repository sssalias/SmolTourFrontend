<template>
  <Header></Header>
  <div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Header from "@/components/layout/Header.vue";

export default defineComponent({
  components: {Header},
  setup() {


    return {}
  }
})
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap&family=Montserrat&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
</style>