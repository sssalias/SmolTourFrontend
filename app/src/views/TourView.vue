<template>
  <div class="wrapper">
    <div class="img__container">
      <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTtFgtmJ9prL1rfIvevG1QARMVFc1zJbFqCFMm1knQdfKSbCfAHDCBFagZO7UcXOVjck5pQoNDi5S6yT1Z1UapuuX2-dfHaUSoUZoByGA" alt="">
    </div>
    <h1 class="title">Smol</h1>
    <div class="content">
      <p>asfasfas</p>
      <p>asfasf</p>
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
  .wrapper {
    margin: 80px auto;
    width: 60%;

    .img__container {
      width: 100%;
      height: 32rem;

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 10px;
      }
    }

    .title {
      letter-spacing: .2rem;
    }
    .content {
      
    }
  }
</style>