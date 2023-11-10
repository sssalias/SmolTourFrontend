<template>
  <HeaderOffer/>
  <div class='wrapper'>
    <Search/>
    <List/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HeaderOffer from "@/components/layout/HeaderOffer.vue";
import Search from "@/components/Home/search/Search.vue";
import List from "@/components/Home/TourList/List.vue";

export default defineComponent({
  components: {List, Search, HeaderOffer},
  setup() {


    return {}
  }
})
</script>

<style lang="scss" scoped>
  .wrapper {
    margin: 240px auto;
    width: 60%;
    height: 200vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
  }
  @media screen and (max-width: 1200px) {
    .wrapper {
      margin-top: 800px;
      width: 90%;
    }
  }
</style>