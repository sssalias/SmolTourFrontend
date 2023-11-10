<template>
  <div class="create__form">
    <div class="container">
      <div class="wrapper">
        <form action="">
          <h1>{{ title }}</h1>
          <Input placeholder="Название тура"/>
          <Input placeholder="Автор"/>
          <div class="img__upload">
            <label for="img">Фото тура</label>
            <Input id="img" type="file"/>
          </div>
          <label for="">Описание тура</label>
          <MarkdownRedactor/>
          <Input type="button" :btn="true" value="Создать"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Input from "@/components/Auth/Input.vue";
import MarkdownRedactor from "@/components/CreateTour/MarkdownRedactor.vue";

export default defineComponent({
  components: {MarkdownRedactor, Input},
  setup() {


    return {}
  },
  props: ['title']
})
</script>

<style lang="scss" scoped>
  @import "@/assets/mixins/adaptive_font_mixin";
  .create__form {
    width: 100%;
    .container {
      width: 100%;
      .wrapper {
        width: 100%;

        form {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          gap: 2rem;
          width: 100%;

          h1 {
            color: #8DD3BB;
            @include adaptive-font(30, 26)
          }

          .img__upload {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            width: 100%;
          }
          label {
            @include adaptive-font(14, 10);
          }
        }
      }
    }
  }
</style>
