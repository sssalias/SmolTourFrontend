<template>
  <div class="form">
    <div class="container">
      <div class="wrapper">
        <form action="">
          <Input type="search" placeholder="Поиск туров"/>
          <input type="date"/>
          <Input type="date"/>
          <Input type="button" :btn="true" value="Найти"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Input from "@/components/Auth/Input.vue";

export default defineComponent({
  components: {Input},
  setup() {


    return {}
  }
})
</script>

<style lang="scss" scoped>
  .form {
    width: 100%;
    .container {
      width: 100%;
      .wrapper {
        width: 100%;
        form {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4,  1fr);
        }
      }
    }
  }
</style>