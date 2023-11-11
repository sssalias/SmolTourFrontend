<template>
  <div class="list">
    <div class="container">
      <div class="wrapper">
        <Item v-for="el in tours" :title="el.title" :company="el.company" :contact="el.concat"  :description="el.description" :photo_id="el.photo_id" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Item from "@/components/Home/TourList/Item.vue";
import UseHomeToursList from "@/store/useHomeToursList";

export default defineComponent({
  components: {Item},
  setup() {


    return {}
  },
  data: () => ({
    store: UseHomeToursList(),
    tours: [],
  }),
  methods: {
    async getTours() {
      return await this.store.getTours()
    },
  },
  async beforeMount() {
    const resTours= await this.getTours()
    this.tours = resTours.data
    console.log(this.tours)
  }
})
</script>

<style lang="scss" scoped>
  .list {
    width: 100%;
    .container {
      width: 100%;
      .wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2.5rem;
        justify-content: center;
      }
    }
  }
</style>