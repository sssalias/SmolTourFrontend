<template>
  <Header></Header>
  <div class="wr">
    <router-view/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default defineComponent({
  components: {Footer, Header},
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