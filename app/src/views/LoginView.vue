<template>
  <div class="login">
    <div class="container">
      <div class="wrapper">
        <Login/>
        <AuthOffer class="offer"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Login from "@/components/Auth/Login.vue";
import AuthOffer from "@/components/Auth/AuthOffer.vue";

export default defineComponent({
  components: {AuthOffer, Login},
  setup() {


    return {}
  }
})
</script>

<style scoped>
  .container {
    width: 100%;
    height: 80vh;

    .wrapper {
      padding: 2rem 0;
      margin: 0 auto;
      height: 100%;
      width: 60%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      gap: 5rem;
    }
  }
  @media screen and (max-width: 1200px) {
    .container {
      .wrapper {
        width: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        .offer {
          display: none;
        }
      }
    }
  }
</style>