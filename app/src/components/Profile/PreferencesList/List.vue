<template>
  <div class="list">
    <div class="container">
      <div class="wrapper">
        <Item class="selected" @click="changePreference" :users="usersPreferences" @getId="selectItem" v-for="el in preferences" :id="el.id" :title="el.title" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Item from "@/components/Profile/PreferencesList/Item.vue";
import {useUserPreferencesStore} from "@/store/useUserPreferencesStore";

export default defineComponent({
  components: {Item},
  data: () => ({
    store: useUserPreferencesStore(),
    preferences: [],
    usersPreferences: [],
    usersId: [],
    addedPreferences: []
  }),
  methods: {
    changePreference(e:any) {
      console.log(e.target.className)
    },
    async selectItem(data:any) {
      await this.addUsersPreferences(data.id)
    },
    async getPreferences() {
      await this.store.getAll()
          .then(
              res => {
                this.preferences = res.data
              }
          )
    },
    async getUsersPreferences() {
      await this.store.getUsers(localStorage.getItem('access_token'))
          .then(
              res => {
                this.usersPreferences = res.data
              }
          )
    },
    async addUsersPreferences(id:any) {
      await this.store.addUserPreference(id, localStorage.getItem('access_token'))
          .then(
              res => {
                this.addedPreferences = res.data
              }
          )

    }
  },
  async mounted() {
    await this.getPreferences()
    await this.getUsersPreferences()
  }
})
</script>

<style lang="scss" scoped>
  .list {
    .container {
      .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2.5rem;
        justify-content: center;

        .selected {
          background: #8DD3BB;
          color: white;
        }
        .delete {
          background: red;
          color: white;
        }
        .normal {
          background: transparent;
          color: black;
        }
      }
    }
  }
</style>