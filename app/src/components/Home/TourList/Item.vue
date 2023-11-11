<template>
  <div class="item">
    <div class="container">
      <div class="wrapper">
        <div class="img__wrapper">
          <img class="img" :src="image" alt="(">
        </div>
        <div class="content">
          <h2 class="title">{{ title }}</h2>
          <p class="company">Автор: <strong>{{ company }}</strong></p>
          <p class="contact">Контакты: <strong>{{ contact }}</strong></p>
        </div>

        <div class="cost">
          <p>Цена: 2000Р</p>
          <a href="" class="btn">Подробнее</a>
        </div>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import useHomeToursList from "@/store/useHomeToursList";

export default defineComponent({
  setup() {


    return {}
  },
  data: () => ({
    store: useHomeToursList(),
    image: ''
  }),
  props: [
      'img',
      'title',
      'description',
      'cost',
      'photo_id',
      'company',
      'contact'
  ],
  methods: {
    async getPhoto() {
      this.image = await this.store.getImage(this.photo_id)
    }
  },
  async mounted() {
    await this.getPhoto()
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_adaptive_font_mixin.scss";
.item {
  width: 100%;
  .container {
    width: 100%;
    .wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: 20% 65% 15%;

      .img__wrapper {
        height: 10rem;

        .img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 10px 0 0 10px;
        }
      }
      .content {
        padding: 1rem 1rem;
        border-right: 2px solid rgba(17, 34, 17, 0.05);
        border-radius: 2px;

        .title {
          font-weight: bold;
          letter-spacing: .1rem;
          @include adaptive-font(20, 16);
        }
        p {
          @include adaptive-font(15, 11);
        }
      }
      .cost {
        padding: 0 1rem;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;

        p {
          color: #1C1B1F;
          @include adaptive-font(16, 12);
          font-weight: bold;
        }
        .btn {
          background: #8DD3BB;
          color: white;
          padding: .8rem .9rem;
          border-radius: 10px;
          text-decoration: none;
          transition: .4s;
          @include adaptive-font(13, 10);
        }
        .delete {
          border: 1px solid red;
          color: white;
          background: red;

          &:hover {
            transition: .4s;
            background: white;
            border: 1px solid red;
            color: red;
          }
        }
        .edit {
          border: 1px solid #8dd3cd;
          color: white;
          background: #8dd3cd;

          &:hover {
            transition: .4s;
            background: white;
            border: 1px solid #8dd3cd;
            color: #8dd3cd;
          }
        }
      }
    }
    @media screen and (max-width: 767px) {
      .wrapper {
        grid-template-columns: repeat(1, 1fr);

        .content {
          border: none;
        }
      }
    }
  }
}
</style>