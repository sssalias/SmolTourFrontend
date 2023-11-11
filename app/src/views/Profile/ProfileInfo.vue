<template>
  <div>
    <section>
      <h2>Фамилия Имя</h2>
      <span>{{ name }}</span>
    </section>

    <section>
      <h2>e-mail</h2>
      <span>{{ email }}</span>
    </section>
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
  section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
</style>