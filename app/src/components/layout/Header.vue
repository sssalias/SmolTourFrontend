<template>
  <header :class="{'down': checkUrl()}">
    <div class="container">
      <div class="wrapper">

        <router-link to="/">
          <div class="logo">
            <img src="@/assets/media/logo-black.svg">
          </div>
        </router-link>

        <nav>
          <a href="">О НАС</a>
<!--          <a href="" class="btn">ПРОФИЛЬ</a>-->
          <a v-if="!store.$state.isAuth" href="https://auth.umom.pro/realms/umom-realm/protocol/openid-connect/auth?response_type=code&client_id=umom-client&state=sidyuf8s67dfisdgf&scope=openid profile&redirect_uri=https://umom.pro/redirect&code_challenge=Q5sbwGdAZcanDavEIs6g_VIz45Ryew_XdheqMRcQcaw&code_challenge_method=S256">ВОЙТИ</a>
          <router-link v-else to="/profile/info"><a href="">ПРОФИЛЬ</a></router-link>
        </nav>

      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useUserStore} from "@/store/useUserStore";

export default defineComponent({
  data: () => ({
    store: useUserStore()
  }),
  methods: {
    checkUrl() {
      return this.$route.path === '/';

    }
  },
  mounted() {

  }
})
</script>

<style lang="scss" scoped>
  @import "@/assets/mixins/adaptive_font_mixin";
  .down {
    position: absolute;
    top: 75vh;
  }
  header {
    width: 100%;
    //position: fixed;
    top: 0;
    background: white;


    .container {
      width: 100%;
      height: 80px;
      box-shadow: 0px 4px 16px 0px rgba(17, 34, 17, 0.05);
      .wrapper {
        margin: 0 auto;
        height: 100%;
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          @include adaptive-font(16, 13);

          a {
            text-decoration: none;
            color: #343434;
            &:hover {
              color: #8DD3BB;
            }
          }
        }
      }
      //@media screen and (max-width: 767px){
      //  .wrapper {
      //    width: 85%;
      //
      //    nav {
      //      gap: .7rem;
      //    }
      //  }
      //}
      @media screen and (max-width: 1200px) {
        .wrapper {
          width: 90%;

          nav {
            gap: .3rem;
          }
        }
      }
    }
  }
</style>