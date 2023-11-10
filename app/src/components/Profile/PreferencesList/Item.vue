<template>
  <div class="item">
    <div class="container">
      <div class="wrapper">
        <span>Развлечения</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  setup() {


    return {}
  }
})
</script>

<style lang="scss" scoped>
  .item {
    .container {
      box-shadow: 0 0 0 2px rgba(72, 71, 71, 0.1) ;
      border-radius: 10px;
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
      }
    }
  }
</style>