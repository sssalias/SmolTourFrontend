<template>
  <div class="list">
    <div class="container">
      <div class="wrapper">

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
  width: 100%;
  .container {
    width: 100%;
    .wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2.5rem;
      justify-content: center;
    }
  }
}
</style>