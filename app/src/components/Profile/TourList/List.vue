<template>
  <div class="list">
    <div class="container">
      <div class="wrapper">

        <Item/>
        <Item/>
        <Item/>
        <router-link class="link_a" to="/tour/create">Создать тур</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Item from "@/components/Profile/TourList/Item.vue";

export default defineComponent({
  components: {Item},
  setup() {


    return {}
  }
})
</script>

<style lang="scss" scoped>
  .list {
    .container {
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;

        .link_a {
          background: #8DD3BB;
          color: white;
          text-decoration: none;
          width: 100%;
          padding: 2rem;
          text-align: center;
          border-radius: 10px;
        }
      }
    }
  }
</style>