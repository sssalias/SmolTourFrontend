<template>
  <header>
    <div class="header__container">
      <div class="header__wrapper">
        <router-link class="link" to="/profile/info">
          <span>Профиль</span>
        </router-link>

        <router-link class="link" to="/profile/tours">
          <div class="line"></div>
          <span>Туры </span>
        </router-link>
        <router-link class="link" to="/profile/preferences">
          <div class="line"></div>
          <span>Преподчтения</span>
        </router-link>
      </div>
    </div>
  </header>
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
  header {
    height: 3vh;
    width: 100%;
    .header__container {
      height: 100%;
      width: 100%;
      box-shadow: 0px 4px 16px 0px rgba(17, 34, 17, 0.05);
      padding: 2.5rem;
      border-radius: 10px;

          //border-bottom: 1px solid gray;
      .header__wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .7rem;
        @include adaptive-font(16, 10);

        .link {
          color: #1C1B1F;
          text-decoration: none;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
          width: 33%;

          &:hover {
            color: #8DD3BB;
          }
        }
        .line {
          width: 3px;
          height: 4vh;
          background: rgba(17, 34, 17, 0.05);
          border-radius: 10px;
        }
      }
    }
  }
</style>