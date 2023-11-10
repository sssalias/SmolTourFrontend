<template>
  <div class="wrapper">
    <CreateForm title="Обновить тур"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import CreateForm from "@/components/CreateTour/CreateForm.vue";

export default defineComponent({
  components: {CreateForm},
  setup() {


    return {}
  }
})
</script>

<style lang="scss" scoped>
  .wrapper {
    margin: 80px auto;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
  }
</style>