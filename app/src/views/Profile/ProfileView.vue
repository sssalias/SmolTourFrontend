<template>
  <div class="profile">
    <div class="container">
      <div class="wrapper">
        <Background/>
        <ProfileHeader/>
        <div class="nav__container">
          <div class="nav__wrapper">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Background from "@/components/Profile/Background.vue";
import ProfileHeader from "@/components/Profile/ProfileHeader.vue";

export default defineComponent({
  components: {ProfileHeader, Background},
  setup() {


    return {}
  }
})
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
  height: 100vh;
  .container {
    width: 100%;
    height: 100%;
    .wrapper {
      margin: 80px auto;
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;

      .nav__container {
        margin-top: 3rem;
        border-radius: 10px;
        box-shadow: 0px 4px 16px 0px rgba(17, 34, 17, 0.05);
        width: 100%;
        padding: 2rem;
        .nav__wrapper {

        }
      }
    }
    @media screen and (max-width: 1200px) {
      .wrapper {
        width: 90%;
      }
    }
  }
}
</style>