<template>
  <div>
    <div class="container">
      <div class="wrapper">
        <form :class="{form__left: pos === 'left', form__right: pos === 'right'}" action="">
          <h3>{{ title }}</h3>
          <p>{{ postTitle }}</p>
          <slot></slot>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: [
      'title', 'postTitle', 'pos'
  ]
})
</script>

<style lang="scss" scoped>
  @import "@/assets/mixins/adaptive_font_mixin";
  .form__left {
    align-items: flex-start;
  }
  .form__right {
    align-items: flex-end;
  }
  form {
    display: flex;
    justify-content: center;
    //align-items: flex-start;
    flex-direction: column;
    gap: 2.5rem;

    h3 {
      letter-spacing: .2rem;
      @include adaptive-font(30, 26)
    }
    p {
      @include adaptive-font(16, 13)
    }
  }
  @media screen and (max-width: 1200px) {
    form {
      align-items: center;
    }
  }
</style>