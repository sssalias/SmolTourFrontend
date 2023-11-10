<template>
  <div class="list">
    <div class="container">
      <div class="wrapper">

        <Item/>
        <Item/>
        <Item/>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Item from "@/components/Profile/TourList/Item.vue";

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
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
      }
    }
  }
</style>