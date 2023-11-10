<template>
  <div class="container">
    <div class="wrapper">

      <div class="background">
        <Avatar class="avatar"/>
      </div>
      <UserInfo/>


    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Avatar from "@/components/Profile/Avatar.vue";
import UserInfo from "@/components/Profile/UserInfo.vue";

export default defineComponent({
  components: {UserInfo, Avatar},
  setup() {


    return {}
  }
})
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    .wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 5rem;
      .background {
        padding: 9rem;
        height: 100%;
        width: 100%;
        background: linear-gradient(105deg, #8DD3BB 0%, #FFCB9A 99.75%);
        border-radius: 10px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .avatar {
          position: absolute;
          bottom: -25%;
        }
      }
    }
  }
</style>