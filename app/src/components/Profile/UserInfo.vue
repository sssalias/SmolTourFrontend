<template>
  <div class="container">
    <div class="wrapper">
      <h2>Alex Efm.</h2>
      <p>alexn.efm@gmail.com</p>
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
@import "@/assets/mixins/_adaptive_font_mixin.scss";
  .container {
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: .4rem;
      h2 {
        font-family: 'Montserrat', sans-serif;
        color: #1C1B1F;
        text-align: center;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        @include adaptive-font(24, 20)
      }
      p {
        font-family: 'Montserrat', sans-serif;
        color: gray;
        text-align: center;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        @include adaptive-font(16, 12)
      }
    }
  }
</style>