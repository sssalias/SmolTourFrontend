<template>
  <div class="item">
    <div class="container">
      <div class="wrapper">
        <div class="img__wrapper">
          <img class="img" src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTtFgtmJ9prL1rfIvevG1QARMVFc1zJbFqCFMm1knQdfKSbCfAHDCBFagZO7UcXOVjck5pQoNDi5S6yT1Z1UapuuX2-dfHaUSoUZoByGA" alt="">
        </div>
        <div class="content">
          <h2 class="title">Smol</h2>
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aperiam assumenda at aut..</p>
        </div>

        <div class="cost">
          <p>Цена: 2000Р</p>
          <a href="" class="btn delete">Удалить</a>
          <a href="" class="btn edit">Редактировать</a>
        </div>

      </div>
    </div>

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
  @import "@/assets/mixins/_adaptive_font_mixin.scss";
  .item {
    .container {
      .wrapper {
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
          padding: 0 1rem;
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