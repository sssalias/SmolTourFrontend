<template>
  <div class="item">
    <div class="container">
      <div @click="getId" class="wrapper">
        <span>{{ title }}</span>
        <h1>{{added}}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  setup() {


    return {}
  },
  props: ['id', 'title', 'users', 'added'],
  data: () => ({

  }),
  methods: {
    getId() {
      this.$emit('getId', {
        id: this.id
      })
    },
    checkId() {
      for (let el in this.users) {
        console.log(el)
      }
    }
  },
})
</script>

<style lang="scss" scoped>
  .item {
    border-radius: 10px;
    .container {
      box-shadow: 0 0 0 2px rgba(72, 71, 71, 0.1) ;
      border-radius: 10px;
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
      }
    }

  }
</style>