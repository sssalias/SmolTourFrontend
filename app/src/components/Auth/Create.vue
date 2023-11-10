<template>
  <div class="create">
    <auth title="Регистрация" post-title="Создайте свой аккаунт" pos="right">
      <Input type="text" placeholder="ФИО" :value="null"/>
      <Input type="email" placeholder="example@email.com" :value="null"/>
      <Input type="password" placeholder="Пароль" :value="null"/>
      <Input type="password" placeholder="Повтор пароля" :value="null"/>
      <Input type="button" :btn="true" placeholder="example@email.com" value="Создать"/>

      <div class="link">
        <span>Уже есть аккаунт? <router-link class="link__to" to="/login">Войти</router-link></span>
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
  justify-content: center;
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