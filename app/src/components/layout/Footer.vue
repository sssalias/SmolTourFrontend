<template>
  <footer>
    <div class="container">
      <div class="wrapper">
        <p>О нас</p>
        <p>Профиль</p>
        <p>Стать спонсором</p>
        <p>Создать тур</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  setup() {


    return {}
  }
})
</script>

<style scoped lang="scss">
  footer {
    width: 100%;
    height: 20vh;
    .container {
      width: 100%;
      height: 100%;
      background: #8DD3BB;
      color: white;
      .wrapper {
        margin: 0 auto;
        width: 60%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 2rem;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>