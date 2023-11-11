<!-- /tours/create -->
<template>
  <div class="create__form">
    <div class="container">
      <div class="wrapper">
        <form action="">
          <h1>{{ title }}</h1>
          <input v-model="titleTour" type="text"  placeholder="Название тура"/>
          <input v-model="company" type="text" placeholder="Автор"/>
          <input v-model="contact" type="text" placeholder="Контакты"/>
          <div class="img__upload">
            <label for="img">Фото тура</label>
            <input @change="previewFiles" id="img" type="file"/>
          </div>
          <label for="">Описание тура</label>
          <MarkdownRedactor/>
          <input class="btn" @click="getData"  type="button" value="Создать"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import MarkdownRedactor from "@/components/CreateTour/MarkdownRedactor.vue";

import Tour from "@/models/Tour"

import {useTourStore} from "@/store/useToursStore";


export default defineComponent({
  components: {MarkdownRedactor},
  setup() {


    return {}
  },
  data: () => ({
    store: useTourStore(),
    titleTour: '',
    company: '',
    contact: '',
    description: '',
    photo_id: 1,
    file: null,
    response: null,
    accessToken: localStorage.getItem('access_token')
  }),
  methods: {
    previewFiles(event:any) {
      this.file = event.target.files[0]
      console.log(this.file)
    },
    async getData() {
      const tour = new Tour(this.titleTour, this.company, this.store.$state.value, this.contact, this.file, 1)
      await this.store.uploadImg(tour, this.accessToken)
          .then(res => {
            this.store.createTour(tour, this.accessToken, res.data.file_id)
          })
      // this.store.createTour(tour, this.accessToken, photoId)
    }
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

          input {
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
