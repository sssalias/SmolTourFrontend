<template>
  <div class="offer">
    <div class="container">
      <div class="wrapper">

        <div class="logo">
<!--          <object type="image/svg+xml" data="@/assets/media/Logo.svg"></object>-->

          <img src="@/assets/media/Logo.svg" alt="">
        </div>

        <div class="content">
          <h2>Впечатления, которые остаются навсегда!</h2>
          <h1>ОТКРОЙ СМОЛЕНСК С SMOLTOUR!</h1>
          <p>Специальные предложения для вас!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import Header from "@/components/layout/Header.vue"

export default defineComponent({
  components: {Header}
})
</script>

<style lang="scss" scoped>
  @import "@/assets/mixins/adaptive_font_mixin";
  .offer {
    //padding: 2rem 2rem 0;
    .container {
      width: 100%;
      height: 75vh;
      //border-radius: 24px 24px 0 0 ;

      background-image: url("@/assets/media/header__offer.png");
      background-size: cover;
      background-position: center;
      background-attachment: fixed;

      .wrapper {
        text-align: center;
        padding: 2rem;
        height: 60%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        color: white;

        .content {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          h1 {
            font-family: 'Montserrat', sans-serif;
            letter-spacing: .3rem;
            @include adaptive-font(45, 25);
            //font-size: 45px;
          }
          h2 {
            letter-spacing: .2rem;
            @include adaptive-font(20, 15);
          }
          p {
            letter-spacing: .1rem;
            @include adaptive-font(18, 14)
          }
        }
      }
    }
  }
</style>