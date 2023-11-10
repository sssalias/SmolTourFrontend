<template>
  <div class="container">
    <div class="wrapper">
      <img src="@/assets/media/header__offer.png" alt="">
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
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper {
      height: 80%;
      width: 100%;
      img {
        border-radius: 10px;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
</style>