<template>
  <div class="avatar">
    <img src="https://kartinkof.club/uploads/posts/2022-12/1670433047_kartinkof-club-p-kartinki-ded-insaid-1.jpg" alt="">
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
  .avatar {
    height: 11rem;
    width: 11em;
    border-radius: 50%;
    border: 4px solid #d9644d;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }
</style>