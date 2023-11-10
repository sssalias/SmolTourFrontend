<template>
  <input class="input btn" :type="type" :placeholder="placeholder" v-if="btn" :value="value">
  <input class="input" :type="type" :placeholder="placeholder" v-else>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: [
      'type',
      'value',
      'placeholder',
      'btn'
  ],
  setup() {


    return {}
  }
})
</script>

<style lang="scss" scoped>
  @import "@/assets/mixins/adaptive_font_mixin";
  .input {
    padding: .6rem 1.1rem;
    border: 1px solid #1C1B1F;
    border-radius: 4px;
    @include adaptive-font(14, 10);
    letter-spacing: .15rem;
    width: 100%;
  }
  .btn {
    padding: .6rem 2rem;
    border: 1px solid #8DD3BB;
    background-color: #8DD3BB;
    color: white;
    transition: .4s;
    cursor: pointer;
    &:hover {
      transition: .4s;
      background-color: white;
      color: #8DD3BB;
    }
  }
</style>