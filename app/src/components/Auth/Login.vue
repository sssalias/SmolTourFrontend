<template>
  <div class="login">
    <auth title="Авторизация" post-title="Войдите в свой аккаунт" pos="left ">
      <Input type="email" placeholder="example@email.com" :value="null"/>
      <Input type="password" placeholder="Пароль" :value="null"/>
      <div class="checkbox">
        <input type="checkbox" id="checkbox"/>
        <label for="checkbox">Запомнить меня</label>
      </div>
      <Input type="button" :btn="true" placeholder="example@email.com" value="Войти"/>

      <div class="link">
        <span>Ещё нет аккаунта? <router-link class="link__to" to="/create">Создать</router-link></span>
      </div>

    </auth>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Auth from "@/components/Auth/Auth.vue";
import Input from "@/components/Auth/Input.vue";

export default defineComponent({
  components: {Input, Auth},
  setup() {


    return {}
  }
})
</script>

<style lang="scss" scoped>
  @import "@/assets/mixins/adaptive_font_mixin";
  .checkbox {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    label {
      @include adaptive-font(14, 10);
    }
  }
  .link {
    width: 100%;
    text-align: center;
    @include adaptive-font(14, 10);
    &:before {
      content: '';
      display: block;
      height: 1px;
      background: #8DD3BB;
      width: 100%;
      margin: 0 auto 2.5rem;
      transition: 1s;
    }
    .link__to {
      color: #8DD3BB;
    }
  }
</style>