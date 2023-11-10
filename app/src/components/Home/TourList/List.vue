<template>
  <div class="list">
    <div class="container">
      <div class="wrapper">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Item from "@/components/Home/TourList/Item.vue";

export default defineComponent({
  components: {Item},
  setup() {


    return {}
  }
})
</script>

<style lang="scss" scoped>
  .list {
    .container {
      .wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2.5rem;
        justify-content: center;
      }
    }
  }
</style>