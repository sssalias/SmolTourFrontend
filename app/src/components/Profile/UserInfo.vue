<template>
  <div class="container">
    <div class="wrapper">
      <h2>{{name}}</h2>
      <p>{{email}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import axios from "axios";

export default defineComponent({
  setup() {

    return {}
  },
  data: () => ({
    name: '',
    email: ''
  }),
  methods: {
    async getInfo() {
      await axios.get('https://backend.umom.pro/profile/info', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token')
        }
      })
          .then(
            res => {
              this.name = res.data.name
              this.email = res.data.email
              localStorage.setItem('name', this.name)
              localStorage.setItem('email', this.email)
            })
          .catch(
              e => {
                console.log(e)
              }
          )
    }
  },
  mounted() {
    this.getInfo()
  }

})
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_adaptive_font_mixin.scss";
  .container {
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: .4rem;
      h2 {
        font-family: 'Montserrat', sans-serif;
        color: #1C1B1F;
        text-align: center;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        @include adaptive-font(24, 20)
      }
      p {
        font-family: 'Montserrat', sans-serif;
        color: gray;
        text-align: center;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        @include adaptive-font(16, 12)
      }
    }
  }
</style>